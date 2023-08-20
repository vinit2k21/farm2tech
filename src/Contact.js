import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h2 className='contact-info-h2'>Our Office Address</h2>
        <p className='contact-info-p'>Farm2Tech,Khed,Ratnagiri,415605</p>
        <h2 className='contact-info-h2'>General Enquiries</h2>
        <p className='contact-info-p'>farm2tech@git-india.edu.in</p>
        <h2 className='contact-info-h2'>Call Us</h2>
        <p className='contact-info-p'>+91-0000000000</p>
        <h2 className='contact-info-h2'>Our Timing</h2>
        <p className='contact-info-p'>Mon - Sun : 09:00 AM - 09:00 PM</p>
      </div>
      <div className='contact-form'>
        <form>
          <h1 className='contact-form-heading'>Contact Form</h1>
          <input className='contact-form-inputs' type="text" placeholder='Full Name' />
          <input className='contact-form-inputs' type="tel" placeholder='Mobile Number'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="10" />
          <input className='contact-form-inputs' type="email" placeholder='Email ID' />
          <textarea className='contact-form-inputs' type="text" rows="10" cols="50" placeholder='Message'></textarea>
          <button className='contact-form-submit-button' type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact