import React, { useState } from 'react'
import "./navbar.scss"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BsHeadphones} from 'react-icons/bs'
import {AiOutlineContacts} from "react-icons/ai"




const Navbar = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
   <nav id='navbar'>
      <a onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#"><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsHeadphones/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>

   </nav>
  )
}

export default Navbar