import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import StartProject from './Components/StartProject'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen text-black'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <StartProject />
      <Footer />
    </div>
  )
}

export default App
