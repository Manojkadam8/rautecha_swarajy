import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  
const [openclass,setOpenclass]=useState("");

 const OpenMenu=()=>{
   setOpenclass("right0");
 }

 const CloseMenu=()=>{
 
setOpenclass("right-100")
}
  return (
    <>
 <header className='header'>
        <nav className='nav'>
            
            <div className='logo '>
      <Link to="/" className="">
                       <img src="./Images/RAUTECHA_SWARAJY_LOGO-removebg.png" alt=""  className=' imglogo' />
         </Link>
 

      </div>
      <div className={`containe ${openclass}`} >
      <div className="nav__close" id="nav-close" onClick={CloseMenu}>
           <IoClose />
         </div>
         <hr />
      <div className='header-menu '>
      <NavLink to="/" className="">
                       Home
         </NavLink>
      <NavLink to="/" className="">
                       About
         </NavLink>
      <NavLink to="/" className="">
                       Contact Us
         </NavLink>
 

      </div>
      <div className='header-buttons'>
      <NavLink to="/" className=" mbutton-1 ">
                       Log In
         </NavLink>
 
         <NavLink to="/" className=" mbutton-1 ">
                       Sign Up
         </NavLink>

      </div>
     
      </div>
      <div className="nav__toggle" id="nav-toggle" onClick={OpenMenu} >
         <IoMenu />
       </div>
        </nav>
      </header>

</>

  )
}

export default Navbar
