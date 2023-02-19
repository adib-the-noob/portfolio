import React from 'react'

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Blogs = () => {
     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='projects'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-[#eeb90b] pb-16 md:pb-20 lg:pb-24`}>Projects</h1>
               <div className={`grid grid-cols-1 px-6 sm:px-8 md:px-10`}>
                    <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                    <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b] py-10`}>JB Mavericks</h1>
                    <a href='https://github.com/JB-Mavericks/jb-mavericks.github.io' target='_blank'>
                    <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`}/>
                    </a>
                    </div>
                    <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                    <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b] py-10`}>Shoppi Mart E Commerce</h1>
                    <a href='https://github.com/ADIB-the-NOOB/Shoppi-Mart-E-Commerce' target="_blank">
                    <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`}/>
                    </a>
                    </div>
                    <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                    <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b] py-10`}>Reddits Backend</h1>
                    <a href='https://github.com/ADIB-the-NOOB/Reddits-Backend' target='_blank'>
                    <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`}/>
                    </a>
                    </div>
               </div>
          </div>
     )
}

export default Blogs