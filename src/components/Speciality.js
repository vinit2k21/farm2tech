import React from 'react'

const Speciality = () => {
     return (
          <div className='speciality-container'>
               <h1 className='speciality-h1'>Our Speciality</h1>
               <h2 className='speciality-h2'>Ghee and Milk</h2>
               <p className='speciality-p'>We provide wide range of ghee & milk that cater to consumers who put a premium on taste, nutrition, health, craftsmanship and sheer indulgence.</p>

               <div className='speciality-section'>
                    <div className='speciality-section-block'>
                         <img src='./images/ghee.png' alt='speciality-image' className='speciality-section-image' />
                         <h2 className='speciality-section-h2'>Ghee</h2>
                    </div>
                    <div className='speciality-section-block'>
                         <img src='./images/milk.png' alt='speciality-image' className='speciality-section-image' />
                         <h2 className='speciality-section-h2'>Milk</h2>
                    </div>
               </div>
          </div>
     )
}

export default Speciality