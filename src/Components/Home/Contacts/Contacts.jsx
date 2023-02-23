import React from 'react'

// react icons
import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Social = () => {

     const style = {
          color: "#a4adba"
     }

     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='contacts'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Let's connect</h1>
               <div className='flex justify-center items-center gap-x-3 pb-10'>
               <a href='https://www.facebook.com/the.noob.adib.550' target="_blank" rel="noreferrer">
                    <SiFacebook className='w-6 md:w-8 h-6 md:h-8 cursor-pointer hover:scale-125 duration-400 transition-all ease-linear' style={style} />
               </a>

               <a href='https://www.instagram.com/adib_the_noob/' target="_blank" rel="noreferrer">
                    <SiInstagram className='w-6 md:w-8 h-6 md:h-8 cursor-pointer  hover:scale-125 duration-600 transition-all ease-linear' style={style} />
               </a>

               <a href='https://www.linkedin.com/in/mohammed-adib-550' target="_blank" rel="noreferrer">
                    <SiLinkedin className='w-6 md:w-8 h-6 md:h-8 cursor-pointer hover:scale-125 duration-600 transition-all ease-linear' style={style} />
               </a>

               <a href='https://github.com/ADIB-the-NOOB' target="_blank" rel="noreferrer">
                    <SiGithub className='w-6 md:w-8 h-6 md:h-8 cursor-pointer  hover:scale-125 duration-600 transition-all ease-linear' style={style} />
               </a>

               <a href='mailto:mdadib550@gmail.com' target="_blank" rel="noreferrer">
                    <SiGmail className='w-6 md:w-8 h-6 md:h-8 cursor-pointer  hover:scale-125 duration-600 transition-all ease-linear' style={style} />
               </a>
               </div>

          </div>
     )
}

export default Social