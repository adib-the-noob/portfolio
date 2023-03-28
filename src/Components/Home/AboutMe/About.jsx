import React from 'react'

//images
import adib from './../../../assets/adib.png'
import { aboutMe } from '../../Data'
const About = () => {
  
  return (
    <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='about'>
     <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>{aboutMe.title}</h1>
     <div className={`flex flex-col md:flex-row items-center justify-center px-10 md:px-16 lg:px-20 gap-10`}>
          <img src={adib} alt='Mohammed Adib' className={`w-32 md:w-40 lg:w-56 h-32 md:h-40 lg:h-56 rounded-full ring-[5px] ring-lightBlue block my-auto hover:shadow-2xl  hover:shadow-lightBlue transition-all duration-700`}/>
          <p className={`font-light text-justify lg:text-xl my-auto text-[#c5c4c1c7]`}>{aboutMe.description}</p>
     </div>
    </div>
  )
}

export default About