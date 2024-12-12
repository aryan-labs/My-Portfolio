import React from 'react'
import "./Contact.css"
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className='container content' id='contact'
    >
    <h1>CONTACT ME</h1>
    <div className="contact-icon"
    >
      <a href='' className="items">
        <FaInstagram className='logo'/>
      </a>
      <a href='https://github.com/aryan-labs' className="items">
        <FiGithub className='logo'/>
      </a>
      <a href='' className="items">
        <FaLinkedinIn className='logo'/>
      </a>
      <a href='' className="items">
        <RiTwitterXFill className='logo'/>
      </a>
      <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRzKCPpqbNhDBRGWbsTCzgPChvMwPgvHJxKfTbXklXkhWwhsMFgVqGGmbfrthKnZvPQ' target='_blank' className="items">
<SiGmail className='logo'/>
      </a>
    </div>
    </div>
  )
}

export default Contact
