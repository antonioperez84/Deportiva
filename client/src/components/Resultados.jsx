import React, { useEffect, useState } from "react"
import { useJugador } from "../context/JugadoresProvider"
import { Form, Formik } from 'formik';
import { Link, useNavigate} from "react-router-dom";
import {MdDeleteForever} from 'react-icons/md'
import '../App.css'

function Resultados() {

  const { crearResultados, resultados, obtenerResultados, borrarResultados} = useJugador()

  const [resultado, setResultado] = useState({
  })

  const navigate = useNavigate()

  useEffect(() =>{
    obtenerResultados()
  })
  
  function eliminarResultado(id){
    borrarResultados(id);
    navigate('/resultados')
  }

  function listarResultados (){

    return resultados.map((resultado)=>
      <>
        <tr key={resultado.id} className="text-center">
          <td>{resultado.resultado_azul}</td>
          <td>{resultado.resultado_blanco}</td>
          <td>{resultado.fecha}</td>
          <td>
            <Link onClick={()=>eliminarResultado(resultado.id)}>
              <MdDeleteForever className="h-8 w-8"/>
            </Link>
          </td>
        </tr>
      </>
    )
  }

  return(
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-col items-center w-96 border-2 rounded-2xl py-2">

        <h1 className="text-5xl text-white font-bold my-2 text-center">Resultados</h1>
        
        <div className="grid columns-2 my-5 items-center justify-center">
          <Formik
            onSubmit={async (values)=>{
              
              crearResultados(values)
              
              navigate('/resultados')
                
              }
            }
            initialValues={resultado}
          >
            {({handleSubmit, handleChange, values})=>(

            <Form onSubmit={handleSubmit} className="grid grid-cols-2 text-white gap-2">
              <label>Equipo Azul: </label>
              <input type='number' onChange={handleChange} value={values.resultado_azul} required name='resultado_azul' className="w-16 text-black rounded-lg text-center font-bold shadow-md shadow-black"></input>

              <label>Equipo Blanco: </label>
              <input type='number' onChange={handleChange} value={values.resultado_blanco} required name='resultado_blanco' className="w-16 text-black  rounded-lg text-center font-bold shadow-md shadow-black"></input>

              <label>Fecha: </label>
              <input type='date' onChange={handleChange} value={values.fecha} name='fecha' required className="text-black font-bold text-center rounded-lg shadow-md shadow-black"/>

              <button type="submit" className="rounded-lg bg-green-600 py-1 font-bold shadow-md shadow-black">Añadir</button>
            
            </Form>
            )}
          </Formik>
        </div>

        <div className="grid justify-center items-center columns-1 text-center">
          <table className=" bg-slate-300 text-xl border-4 border-black">
            <th className="border-y-2 border-black px-6">Azules</th>
            <th className="border-y-2 border-black">Blancos</th>
            <th className="border-y-2 border-black">Fecha</th>
            <th className="border-y-2 border-black"></th>
            {listarResultados()}
          
          </table>
        </div>
      </div>
    </div>  
    )
}

export default Resultados
