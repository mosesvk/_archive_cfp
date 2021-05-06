import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkS } from 'react-scroll'
import './Navbar.scss'

const Navbar = (props) => {
  const { toggle } = props;

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div scrollNav={scrollNav} className='nav'>
        <div className='nav-wrap'>
          {/* <NavLogo to="home" onClick={toggleHome} scrollNav={scrollNav}>
            CHEEFAS FRIED PIES
          </NavLogo> */}
          <div onClick={toggle} className='nav-mobile'>
            <FaBars />
          </div>
          <div className='nav-menu'>
            <div className='nav-item'>
              <LinkS
                className='nav-link'
                to="display"
                smooth={true}
                duration={750}
                spy={true}
                exact="true"
                offset={-80}
                delay={100}
              >
                FLAVORS
              </LinkS>
            </div>
            <div className='nav-item'>
              <LinkS
                className='nav-link'
                to="experience"
                smooth={true}
                duration={750}
                spy={true}
                exact="true"
                offset={-80}
                delay={100}
              >
                PICKUP
              </LinkS>
            </div>
            <div className='nav-item'>
              <LinkS
                className='nav-link'
                to="about"
                smooth={true}
                duration={750}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </LinkS>
            </div>
            <div className='nav-item'>
              <LinkS
                className='nav-link'
                to="contact"
                smooth={true}
                duration={750}
                spy={true}
                exact="true"
                offset={-80}
              >
                CONTACT
              </LinkS>
            </div>
          </div>
          <div className='nav-order'>
            <a href='https://formfaca.de/sm/WPdC5Gw9f' target='_blank' rel="noreferrer" >
              <button>ORDER NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
