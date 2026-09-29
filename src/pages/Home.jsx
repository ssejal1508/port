import { HomeInfo } from "../components";

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo />
      </div>
    </section>
  );
};

export default Home;
