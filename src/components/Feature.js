import React from 'react'

const Feature = () => {
     return (
          <div className='feature-container' id='feature'>
               <div className='feature-header'>
                    <h1 className='feature-h1'>Key Features</h1>
               </div>

               <div className='feature-display'>

                    <div className='feature-display-list'>
                         <img src='./images/shopping-cart.png' alt='feature-1' className='feature-image' />
                         <h1 className='feature-title'>Book Online</h1>
                         <p className='feature-description'>Book Online direct from our portal and have a seamless experience throughout the process of online purchasing of milk.</p>
                    </div>

                    <div className='feature-display-list'>
                         <img src='./images/secure-payment.png' alt='feature-2' className='feature-image' />
                         <h1 className='feature-title'>Secure Payment</h1>
                         <p className='feature-description'>Whatever your online mode of payment be, our trusted payment gateway partners keep your transaction details confidential.</p>
                    </div>

                    <div className='feature-display-list'>
                         <img src='./images/delivery-man.png' alt='feature-3' className='feature-image' />
                         <h1 className='feature-title'>On-Time Delivery</h1>
                         <p className='feature-description'>Simply order and get all your daily essentials delivered to your doorstep. Our team provides transportation to meet your needs.</p>
                    </div>
               </div>

               <div className='highlight-feature-display-list'>
                    <img src='./images/short-path.png' alt='feature-3' className='highlight-feature-image' />
                    <h1 className='highlight-feature-title'><strong> Optimised Path </strong> to provide fast delivery</h1>
                    <p className='highlight-feature-description'>Simply skip the route where delivery is not there and use optimised route for faster delivery.</p>
               </div>

          </div>

     )
}

export default Feature