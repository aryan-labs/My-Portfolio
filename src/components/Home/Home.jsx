import React, { useEffect, useRef } from 'react'
import './Home.css'
import hero from './hero.json' 
import Typed from "typed.js";



const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome To My Portfolio","I'm Aryan Shrivastava","I'm full Stack Devloper"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed=new Typed(typedRef.current,options)
    return()=>{
      typed.destroy()
    }
  } ,[])

  return (
    <div className='Home' id='home'>
        <div className="Home-left" data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}></h1>
            <a href='' className='btn btn-outline-warning'>Download Resume</a>
      
        </div>
        <div className="right" data-aos="fade-up-right" data-aos-duration="1000">
          
                <img src={`/assets/${hero.imgSrc}`} alt=''/>
            </div>
        
        
      
    </div>
  )
}

export default Home
