import backgroundVideo from "../assets/37429-414024586_small.mp4"; 

const HomeInfo = () => {
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
    Hi, I&apos;m <span className="text-pink-600">Sejal</span>  
    <br />
    CSE Senior @NIT Hamirpur
  </h1>
  <p className="text-white/90 text-lg sm:text-xl text-center mt-4">
    Software Engineer | Full-Stack Development | Machine Learning
  </p>
  <div className="flex gap-4 mt-8">
    <a href="#projects" className="btn">View Projects</a>
    <a href="#contact" className="btn">Contact Me</a>
  </div>

 

</div>

    </div>
  );
};

export default HomeInfo;
