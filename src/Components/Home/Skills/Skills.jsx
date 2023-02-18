import React from 'react'
import SkillBar from 'react-skillbars';

const Skills = () => {
     const skills = [
          { type: 'Python', level: 100 },
          { type: 'Django', level: 85 },
          { type: 'Linux', level: 75 },
          { type: 'AWS', level: 50 },
          { type: 'Docker', level: 25 },
          { type: 'Azure', level: 20 },
          { type: 'Posgresql', level: 10 }
     ];
     const colors = {
          bar: "#eeb90b",
          title: {
               text: "#fff",
               background: "#1f98df"
          }
     };
     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='skills'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-[#eeb90b] pb-16 md:pb-20 lg:pb-24`}>About Me</h1>
               <div className={`w-3/4 mx-auto`}>
                    <SkillBar skills={skills} colors={colors} />
               </div>
          </div>
     )
}

export default Skills