import React from "react";
import {SidebarContainer} from "./SidebarContainer";
import {
  FaTimes,
  FaTwitter,
  FaInstagram, 
  FaFacebookSquare
} from "react-icons/fa";
import {Link} from 'react-scroll'
import imgLogo from '../../images/cfp-cover-1.jpg'
import './Sidebar.scss'

const Sidebar = (props) => {
  // console.log(cart)
  
  const {cart, isOpen, toggle, editItem, total, removeItem, clearCart} = props;

    return (
      <SidebarContainer isOpen={isOpen}>
        <div className='sidebar-top-div' onClick={toggle}>
          <Link
            to='main'
            onClick={toggle}
          ><img src={imgLogo} alt='cfpLogo'/></Link>
          <FaTimes className='close-icon'/>
        </div>
        <div className='sidebar-wrap'>
          <div className='sidebar-logo'>
          </div>
          <div className='sidebar-links'>
            <div>
              <a
              className='order-a'
              href='https://formfaca.de/sm/WPdC5Gw9f'
              target='_blank'
              rel='noreferrer'
              >
              ORDER HERE
              </a>
            </div>
            <Link
              className='nav-link'
              to="display"
              // smooth={true}
              duration={750}
              spy={true}
              exact="true"
              offset={-80}
              // delay={30}
              onClick={toggle}
            >
            DISPLAY
            </Link>
            <Link
              className='nav-link'
              to="pickup"
              // smooth={true}
              duration={750}
              spy={true}
              exact="true"
              offset={-80}
              // delay={30}
              onClick={toggle}
            >
            PICKUP
            </Link>
            <Link
              className='nav-link'
              to="about"
              // smooth={true}
              duration={750}
              spy={true}
              exact="true"
              offset={-80}
              // delay={30}
              onClick={toggle}
            >
            ABOUT
            </Link>
            <Link
              className='nav-link'
              to="contact"
              // smooth={true}
              duration={750}
              spy={true}
              exact="true"
              offset={-80}
              // delay={30}
              onClick={toggle}
            >
            CONTACT
            </Link>
          </div>
          <div className='sidebar-social'>
            <a href='http://facebook.com/cheefasfriedpies' target='_blank' rel="noreferrer"><FaFacebookSquare/></a>
            <a href='http://facebook.com/cheefasfriedpies' target='_blank' rel="noreferrer"><FaTwitter/></a>
            <a href='http://facebook.com/cheefasfriedpies' target='_blank' rel="noreferrer"><FaInstagram/></a>
          </div>
        </div>
      </SidebarContainer>
    );
};

export default Sidebar;
