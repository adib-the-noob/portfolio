import React from 'react'

// typewriter animation
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  
  return (
    <div className={`pt-16 px-10 pb-10 h-screen flex justify-center items-center`}>
      <div>
        <h1 className={`font-poppins font-semibold text-[#1f98df] text-2xl my-4`}>Assalamualaikum. I am</h1>
        <h1 className={`font-poppins font-extrabold text-[#1f98df] leading-snug text-4xl my-4`}>Mohammed <span className={`text-[#eeb90b]`}>Adib</span></h1>
        <h2 className={` font-poppins font-semibold leading-snug text-4xl my-4 text-[#eeb90b]`}>
          My motto is, 	<br />
        <Typewriter 
          options={{
            strings: ['Eat 🍞', 'Sleep 🛌', 'Code 💻', 'Repeat 🔁'],
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