import React from "react";
import Navbar from '../Common/Navbar/Navbar'
import About from './AboutMe/About'
import Experience from './Experience/Experience'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'

const Home = () => {

  return (
    <div className={`bg-[#0b1328] overflow-y-hidden`}>
     <Navbar />
     <HeroSection />
     <About />
     <Skills />
     <Experience />
     <Projects />
     <Contacts />
    </div>
  )
}

export default Home