import React from 'react'
import park1 from '../../images/parking-l&l.jpeg'
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
            <img src={park1}/>
            <div className="map">
              <iframe
                title="iframe"
                frameborder="0"
                scrolling="yes"
                marginheight="0"
                marginwidth="0"
                width="400"
                height="350"
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
                width="400"
                height="350"
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
                width="400"
                height="350"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.7743282569363!2d-111.89553448454542!3d40.54657467935033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528862b20e92a3%3A0xaee3ef834c4c5e4b!2sSCHEELS!5e0!3m2!1sen!2sus!4v1620795741096!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pickup
