import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Project = (props) => {
     const {name, description, role, link} = props.project;
     return (
          <>
               <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                    <div className={`flex flex-col justify-center items-start py-10`}>
                    <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b]`}>{name}</h1>
                    <h3>{role}</h3>
                    <p>{description}</p>
                    </div>
                    <a href={link} target='_blank'>
                         <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`} />
                    </a>
               </div>
          </>
     )
}

export default Project