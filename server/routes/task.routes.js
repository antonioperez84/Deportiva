import {Router} from 'express'
import {
  getJugadores,
  getJugador,
  actualizarJugador,
  borrarJugador,
  crearJugador,
  getResultados,
  crearResultado,
  borrarResultado,
  getUsuarios,
  crearUsuario
} from '../controllers/task.controller.js'

const router = Router()

router.post('/jugadores', getJugadores)
router.get('/jugador/:id', getJugador)
router.post('/crearJugador', crearJugador)
router.put('/actualizarJugador/:id', actualizarJugador)
router.delete('/borrarJugador/:id', borrarJugador)
router.post('/resultados', getResultados)
router.post('/crearResultado', crearResultado)
router.delete('/borrarResultado/:id', borrarResultado)
router.post('/login', getUsuarios)
router.post('/crearUsuario', crearUsuario)

export default router