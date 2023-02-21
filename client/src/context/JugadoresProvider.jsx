import { useContext, useState} from 'react';
import { getJugadores , borrarJugador, 
  crearJugador, getJugador, 
  actualizarJugador, 
  getResultados, crearResultado, 
  borrarResultado, getUsuarios, crearUsuario} from "../api/jugadores.api.js";
import { JugadorContext } from './JugadorContext.jsx';

export const useJugador = () =>{
  
  const context = useContext(JugadorContext)
  
  if (!context){
    throw new Error ('useJugador debe estar dentro de jugadorcontextprovider ')
  }
  return context;
}

export const JugadorContextProvider = ({children}) => {
  
  const [jugadores, setJugadores] = useState([])
  
  const [resultados, setResultados] = useState([])
  const [usuarios, setUsuarios] = useState([])

  async function obtenerJugadores (){
    const response = await getJugadores()
    setJugadores(response.data)
  }
    
  async function obtenerResultados (){
    const response = await getResultados()
    setResultados(response.data)
   } 
  
  const borrarJugadores = async(id) =>{
    try{
      const response = await borrarJugador(id)
      setJugadores(jugadores.filter(jugadores => jugadores.id !== id))//actualizar lista jugadores
      
    } catch(error){
      console.log(error)
    }
  }

  const crearJugadores = async (jugador) =>{
    try {
      const response = await crearJugador(jugador)  
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerJugador = async (id) =>{
    try{
      
      const response = await getJugador(id)
      
      return response.data
    }catch(error){
      console.log(error)
    }
  }

  const actualizaJugador = async(id, datos) =>{
    try {
      let num = new Number(id)
      
      await actualizarJugador(num, datos)
            
    } catch (error) {
      console.log(error)
    }
  }

  const crearResultados = async (resultado) =>{
    try {
      const response = await crearResultado(resultado)  
    } catch (error) {
      console.log(error)
    }
  }

  const borrarResultados = async(id) =>{
    try{
      await borrarResultado(id)       
    } catch(error){
      console.log(error)
    }
  }

  const crearUsuarios = async (usuario) =>{
    try {
      const response = await crearUsuario(usuario)  
    } catch (error) {
      console.log(error)
    }
  }

  async function obtenerUsuarios (){
    const response = await getUsuarios()
    setUsuarios(response.data)
  }

 return (
   <JugadorContext.Provider value={{jugadores,resultados,usuarios, 
   obtenerJugadores, 
   borrarJugadores, 
   crearJugadores, 
   obtenerJugador,
   actualizaJugador,
   obtenerResultados,
   crearResultados,
   borrarResultados,
   obtenerUsuarios,
   crearUsuarios}}>
     {children}  
   </JugadorContext.Provider>
  )
}