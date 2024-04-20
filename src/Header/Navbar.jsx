import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <header className=''>
    <nav className='flex justify-around self-center nav'>
      <div className=' m-4 self-center'>
      <Link to="/" className="">
                       <img src="./Images/RAUTECHA_SWARAJY_LOGO-removebg.png" alt=""  className='size-24' />
         </Link>
 

      </div>
      <div className=' my-11 self-center'>
      <NavLink to="/" className="m-5">
                       Home
         </NavLink>
      <NavLink to="/" className="m-5">
                       About
         </NavLink>
      <NavLink to="/" className="m-5">
                       Contact Us
         </NavLink>
 

      </div>

      <div className='m-4 self-center'>
      <NavLink to="/" className="m-5 mbutton-1 ">
                       Log In
         </NavLink>
 
         <NavLink to="/" className="m-5 mbutton-1 ">
                       Sign Up
         </NavLink>

      </div>
    </nav>
   </header>
    </>
  )
}

export default Navbar
