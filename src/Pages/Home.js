import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/Main'
import Portfolio from '../components/Display/Display'
import Pickup from '../components/Pickup/Pickup'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

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
      <Portfolio modalOpen={modalOpen} toggleModal={toggleModal}/>
      <Pickup/>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
