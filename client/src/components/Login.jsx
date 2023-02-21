import { Formik, Form } from "formik";
import React, { useEffect, useState, Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useJugador } from "../context/JugadoresProvider.jsx";
import {BsPencilSquare} from 'react-icons/bs'

function Login ()
{
  const {obtenerUsuarios, usuarios} = useJugador()
  const [user, setUser] = [{}]

  const [error, setError] = useState()

  const navigate = useNavigate()

  useEffect(() =>{
    
    if(sessionStorage.getItem('nombre'))
      navigate('/home')

    obtenerUsuarios()
  },[])

  
  return(
    <div className="flex justify-center items-center">
      <div className="flex flex-col columns-1 text-white font-bold justify-center items-center border-2 border-white rounded-xl w-80 shadow-md shadow-black">
        
        <h1 className="text-5xl my-3 font-bold">Login</h1>
        
          <Formik className="flex flex-col justify-center items-center"
            onSubmit={async (values)=>{
              
              const user = usuarios.filter(usuario => usuario.usuario === values.usuario)
              if(user[0]){              
                if (user[0].usuario === values.usuario && user[0].password == values.password){
                  sessionStorage.setItem('nombre',user[0].nombre)
                  sessionStorage.setItem('autenticado',true)
                  navigate('/home')
                }
              }
              else
                setError('Usuario o password incorrectos')
            }
          }
            initialValues={user}
            >
          {({handleSubmit, handleChange, values})=>(
              <Form>
                <div className="grid grid-cols-1 gap-2">
                  <label>Usuario</label>
                  <input onChange={handleChange} 
                    className="rounded-lg text-black font-bold p-1 shadow-md shadow-black" 
                    required type='text' name='usuario' value={values.usuario}/>

                  <label>Password</label>
                  <input onChange={handleChange} 
                    className="rounded-lg text-black shadow-md shadow-black p-1" 
                    type='password' required name='password' value={values.password}/>

                  <button type="submit" onSubmit={handleSubmit} className="bg-green-600 my-3 h-8 rounded-lg  shadow-md shadow-black">Enviar</button>

                  <div className="grid items-center justify-center mb-1 w-full text-red-500">
                    {error}
                  </div>

                  <div className="grid items-center justify-center mb-3 w-full">
                    <span>¿No estás registrado?</span>

                    <div className="flex justify-center items-center">
                      <Link to='/registro'>
                        <span>Accede al registro </span>
                        <BsPencilSquare className="ml-2 "/>
                      </Link>
                    </div>  
                  </div>

                </div>
              </Form>
          )}
          </Formik>
      </div>
    </div>   
  )
}

export default Login