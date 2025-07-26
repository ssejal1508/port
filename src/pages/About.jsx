import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import { CTA } from "../components";
  import { experiences, skills } from "../constants";
  
  import "react-vertical-timeline-component/style.min.css";
  
  const About = () => {
    return (
      <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Sejal Sharma
        </span>
      </h1>
    
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
      </div>
    
      <hr className='border-slate-200' />
    
      <CTA />
      </section>
    );
  };
  
  export default About;