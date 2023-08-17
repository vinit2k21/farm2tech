import React from 'react';
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

const Header = () => {
  return (
   <header>


    <NavLink to="/" className="logo-link">
      <img src="./images/logo.png" alt="logo" className='logo'/>
    </NavLink>
  
    <Navbar />
   </header>
  );
};


export default Header;