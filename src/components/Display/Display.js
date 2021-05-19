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
        <div>
          <h1>PLEASE SUPPORT US...</h1>
          <p>By leaving a 
          <span><a
            href='https://www.google.com/search?q=cheefas+fried+pies&rlz=1C5CHFA_enUS935US935&sxsrf=ALeKk00ONaUv96Xk1Vy3R7mVYqT2JuAndQ%3A1621446445313&ei=LU-lYL6uEtaz0PEPlJW-iAo&oq=cheefas+fried+pies&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BwgjELADECdQkgZYgwhg-QpoAXAAeACAAXWIAasDkgEDMS4zmAEAoAEBqgEHZ3dzLXdpesgBAcABAQ&sclient=gws-wiz&ved=0ahUKEwj--JPbptbwAhXWGTQIHZSKD6EQ4dUDCA4&uact=5#lrd=0x874d9b1c951a9dc5:0xcb4c038fae67c29,3,,,'
            target='_blank'
            rel="noreferrer"
          >Google Review</a></span></p>
          <a
            href='https://www.google.com/search?q=cheefas+fried+pies&rlz=1C5CHFA_enUS935US935&sxsrf=ALeKk00ONaUv96Xk1Vy3R7mVYqT2JuAndQ%3A1621446445313&ei=LU-lYL6uEtaz0PEPlJW-iAo&oq=cheefas+fried+pies&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BwgjELADECdQkgZYgwhg-QpoAXAAeACAAXWIAasDkgEDMS4zmAEAoAEBqgEHZ3dzLXdpesgBAcABAQ&sclient=gws-wiz&ved=0ahUKEwj--JPbptbwAhXWGTQIHZSKD6EQ4dUDCA4&uact=5#lrd=0x874d9b1c951a9dc5:0xcb4c038fae67c29,3,,,'
            target='_blank'
            rel="noreferrer"
            className='google'
          ><FcGoogle/></a>
        </div>
      </div>
    </div>
  )
}

export default Display
