import React from 'react'

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import projectLists from './../../Data'
import Project from './Project';

const Blogs = () => {

     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='projects'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Projects</h1>
               <div className={`grid grid-cols-1 px-6 sm:px-8 md:px-10`}>
                    {
                         projectLists.map((project, id) => (
                              <Project project={project} key={id}/>
                         ))
                    }
               </div>
          </div>
     )
}

export default Blogs