import axios from 'axios';

export const crearJugador = async (crearJugador) => 
  await axios.post('http://localhost:4000/crearJugador', crearJugador)

export const getJugadores = async (getJugadores) => 
  await axios.post('http://localhost:4000/jugadores', getJugadores)

export const borrarJugador = async (id) => 
  await axios.delete(`http://localhost:4000/borrarJugador/${id}`)

export const getJugador = async (id) => 
  await axios.get(`http://localhost:4000/jugador/${id}`)

export const actualizarJugador = async (id, datos) => 
  await axios.put(`http://localhost:4000/actualizarJugador/${id}`, datos)

export const getResultados = async (getResultados) => 
  await axios.post('http://localhost:4000/resultados', getResultados)

export const crearResultado = async (crearResultado) => 
  await axios.post('http://localhost:4000/crearResultado', crearResultado)

export const borrarResultado = async (id) => 
  await axios.delete(`http://localhost:4000/borrarResultado/${id}`)

export const getUsuarios = async (getUsuarios) => 
  await axios.post('http://localhost:4000/login', getUsuarios)

export const crearUsuario = async (crearUsuario) => 
  await axios.post('http://localhost:4000/crearUsuario', crearUsuario)