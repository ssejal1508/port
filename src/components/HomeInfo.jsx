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
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/50 px-4">
  <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
    Hi, I'm <span className="text-pink-600">Sejal</span>  
    <br />
    A Junior at NIT Hamirpur
  </h1>

  {/* Resume Box */}
  <a
    href="https://drive.google.com/file/d/1Kht5QD1RI3maiLxJ43IUGrDbB9_QU25n/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 bg-white text-black px-6 py-2 rounded-xl shadow-md hover:bg-pink-600 hover:text-white transition-colors duration-300 font-semibold text-lg"
  >
    View Resume
  </a>
</div>

    </div>
  );
};

export default HomeInfo;
