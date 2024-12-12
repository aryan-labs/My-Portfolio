import React from 'react'
import './Experience.css'
import experience from "./experience.json"
import logo from './logo.png'

const Experience = () => {
  return (
    <div className='container-ex' id='experience'>
      <h1>Experience</h1>
      {experience.map((data)=>{
        return(
        <>
        <div className="ex-items" key={data.id}
        data-aos="zoom-in" data-aos-duration="1000"
        >
            
          <div className="left">
          <img src={logo} alt=''/>
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <div className="dates">
            <h4>{data.startDate}</h4>
            <h4>{data.endDate}</h4>
            <h4>{data.location}</h4>
            </div>
            <h5>{data.experiences[0]}</h5>
            <h5>{data.experiences[1]}</h5>
          </div>
        </div>
        </>
      )})}
    </div>
  )
}

export default Experience
