import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useJugador } from '../context/JugadoresProvider.jsx';
import { useNavigate, useParams } from "react-router-dom";

function JugadorForm() {
 
  const {crearJugadores, obtenerJugador, actualizaJugador} = useJugador()
  const [jugador, setJugador] = useState({
  })

  const params = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    
    const cargarJugador=async()=>{
      if (params.id){
        const datosJugador = await obtenerJugador(params.id)
        setJugador({
          nombre: datosJugador.nombre,
          edad: datosJugador.edad,
          posicion: datosJugador.posicion,
          foto: datosJugador.foto
        })
      }
      else{
        
      }
    }

    cargarJugador()    

  }, []);

  return (  
    
      <div className=' flex flex-col p-4
        text-white justify-center 
         rounded-xl border-white w-96 border-2 shadow-md shadow-black'>
        <h1 className='text-5xl text-white font-bold text-center mb-2'>{
        params.id ? 'Editar Jugador' : 'Nuevo Jugador'
        }</h1>
        
        <Formik 
        initialValues={jugador}
        onSubmit={async (values, actions)=>{
          
          if (params.id){
            const id = new Number(params.id)
            await actualizaJugador(id, values)  
          }else{
            await crearJugadores(values)  
          }
            actions.resetForm()  
            navigate('/')
          }
        } 
        enableReinitialize={true}>
        
        {({handleChange, handleSubmit, values, isSubmitting})=>(
        <div className="grid columns-2 my-3 items-center justify-center">

          <Form onSubmit={handleSubmit} className='grid grid-cols-2 gap-2 items-center '>
            <label className='flex text-white items-center justify-center'>Nombre</label>
            <input type='text' name='nombre' placeholder='Nombre' onChange={handleChange} 
              value={values.nombre} className='text-black font-bold py-1 px-1 rounded-lg shadow-md shadow-black' required='true'></input>
            
            <label className='text-white flex items-center justify-center my-1'>Edad</label>
            <input type='number' name='edad' placeholder='Edad...' onChange={handleChange}
              value={values.edad} className='text-black w-20 font-bold py-1 px-1 rounded-lg shadow-md shadow-black' required='true'></input>
            
            <label className='text-white my-1 flex items-center justify-center'>Posicion</label>
            <select name='posicion' onChange={handleChange}
              value={values.posicion} className=' text-black font-bold rounded-lg p-1 w-28 shadow-md shadow-black' required='true'>
              <option value=''>Posición</option>
              <option value='Portero'>Portero</option>
              <option value='Defensa'>Defensa</option>
              <option value='Medio'>Medio</option>
              <option value='Delantero'>Delantero</option>
            </select>
            
            <button type='submit' disabled={isSubmitting} className='bg-green-600 py-1 mt-2 w-auto shadow-md shadow-black text-white font-bold gap-4  rounded-lg'>
              {isSubmitting ? 'Guardando' : 'Guardar'}
            </button>
            <button type='button' className='bg-red-500 py-1 mt-2 w-auto shadow-md shadow-black text-white font-bold gap-4  rounded-lg'>
              Limpiar
            </button>
            
        </Form>
        </div>
        )}
        </Formik>
      </div>
    
  );
}

export default JugadorForm;