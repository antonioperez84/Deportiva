import React, { useEffect, useRef, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {TfiWrite} from 'react-icons/tfi'
import {VscGraph} from 'react-icons/vsc'
import {BsFillFileEarmarkPersonFill, BsMenuDown} from 'react-icons/bs'
import {BiHomeCircle} from 'react-icons/bi'

function NavBar (props){

  const user = useRef()
  const [autenticado, setautenticado] = useState();
  const [bienvenida, setbienvenida] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    if(sessionStorage.getItem('nombre')){
      setautenticado(true)
      user.current='/home'
    }
    else{
      setautenticado(false)
      user.current='/login'
    } 
  });

  useEffect(() => {
    saludo()
  }, [autenticado]);

  const logout=()=>{
    sessionStorage.removeItem('nombre')
    
    user.current=('/login')
    navigate('/login')
  }

  const saludo=()=>{
    if(autenticado){
      setbienvenida(
        <div className='text-white font-bold'>
          Bienvenido {sessionStorage.getItem('nombre')}
          <button onClick={logout} className='bg-red-700 w-5 mx-3 rounded-lg'>X</button>
        </div>
       )
    }else{
      setbienvenida(<div className='text-white font-bold flex justify-center w-auto'>Identificate</div>)
    }
  }

  return (
    <div className='grid grid-cols-3 w-auto justify-center -z-10'>
      <h1 className='items-start text-white font-bold px-2 text-4xl justify-start hidden md:block'>Peña El Botijo</h1>
      
      <img src='../src/imagenes/botijo.png' className='my-2 mx-2 w-12 h-12 md:hidden'/>
      
      <div className=' flex justify-center text-xs items-center'>{bienvenida}</div>
      
      <div className='hidden font-bold text-white px-2 md:block'>
        
        <ul className='flex my-2 items-end justify-end '>
          <li>
           
          <Link to={user.current}>
            <BiHomeCircle className='w-12 h-12 ml-5 hover:text-green-500'/>
          </Link>
          </li>
          <li>
          <Link to='/jugadores'>
            <BsFillFileEarmarkPersonFill className='w-12 h-12 ml-5 hover:text-green-500'/>
          </Link>
          </li>
          <li>
          <Link to='/crearJugador'>
            <TfiWrite className='w-12 h-12 ml-5 hover:text-green-500'/>
          </Link>
          </li>
          <li>
          <Link to='/resultados'>
            <VscGraph className='w-12 h-12 ml-5 hover:text-green-500'/>
          </Link>
          </li>
        </ul>  
      </div>

      <div className='flex justify-end text-white cursor-pointer md:hidden'>
        <BsMenuDown abrirCerrar={true} onClick={props.abrirCerrar} className='w-10 h-10 mr-5 mt-2'/>
      </div>
    </div>
  );
}

export default NavBar;
