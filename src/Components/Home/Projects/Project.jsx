import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Project = (props) => {
     const {name, description, role, link} = props.project;
     return (
          <>
               <div className={`bg-slate-600 rounded-xl grid grid-cols-1 place-items-start my-5 px-8 sm:px-12 md:px-16 lg:px-20 py-10 md:py-14 lg:py-16 gap-y-5`}>
                    <div className={`flex flex-col justify-center items-start gap-y-6`}>
                    <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b]`}>{name}</h1>
                    <h3 className={`text-center text-md md:text-lg lg:text-xl text-[#eeb90b]`}>{role}</h3>
                    <p className={`text-[#e8ebe2]`}>{description}</p>
                    </div>
                    <a href={link} target='_blank'>
                         <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`} />
                    </a>
               </div>
          </>
     )
}

export default Project