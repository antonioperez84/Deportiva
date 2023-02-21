import {useEffect} from 'react';
import JugadorTarjeta from './JugadorTarjeta.jsx';
import { useJugador } from "../context/JugadoresProvider.jsx";
import '../App.css'

function JugadoresPage(){
  
  const {jugadores, obtenerJugadores} = useJugador()

  useEffect(() =>{
    obtenerJugadores()
  },[])
  
function renderizarInicio (){
  
  if (jugadores.length ===0 ) return <h1>No hay jugadores</h1>
  
  return jugadores.map((jugador) => <JugadorTarjeta jugador={jugador} key={jugador.id}/>)
}

  return(
    <div className='w-auto'>
      <h1 className='text-5xl text-white font-bold text-center py-3'>Jugadores</h1>
      <div className='grid grid-cols-3 gap-2 h-max'>
        {renderizarInicio()}
      </div>
    </div>  
  )
}

export default JugadoresPage