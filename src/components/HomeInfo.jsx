import { useState } from "react";
import backgroundVideo from "../assets/37429-414024586_small.mp4"; 

const HomeInfo = ({ currentStage }) => {
  if (currentStage !== 1) return null;

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className='relative z-10 flex justify-center items-center h-full bg-black/50'>
        <h1 className='text-white text-3xl sm:text-4xl font-bold text-center'>
          Hi, I'm <span className='text-pink-600'>Sejal</span>  
          <br />
          A Sophomore at NIT Hamirpur
        </h1>
      </div>
    </div>
  );
};

export default HomeInfo;
