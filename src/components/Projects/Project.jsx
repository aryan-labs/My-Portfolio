import React from 'react'
import './Project.css'
import project from './projects.json'
import Tomato from './Tomato.png'

const Project = () => {
  return (
    <div className='container projects' id='project'>
        <h1>Projects</h1>
        <div className="row ">
            {project.map((data)=>{
                return(
                <>
                <div key={data.id}>
                    <div className="card text-light bg-dark"
                    data-aos="flip-right" data-aos-duration="1000">
               <img src={Tomato} alt=''/>
               <h4>{data.title}</h4>
               <p>{data.description}</p>
               <div className="button">
               <a href={data.demo}><button  className='btn1'>Demo</button></a>   
               <a href={data.source}><button className='btn2'>Code</button></a>  
               </div>      
               </div>

                </div>
                </>)
            })}
        </div>
      
    </div>
  )
}

export default Project
