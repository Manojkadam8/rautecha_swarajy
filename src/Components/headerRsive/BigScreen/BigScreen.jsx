import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from "react-icons/io5";
import './BigScreen.css'
const BigScreen = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
            
            <div className='logo '>
      <Link to="/" className="">
                       <img src="./Images/RAUTECHA_SWARAJY_LOGO-removebg.png" alt=""  className=' imglogo' />
         </Link>
 

      </div>
      <div className='containe'>
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
        </nav>
      </header>
    </>
  )
}

export default BigScreen
