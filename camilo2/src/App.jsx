import { useState } from 'react'
import camiloImagen from './assets/camilo.gif'
import Logo from './assets/logo.png'
import './App.css'
import Form from "./componentes/botones.jsx"
import { Routes, Route } from 'react-router-dom';
import Login from "./componentes/login.jsx"
import Register from "./componentes/register.jsx";


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

        
    


    </>
  )
}

export default App
