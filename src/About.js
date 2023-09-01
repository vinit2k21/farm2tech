import React from 'react';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='section-about-data'>
          <h2 className='about-h2'><strong>About,</strong></h2>
          <h1 className='about-h1'>Farm2Tech</h1>
          <p className='about-p'><i>
            Farm2Tech</i> aims to harness digitalization and technological advancements in agriculture to foster rural development. The review aims to understand the significance of digital technologies in management of agricultural products towards end user, identify the challenges and opportunities associated with implementing such projects, and examine existing studies on the impacts of digitalization in rural communities.
            By implementing these digitalisation solutions, Farm2Tech aims to bridge the technological gap for rural farmers, improving their access to information, markets, and modern agricultural practices. Through this integrated approach, Farm2Tech will support rural development in various sector, empowering farmers and fostering sustainable growth in rural communities. Additionally, the project will work to provide training and support to help farmers and consumers adopt and adapt to digital technologies effectively.
          </p>
        </div>
        <div className='section-about-image'>
          <img src='./images/about.png' alt='home-image' className='about-image' />
        </div>
      </div>
      
    </>
  )
}

export default About