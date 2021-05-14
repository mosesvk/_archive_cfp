import React from 'react'
import img1 from '../../images/CFP-counter.jpg'
import './Display.scss'

const Display = () => {
  return (
    <div className='display-container'>
      <div className='display-wrap-top'>
        <div className='display-text-div'>
          <h1>AT YOUR NEAREST L&L's</h1>
        </div>
        <div className='display-img-div'>
          <img src={img1}/>
        </div>
      </div>
      <div className='display-wrap-mid'>
        <h1>From Sweet to Salty</h1>
      </div>
    </div>
  )
}

export default Display
