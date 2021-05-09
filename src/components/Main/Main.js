import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-scroll'
import mainImg from '../../images/cfp-cover-1.jpg'
import './Main.css'


const Main = () => {
  return (
    <div className="MainContainer">
      {/* <Navbar /> */}
      <div className="MainContent">
        <div className="MainItems">
          <img src={mainImg} className="MainImg" alt="main-img"/>
          <p className="MainP">Have a Taste of the Glory</p>
          <Link
            className='nav-link'
            to="display"
            smooth={true}
            duration={750}
            spy={true}
            exact="true"
            offset={-80}
            delay={100}
          ><button className="MainBtn">CHECK IT OUT</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Main
