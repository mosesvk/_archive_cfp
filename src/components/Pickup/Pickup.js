import React from 'react'
// import park1 from '../../images/cfp-street.jpg'
import imgLL from '../../images/L&L-logo.png'
import './Pickup.scss'

const Pickup = () => {
  return (
    <div id='pickup' className='pickup-container'>
      <div className='pickup-wrap'>
        <div className='pickup-header'>
          <h1>PICKUP & DELIVERY</h1>
          <p>Checkout the different delivery spots</p>
        </div>
          <div className='pickup-div'>
            <div className="map">
              <a
                href='https://www.google.com/maps/uv?pb=!1s0x874d90a145dbcee5%3A0xd5559b46261dd429!3m1!7e115!4s%2Fmaps%2Fplace%2Fl%2526l%2Bmap%2Bprovo%2F%4040.2508331%2C-111.6612876%2C3a%2C75y%2C2.76h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sDpFMMjI07UMq9fhJBPOyog*212e0*214m2*213m1*211s0x874d90a145dbcee5%3A0xd5559b46261dd429%3Fsa%3DX!5sl%26l%20map%20provo%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2sDpFMMjI07UMq9fhJBPOyog&hl=en&sa=X&ved=2ahUKEwiRutPOm9fwAhXYGTQIHZ4aDVkQpx8wE3oECFcQCA'
                target='_blank'
                rel='noreferrer'
              >
                <img src={imgLL}/>
              </a>
              <iframe
                title="iframe"
                frameborder="0"
                scrolling="yes"
                marginheight="0"
                marginwidth="0"
                // width="400"
                // height="350"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.1131870318122!2d-111.66346468455427!3d40.25101577938478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d90a145dbcee5%3A0xd5559b46261dd429!2sL%26L%20Hawaiian%20Barbecue%20-%20Provo!5e0!3m2!1sen!2sus!4v1620793454679!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
          <div className='pickup-div'>
            <div className="map">
              <iframe
                title="iframe"
                frameborder="0"
                scrolling="yes"
                marginheight="0"
                marginwidth="0"
                // width="400"
                // height="350"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.949249778123!2d-111.83961129363738!3d40.38672901188021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d81c91fca62d1%3A0x168165e337a6dff4!2sMacey&#39;s!5e0!3m2!1sen!2sus!4v1620795427109!5m2!1sen!2sus" 
              ></iframe>
            </div>
          </div>
          <div className='pickup-div'>
            <div className="map">
              <iframe
                title="iframe"
                frameborder="0"
                scrolling="yes"
                marginheight="0"
                marginwidth="0"
                // width="400"
                // height="350"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7743282569363!2d-111.89553448454542!3d40.54657467935033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528862b20e92a3%3A0xaee3ef834c4c5e4b!2sSCHEELS!5e0!3m2!1sen!2sus!4v1620795741096!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pickup
