import React from 'react'
import './Display.scss'

const Display = () => {
  return (
    <div className='display-container' id='display'>
      <div className='display-wrap-top'>
        <div className='top-wrapper'>
          <div className='display-text-div'>
            <h1>Checkout Our Different Flavors</h1>
            <a
              href='https://formfaca.de/sm/WPdC5Gw9f'
              target='_blank'
              rel='noreferrer'
            >
              <button>ORDER HERE</button>
            </a>
            {/* <img src={img1}/> */}
          </div>
        </div>
      </div>
      <div className='display-wrap-mid'>
        <div className='mid-wrapper'>
          <div id="google-review">
            <div id="google-review-wrapper">
              <div class="google-review-wrapper-with-border">
                <div className="google-review-logo">
                  <a target="_blank" href="https://www.google.com/search?q=cheefas+fried+pies&rlz=1C5CHFA_enUS935US935&oq=cheefas+&aqs=chrome.0.69i59l2j69i57j69i59j69i60l3.1425j0j4&{google:bookmarkBarPinned}sourceid=chrome&{google:instantExtendedEnabledParameter}{google:omniboxStartMarginParameter}ie=UTF-8#lrd=0x874d9b1c951a9dc5:0xcb4c038fae67c29,3,,," rel="noreferrer">
                    <img 
                      src="http://horizonapartmentsnarooma.com.au/wp-content/uploads/2018/03/google-review-logo_color_272x92dp-blue.png" 
                      alt="Google My Business review"
                      />
                  </a>
                </div>
                <div className="google-review-text"> Review us on Google </div>
                <div className="google-review-btn"> 
                  <a 
                    href='https://www.google.com/search?q=cheefas+fried+pies&rlz=1C5CHFA_enUS935US935&oq=cheefas+&aqs=chrome.0.69i59l2j69i57j69i59j69i60l3.1425j0j4&{google:bookmarkBarPinned}sourceid=chrome&{google:instantExtendedEnabledParameter}{google:omniboxStartMarginParameter}ie=UTF-8#lrd=0x874d9b1c951a9dc5:0xcb4c038fae67c29,3,,,'
                    className="review-button"
                    target='_blank'
                    rel="noreferrer"
                  >Write a Review</a>
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
