import React from 'react';
import { useJugador } from "../context/JugadoresProvider.jsx";
import { useNavigate } from 'react-router-dom';
import '../App.css'

const JugadorTarjeta = ({jugador}) => {

  const {borrarJugadores} = useJugador()

  const navigate = useNavigate()

  return (
    
      <div className='border-white bg-black border-2 p-2 rounded-md justify-between '>
        <div className='w-15'>
          <div className='flex justify-between text-white'>
            <h3 className='text-xl font-bold'>{jugador.nombre}</h3>
            <h3 className='text-sm font-bold'>{jugador.edad}</h3>
          </div>
          <h3 className='text-green-900 font-bold text-xl'>{jugador.posicion}</h3>
        </div>
        <div className='justify-end'>
          <button className='bg-green-700 font-bold rounded-md px-1 py-1 m-0' onClick={() => navigate(`/editarJugador/${jugador.id}`)}>Editar</button>
          <button className='bg-red-700 font-bold rounded-md px-2 py-1 m-1' onClick={() => borrarJugadores(jugador.id)}>Borrar</button>
        </div>
      </div>
    
  );
}

export default JugadorTarjeta;
