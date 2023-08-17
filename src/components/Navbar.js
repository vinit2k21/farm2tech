import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact Us</NavLink>
          </li>
        <button className='navbar-btn'>Farmer Login</button>
        <button className='navbar-btn'>Customer Login</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;