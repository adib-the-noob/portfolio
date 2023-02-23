import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgBriefcase, CgReadme, CgSmileMouthOpen } from "react-icons/cg";

const Experience = () => {
     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='experience'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Experience</h1>
               <VerticalTimeline>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2021-2023"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Community Manager</h3>
                         <h4 className="vertical-timeline-element-subtitle">Programming Hero</h4>
                         <p>
                         As a volunteer for a Discord server focused on coding and programming, my main responsibility was to assist members with fixing bugs in their code. This involved me reviewing code, identifying errors, and providing suggestions and guidance on how to fix them. To be successful in this role, I have a strong understanding of coding concepts and am able to communicate effectively with members of varying skill levels. Additionally, I am willing to collaborate with other volunteers and maintain a positive and helpful attitude.
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2021-2023"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Art Director</h3>
                         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                         <p>
                              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2008 - 2010"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
                         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                         <p>
                              User Experience, Visual Design
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2006 - 2008"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
                         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                         <p>
                              User Experience, Visual Design
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--education"
                         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                         date="April 2013"
                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         icon={<CgReadme />}
                    >
                         <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                         <p>
                              Strategy, Social Media
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--education"
                         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                         date="November 2012"
                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         icon={<CgReadme />}
                    >
                         <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                         <p>
                              Creative Direction, User Experience, Visual Design
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--education"
                         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                         date="2002 - 2006"
                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         icon={<CgReadme />}
                    >
                         <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                         <p>
                              Creative Direction, Visual Design
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                         icon={<CgSmileMouthOpen />}
                    />
               </VerticalTimeline>
          </div>
     )
}

export default Experience