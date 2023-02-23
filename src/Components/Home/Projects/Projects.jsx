import React from 'react'

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Project from './Project';

const Blogs = () => {

     const projectLists =[
          {
               id: 1,
               name: 'JB Mavericks',
               link : 'https://jb-mavericks.github.io/',
               description: "As a backend Engineer on the Mentoring app project,I was responsible for designing, developing, and maintaining the server-side of the application.I contributed to the project including developing the API for user authentication,  designing the database that stored user data, mentor profiles, and other critical information. This involved optimizing the database to ensure high performance and scalability to handle large volumes of data. I also integrated several third-party APIs into the application to enhance its functionality and provide a seamless user experience. These APIs were consumed by the app to enable features such as OTP and scheduling sessions with mentors. As the creator of the app's backend, I worked closely with the front-end developers to ensure that the application worked seamlessly across all devices and platforms.I also played a critical role in ensuring the application's security and compliance with industry standards.",
               role: 'Lead Backend Engineer'
          },
          {
               id: 2,
               name: 'Shoppi Mart E Commerce',
               link : 'https://github.com/ADIB-the-NOOB/Shoppi-Mart-E-Commerce',
               description: 'As a backend developer in an E-commerce project, your primary responsibility was to design and develop the server-side of the application that powered the online store. I was responsible for developing the APIs that enabled the front-end interface to communicate with the server, managing the database that stored product and customer data, and ensuring the security and scalability of the application.',
               role: 'Lead Backend Engineer'
          },
          {
               id: 3,
               name: 'Reddits Backend',
               link : 'https://github.com/ADIB-the-NOOB/Reddits-Backend',
               description: "Developed a mini social media's backend",
               role: 'Lead Backend Engineer'
          }

     ]

     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='projects'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-[#eeb90b] pb-16 md:pb-20 lg:pb-24`}>Projects</h1>
               <div className={`grid grid-cols-1 px-6 sm:px-8 md:px-10`}>
                    {
                         projectLists.map((project, id) => (
                              <Project project={project} key={id}/>
                         ))
                    }
                    {/* <Project />
                    <Project />
                    <Project /> */}
                    {/* <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                         <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b] py-10`}>Shoppi Mart E Commerce</h1>
                         <a href='https://github.com/ADIB-the-NOOB/Shoppi-Mart-E-Commerce' target="_blank">
                              <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`} />
                         </a>
                    </div>
                    <div className={`bg-slate-600 rounded-xl grid grid-cols-2 place-items-center my-5`}>
                         <h1 className={`text-center text-xl md:text-3xl lg:text-4xl text-[#eeb90b] py-10`}>Reddits Backend</h1>
                         <a href='https://github.com/ADIB-the-NOOB/Reddits-Backend' target='_blank'>
                              <BsFillArrowRightCircleFill className={`text-5xl sm:text-6xl md:text-7xl cursor-pointer text-[#eeb90b] hover:-rotate-45 transition-all`} />
                         </a>
                    </div> */}
               </div>
          </div>
     )
}

export default Blogs