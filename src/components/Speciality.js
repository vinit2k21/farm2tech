import React from 'react'

const Speciality = () => {
     return (
          <div className='speciality-container'>
               <h1 className='speciality-h1'>Our Speciality</h1>
               <h2 className='speciality-h2'>Cow and Buffalo Milk</h2>
               <p className='speciality-p'>We provide cow milk and buffalo milk that cater to consumers who put a premium on taste, nutrition, health, craftsmanship and sheer indulgence.</p>

               <div className='speciality-section'>
                    <div className='speciality-section-block'>
                         <img src='./images/cow-milk.png' alt='speciality-image' className='speciality-section-image' />
                         <h2 className='speciality-section-h2'>Cow Milk</h2>
                    </div>
                    <div className='speciality-section-block'>
                         <img src='./images/buffalo-milk.png' alt='speciality-image' className='speciality-section-image' />
                         <h2 className='speciality-section-h2'>Buffalo Milk</h2>
                    </div>
               </div>
          </div>
     )
}

export default Speciality