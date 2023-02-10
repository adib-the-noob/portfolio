import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import About from './AboutMe/About'
import HeroSection from './HeroSection/HeroSection'

const Home = () => {
  return (
    <div className={`bg-[#1d1f1d]`}>
     <Navbar />
     <HeroSection />
     <About />
    </div>
  )
}

export default Home