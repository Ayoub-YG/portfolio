import { useState } from 'react'
import Navbar from './component/Navbar'
import About from "./component/About"
import Skills from './component/Skills'
import Project from './component/Project'
import ContactUS from './component/ContactUS'
import FIN from './component/FIN'

function App() {
  

  return (
    <>
       <Navbar />
       <About />
       <Skills />
       <Project />
       <ContactUS />
       <FIN />
    </>
  )
}

export default App
