import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainSection from '../components/Main/Main'
import Portfolio from '../components/Display/Display'
import Pickup from '../components/Pickup/Pickup'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
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
