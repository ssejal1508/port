import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import { CTA } from "../components";
  import { experiences, skills, certi } from "../constants";
  
  import "react-vertical-timeline-component/style.min.css";
  
  const About = () => {
    return (
      <section className='max-container'>
      <div className="flex flex-col items-center gap-4">
  <h1 className="head-text text-center">
    Hello, I'm{" "}
    <span className="blue-gradient_text drop-shadow font-semibold">
      Sejal Sharma
    </span>
  </h1>

  {/* Competitive Programming Profiles */}
  <div className="flex gap-6 mt-2">
    {/* LeetCode */}
    <a
      href="https://leetcode.com/u/codegirl27/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        alt="LeetCode"
        className="h-8 w-8 object-contain"
      />
      <span className="text-sm font-medium text-gray-700">LeetCode</span>
    </a>

    {/* Codeforces */}
    <a
      href="https://codeforces.com/profile/codegirl27"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <img
        src="https://sta.codeforces.com/s/84849/images/codeforces-logo-with-telegram.png"
        alt="Codeforces"
        className="h-8 w-8 object-contain"
      />
      <span className="text-sm font-medium text-gray-700">Codeforces</span>
    </a>
  </div>
</div>

   
      <div className='mt-5 flex flex-col gap-3 text-stone-700'>
      <p className="text-lg">
  I am passionate about Data Structures and Algorithms (DSA), Full Stack Development, Artificial Intelligence and Machine Learning (AI/ML), and contributing to Open Source projects.
</p>

      </div>
    
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-4 flex flex-wrap gap-1'>
        {skills.map((skill) => (
          <div  key={skill.name}>
      
            <img
            src={skill.imageUrl}
            alt={skill.name}
            
            />
          
          </div>
        ))}
        </div>
      </div>
    

      <div className='py-16'>
        <h3 className='subhead-text'>Experiences</h3>
        <div className='mt-5 flex flex-col gap-3 text-stone-700'>
        <p className="text-lg">
          I have been a part of various hackathons and coding competitions. I have also contributed to various open-source projects. 
        </p>
        </div>
    
        <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
              />
            </div>
            }
            contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: experience.iconBg,
            boxShadow: "none",
            }}
          >
            <div>
            <h3 className='text-black text-xl font-poppins font-semibold'>
              {experience.title}
            </h3>
            <p
              className='text-black-500 font-medium text-base'
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
            </div>
    
            <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
              key={`experience-point-${index}`}
              className='text-black-500/50 font-normal pl-1 text-sm'
              >
              {point}
              </li>
            ))}
            </ul>
          </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
<div className="py-10 flex flex-col">
  <h3 className="subhead-text">Certifications</h3>
  
  <div className="mt-4 flex flex-col gap-4">
    {certi.map((certification) => (
      <a
        key={certification.name}
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition-transform"
      >
        <img
          src={certification.imageUrl}
          alt={certification.name}
          className="h-auto w-auto"
        />
      </a>
    ))}
  </div>
</div>

      </div>
    
      <hr className='border-slate-200' />
    
      <CTA />
      </section>
    );
  };
  
  export default About;