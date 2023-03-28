import React from 'react'

// typewriter animation
import Typewriter from 'typewriter-effect';
import hero from '../../Data'
const HeroSection = () => {
  
  return (
    <div className={`pt-16 px-10 pb-10 font-poppins font-semibold text-lightBlue leading-snug text-4xl sm:text-5xl lg:text-7xl h-screen flex justify-center sm:justify-start items-center `}>
      <div className={`sm:ml-10 md:ml-14 lg:ml-20`}>
        <h1 className={`text-2xl sm:text-3xl my-4`}>{hero.welcome}</h1>
        
        <h1 className={`font-extrabold my-4`}>{hero.name} <span className={`text-lightYellow`}>{hero.nickname}</span></h1>
        <h2 className={`my-4 text-[#5e5a5a] text-lg sm:text-xl md:text-2xl`}>{hero.profession}</h2>
        <h2 className={`my-4 text-lightYellow text-2xl sm:text-3xl md:text-4xl`}>
          {hero.motto} 	<br />
        <Typewriter 
          options={{
            strings: ['Eat', 'Sleep', 'Code', 'Repeat'],
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