import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate()

  useEffect(() =>{
    console.log(sessionStorage.getItem('nombre'))
    if(sessionStorage.getItem('nombre')==null)
      navigate('/login')
  },[]) 

  return (
    <div className="grid items-center justify-center border-white rounded-3xl p-4 -z-10 ">
      <h1 className="grid text-5xl text-white font-bold items-center justify-center mb-10 -z-10">Inicio</h1>
        <img src='../src/imagenes/botijo.png'/>
          
        </div>
    )
}

export default Home