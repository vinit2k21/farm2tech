import React from 'react'
import Feature from './components/Feature'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='section-home-data'>
          <h1 className='home-i'>Welcome to,</h1>
          <h1 className='home-h1'>Farm2Tech</h1>
          <p className='home-p'>
            Digitalization in Dairy for Farmer's
            Development  in Rural Areas.
          </p>
          <button className='home-btn'>Explore more</button>
        </div>
        <div className='section-home-image'>
          <img src='./images/home.png' alt='home-image' className='home-image' />
        </div>
      </div>

      <Feature />
    </>
  )
}

export default Home