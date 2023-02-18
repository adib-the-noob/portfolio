import React from 'react'

// typewriter animation
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  
  return (
    <div className={`pt-16 px-10 pb-10 font-poppins font-semibold text-[#1f98df] leading-snug text-4xl sm:text-5xl lg:text-7xl h-screen flex justify-center sm:justify-start items-center `}>
      <div className={`sm:ml-10 md:ml-14 lg:ml-20`}>
        <h1 className={`text-2xl sm:text-3xl my-4`}>Assalamualaikum. I am</h1>
        
        <h1 className={`font-extrabold my-4`}>Mohammed <span className={`text-[#eeb90b]`}>Adib</span></h1>
        <h2 className={`my-4 text-[#eeb90b] text-2xl sm:text-3xl md:text-4xl`}>
          My motto is, 	<br />
        <Typewriter 
          options={{
            strings: ['01000101 01100001 01110100', '01010011 01101100 01100101 01100101 01110000', '01000011 01101111 01100100 01100101', '01010010 01100101 01110000 01100101 01100001 01110100'],
            autoStart: true,
            loop: true,
          }}
        />
        </h2>
      </div>

    </div>
  )
}

export default HeroSection