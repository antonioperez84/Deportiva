import {pool} from '../db.js'

export const getJugadores = async (req, res) => {
  try{
    const [result] = await pool.query('select * from jugadores')
    res.json(result)
  }catch(error){
    return res.status(500).json({message:error.message});
  }
}

export const getJugador = async (req, res) => {
  try {
 
    const [result] = await pool.query('select * from jugadores where id = ?',[req.params.id])

    if(result.length === 0){
      return res.status(404).json({message: 'task not found'})    
    }

    res.json(result[0])  
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const crearJugador =  async (req, res) => {
  try {
    const {nombre, edad, posicion} = req.body;
    const [result] = await pool.query('INSERT INTO jugadores (nombre, edad, posicion) values (?,?,?)',
    [nombre,edad, posicion]); 
    
    res.send(`Creando jugador ${nombre}`)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const actualizarJugador = async (req, res) => {
  try {
    
    let num = req.params.id
    
    const result = await pool.query('update jugadores set ? where id = ?', [req.body, num])
    console.log(result)
    
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const borrarJugador = async (req, res) => {
  try {
    const [result] = await pool.query('delete from jugadores where id = ?', 
    [req.params.id])
  
    if (result.affectedRows === 0)
      return res.status('404').json({message: 'task not found'})

    res.send(`jugador ${req.params.id} eliminado`)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const getResultados = async (req, res) => {
  try{
    const [result] = await pool.query('select id, resultado_azul, resultado_blanco, DATE_FORMAT(fecha, "%d-%m-%Y") as fecha from resultados')
    res.json(result)
  }catch(error){
    return res.status(500).json({message:error.message});
  }
}

export const crearResultado =  async (req, res) => {
  try {
    
    const {resultado_azul, resultado_blanco, fecha} = req.body;
    
    await pool.query('INSERT INTO resultados (resultado_azul, resultado_blanco, fecha) values (?,?,?)',
    [resultado_azul,resultado_blanco,fecha]); 
    
    res.send(`Creando resultado ${fecha}`)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const borrarResultado = async (req, res) => {
  try {
    const [result] = await pool.query('delete from resultados where id = ?', 
    [req.params.id])
  
    if (result.affectedRows === 0)
      return res.status(404).json({message: 'task not found'})

    res.send(`resultado ${req.params.id} eliminado`)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}

export const getUsuarios = async (req, res) => {
  try{
    const [result] = await pool.query('select * from usuarios')
    res.json(result)
  }catch(error){
    return res.status(500).json({message:error.message});
  }
}

export const crearUsuario =  async (req, res) => {
  try {
    
    const {nombre, apellidos, correo, usuario, password} = req.body;
    
    await pool.query('INSERT INTO usuarios (nombre, apellidos, correo, usuario, password) values (?,?,?,?,?)',
    [nombre, apellidos, correo, usuario, password]); 
    
    res.send(`Creando usuario ${nombre}`)
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
}