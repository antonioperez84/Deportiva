import React from "react";
import { Formik, Form } from "formik";
import { useJugador } from "../context/JugadoresProvider"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsuarios } from "../api/jugadores.api";

function Registro() {

  const [usuario, setUsuario] = [{}]
  const { crearUsuarios, usuarios, obtenerUsuarios } = useJugador()
  const [error, setError] = useState();
  const navigate = useNavigate()
  
  useEffect(() =>{
    
    const users = getUsuarios()

    if(sessionStorage.getItem('nombre'))
      navigate('/home')
  },[])

  return (  

    <div className=' flex items-center justify-center'>
    <div className=' flex flex-col p-4
        text-white justify-center 
        w-auto rounded-xl border-white border-2 shadow-md shadow-black'>
        <h1 className='flex text-5xl text-white font-bold mb-3 items-center justify-center '>Registro</h1>
        
        <Formik 
        initialValues={usuario}
        onSubmit={async (values, actions)=>{
          
          const user = usuarios.filter(usuario => usuario.usuario === values.usuario)

          if(user[0])
            setError('Usuario existente')
          else{
            await crearUsuarios (values)
            actions.resetForm()
            navigate('/login')
          }
        }
        } 
        enableReinitialize={true}>
        
        {({handleChange, handleSubmit, values})=>(
        <Form onSubmit={handleSubmit} className='grid columns-1'>
            <label className='text-white'>Nombre</label>
            <input type='text' name='nombre' placeholder='Nombre' onChange={handleChange} 
            value={values.nombre} className='text-black font-bold py-1 px-1 rounded-lg w-60 shadow-md shadow-black' required='true'></input>
            
            <label className='text-white'>Apellidos</label>
            <input type='text' name='apellidos' placeholder='Apellidos' onChange={handleChange} 
            value={values.apellidos} className='text-black font-bold py-1 px-1 rounded-lg w-60 shadow-md shadow-black' required='true'></input>

            <label className='text-white my-1'>Correo</label>
            <input type='email' name='correo' placeholder='Correo...' onChange={handleChange}
            value={values.correo} className='w-60 text-black font-bold py-1 px-1 rounded-lg shadow-md shadow-black' required='true'></input>
            
            <label>Usuario</label>
            <input onChange={handleChange} 
              className="rounded-lg text-black w-40 font-bold p-1 shadow-md shadow-black" 
              required type='text' name='usuario' value={values.usuario}/>

            <label>Password</label>
            <input onChange={handleChange} 
              className="rounded-lg text-black shadow-md w-40 shadow-black p-1" 
              type='password' required name='password' value={values.password}/>
            
            <div className="grid grid-cols-2 gap-3">
              <button type='submit' className='bg-green-600 shadow-md shadow-black text-white gap-4 py-1 my-3 rounded-lg'>
                Guardar
              </button>
              <button type='button' value='reset'className='bg-red-500 shadow-md shadow-black text-white gap-4 py-1 my-3 rounded-lg'>
                Limpiar
              </button>
              <span className="text-red-500 text-md font-bold">{error}</span>
            </div>
        </Form>
        
        )}
        </Formik>
    </div>
    </div>
  );
}

export default Registro