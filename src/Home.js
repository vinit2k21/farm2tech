import React from 'react';
import Feature from './components/Feature';
import { Link } from 'react-scroll';
import Speciality from './components/Speciality';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='section-home-data'>
          <h2 className='home-h2'>Welcome to,</h2>
          <h1 className='home-h1'>Farm2Tech</h1>
          <p className='home-p'>
            Digitalization in Dairy for Farmer's
            Development  in Rural Areas.
          </p>
          <Link to='feature'> <button className='home-btn'>Explore more</button></Link>
        </div>
        <div className='section-home-image'>
          <img src='./images/home.png' alt='home-image' className='home-image' />
        </div>
      </div>
      <Speciality/>
      <Feature />
    </>
  )
}

export default Home