import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'
   data-aos="fade-down"
    >
<div className="Navbar-left">
<h4>Portfolio</h4>

</div>
<div className="Navbar-right">
   <a href='#home'> <h5>Home</h5></a>
   <a href='#experience'> <h5>Experience</h5></a>
   <a href='#skills'> <h5>Skills</h5></a>
   <a href='#project'> <h5>Projects</h5></a>
   <a href='#contact'> <h5>Contact</h5></a>
</div>
      
    </div>
  )
}

export default Navbar
