import React from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-left">
            <img src={logo} alt="" />
        </div>
        <div className="nav-right">
            <button className='auth '>Login</button>
            <button className='auth signup'>SignUp</button>
        </div>
    </div>
  )
}

export default Navbar