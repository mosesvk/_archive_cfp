import React from 'react'
import {
  FaFacebookSquare,
  FaYoutube
} from 'react-icons/fa';
import {
  SocialWrap,
  SocialLink
} from '../Display/displayElements'
import Divider from '@material-ui/core/Divider';
import imgFam from '../../images/family-1.JPG'
import './About.scss'

const About = () => {


  return (
    <>
      <div className='about-container' id="about">
        <div className='about-header'>
          <h1>ABOUT US</h1>
          <p>Feel free to check out our social media platforms</p>
          <Divider variant="middle"/>
          <SocialWrap>
            <SocialLink
              href="https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube style={{fontSize:"3rem"}}/>
            </SocialLink>
            <SocialLink 
              href="https://www.facebook.com/profile.php?id=100004199235959"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookSquare />
            </SocialLink>
          </SocialWrap>
        </div>
        <div className='about-wrap'>
          <div className='about-text'>
            <p>Born in California, Raised in Utah.
            I love being with my family.
            I enjoy playing piano and watching Marvel movies. </p>
            <br/>
            <p>I enjoy learning new ways to build meaningful projects that uplift and improve the lives of people and businesses. </p>
            <br/>
            <p>I would love to get to know more about you as well. Feel free to reach out to me below.</p>
          </div>
          <div className='img-wrap'>
            <img src={imgFam} alt='img-about'/>
            {/* <Img /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default About;