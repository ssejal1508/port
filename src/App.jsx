import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bgcolor' style={{ backgroundColor: '#F3E5F5' }}>
      <Navbar />
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;
