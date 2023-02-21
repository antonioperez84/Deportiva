import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Submenu (props){

  const [cerrar, setCerrar] = useState(false)

  const [user, setUser] = useState()

  useEffect(() => {
    if(sessionStorage.getItem('nombre'))
      setUser('/home')
    else
      setUser('/login')
  });

  const cerrado = ()=>{
    if(props.abrirCerrar)
      setCerrar(false)
    else
      setCerrar(true)
  }

  return(
    <div className={`z-50 ${cerrar ? 'hidden':'absolute'} flex justify-end w-full`}>
      <div className='h-32 w-40 bg-green-500 mr-2 
                      rounded-xl border-2 text-white font-bold grid items-center justify-center '>
       <ul>
         <li> 
          <Link to={user} onClick={cerrado} className='hover:text-black'>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='/jugadores' onClick={cerrado} className='hover:text-black'>
            Jugadores
          </Link>
        </li>
        <li>
          <Link to='/crearJugador' onClick={cerrado} className='hover:text-black'>
            Añadir Jugador
          </Link>
        </li>
        <li>
          <Link to='/resultados' onClick={cerrado} className='hover:text-black'>
            Resultados
          </Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Submenu