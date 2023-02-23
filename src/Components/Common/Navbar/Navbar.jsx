import React from 'react'

import { useState } from "react";




const Navbar = () => {
     const [navbar, setNavbar] = useState(false);
  return (
     <nav className="w-full bg-nav backdrop-blur-lg font-black fixed top-0 z-20">
     <div className="justify-center items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
         <div>
             <div className="flex items-center justify-between py-3 md:py-5 md:block ">
                 {/* <a href='#'>
                     <h2 className="text-2xl lg:text-4xl font-bold font-amaranth text-lightBlue">Mohammed Adib</h2>
                     </a> */}
                 <div className="md:hidden">
                     <button
                         className="p-2 text-gray-700 rounded-md outline-none focus:border-lightYellow focus:border"
                         onClick={() => setNavbar(!navbar)}
                     >
                         {navbar ? (
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="w-6 h-6"
                                 viewBox="0 0 20 20"
                                 fill="#eeb90b"
                             >
                                 <path
                                     fillRule="evenodd"
                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                     clipRule="evenodd"
                                 />
                             </svg>
                         ) : (
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="w-6 h-6"
                                 fill="#eeb90b"
                                 viewBox="0 0 24 24"
                                 stroke="#eeb90b"
                                 strokeWidth={2}
                             >
                                 <path
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     d="M4 6h16M4 12h16M4 18h16"
                                 />
                             </svg>
                         )}
                     </button>
                 </div>
             </div>
         </div>
         <div>
             <div
                 className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                     navbar ? "block" : "hidden"
                 }`}
             >
                 <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#">Home</a>
                     </li>
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#about">About Me</a>
                     </li>
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#skills">Skills</a>
                     </li>
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#experience">Experience</a>
                     </li>
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#projects">Projects</a>
                     </li>
                     <li className="text-lightYellow hover:text-lightBlue ">
                         <a href="#contacts">Contact</a>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
 </nav>
  )
}

export default Navbar