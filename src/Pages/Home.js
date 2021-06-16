import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/Main'
import Display from '../components/Display/Display'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import HomeScreen from '../screens/HomeScreen'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = () => {
    // console.log('hit')
    setIsOpen(!isOpen);
    console.log('hit')
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainSection />
      <HomeScreen/>
      <Display modalOpen={modalOpen} toggleModal={toggleModal}/>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
