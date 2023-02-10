import React from 'react'

//images
import adib from './../../../assets/adib.png'

const About = () => {
  return (
    <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold`}>
     <h1 className={`text-center text-4xl text-[#eeb90b] pb-16`}>About Me</h1>
     <div className={`grid grid-cols-1 justify-items-center content-center px-10 gap-y-10`}>
          <img src={adib} alt='Mohammed Adib' className={`w-32 h-32 rounded-full ring-[5px] ring-[#1f98df]`}/>
          <p className={`font-light text-[#c5c4c1c7] text-justify`}>I am ADIB-the-NOOB, a tech enthusiast with a passion for coding. My GitHub showcases diverse projects in web development and data analysis. I am dedicated to continuously improving and expanding my skillset through learning new programming languages. My passion for technology drives me to produce high-quality projects.</p>
     </div>
    </div>
  )
}

export default About