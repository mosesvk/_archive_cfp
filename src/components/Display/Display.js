import React from 'react'
import img1 from '../../images/CFP-counter.jpg'
import imgLL from '../../images/L&L-logo.png'
import {FcGoogle} from 'react-icons/fc'
import './Display.scss'

const Display = () => {
  return (
    <div className='display-container' id='display'>
      <div className='display-wrap-top'>
        <div className='display-text-div'>
          <h1>AT YOUR NEAREST L&L's</h1>
          <img src={imgLL}/>
          <img src={img1}/>
        </div>
        <div className='display-img-div'>
        </div>
      </div>
      <div className='display-wrap-mid'>
        <div className='mid-wrapper'>
          <h1>PLEASE SHOW YOUR SUPPORT</h1>
          <div id="google-review" className="TA_cdswritereviewnew">
            <div id="google-review-wrapper" className="widWRMWrapper">
              <div class="google-review-wrapper-with-border">
                <div className="google-review-logo">
                  <a target="_blank" href="https://www.google.com.ph/search?q=horizon+apartments+narooma&rlz=1C1NOOH_enPH790PH790&oq=ho&aqs=chrome.0.69i59j69i60l3j69i57j69i59.1175j0j1&sourceid=chrome&ie=UTF-8#lrd=0x6b3e1727811e5c0d:0x57b6d8f88275d6ad,3,,," rel="noreferrer">
                    <img src="http://horizonapartmentsnarooma.com.au/wp-content/uploads/2018/03/google-review-logo_color_272x92dp-blue.png" alt="Google My Business review"/>
                  </a>
                </div>
                <div className="google-review-text"> Review us on Google </div>
                <div className="google-review-btn"> <input type="button" onclick="window.open('https://www.google.com.ph/search?q=horizon+apartments+narooma&rlz=1C1NOOH_enPH790PH790&oq=ho&aqs=chrome.0.69i59j69i60l3j69i57j69i59.1175j0j1&sourceid=chrome&ie=UTF-8#lrd=0x6b3e1727811e5c0d:0x57b6d8f88275d6ad,3,,,')" className="widWRMReview" value="Write Review"/>
                  
                </div>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
