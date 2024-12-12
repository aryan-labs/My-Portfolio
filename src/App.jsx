import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Experience from './components/Experience/Experience'
import Skills from './components/skills/skills'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Aos from "aos"
import "aos/dist/aos.css"
const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Home></Home>
      <div className="gap">
      <Experience></Experience>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      </div>
    </div>
  )
}

export default App
