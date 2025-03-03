import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar  from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import MissionVision from './Components/MissionVision/MissionVision'
import AviationForm from './Components/AviationForm/AviationForm'
import FloatingButtons from './Components/FloatingButtons/FloatingButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>     
      <MissionVision/> 
      <Services/>
      <AviationForm/>
      <FloatingButtons/>


    </div>

    </>
  )
}

export default App
