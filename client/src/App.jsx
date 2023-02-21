import { Route, Routes } from 'react-router-dom'
import JugadoresPage from "./components/JugadoresPage.jsx";
import JugadorForm from "./components/JugadorForm.jsx";
import NavBar from './components/NavBar.jsx';
import NotFound from './components/NotFound.jsx';
import Resultados from './components/Resultados.jsx';
import {JugadorContextProvider} from './context/JugadoresProvider.jsx'
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Registro from './components/Registro.jsx';
import { useState } from 'react';
import Submenu from './components/Submenu.jsx';

function App() {
  
  const [open, setOpen] = useState();

  const toggleOpen = () =>{
    setOpen(!open)
  }

  return (
    <JugadorContextProvider>
    <div className='items-center justify-center -z-10'>
      <NavBar abrirCerrar={toggleOpen}/>
      {open && <Submenu/>}
      <div className='flex mx-auto py-2 px-4 justify-center items-center relative align-middle'>
        
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/jugadores' element={<JugadoresPage/>}/>
            <Route path='/crearJugador' element={<JugadorForm/>}/>
            <Route path='/editarJugador/:id' element={<JugadorForm/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/resultados' element={<Resultados/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/registro' element={<Registro/>}/>
          </Routes>
        
      </div>
    </div>
    </JugadorContextProvider>
  )
}

export default App
