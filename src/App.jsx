import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Technologies from './Components/Technologies'
import Contact from './Components/Contact'
import Certification from './Components/Certification'

function App() {

  return (
    <>
      <Navbar/>
      <hr/>
      <Header/>
      <Technologies/>
      <Certification/>
      <hr/>
      <Contact/>
    </>
  )

  
}

export default App
