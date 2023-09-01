import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
     return (
          <div className='error-container'>
               <div className='section-error-image'>
                    <img className='error-image' src='./images/error-image.png' alt='error-image' />
               </div>
               <h1 className='error-h1'>Error 404 - Page Not Found</h1>
               <p className='error-p'>The page you are looking for does not exist.</p>
               <NavLink to="/"><button className='go-back-btn'>Go Back</button></NavLink>
          </div>
     )
}

export default Error