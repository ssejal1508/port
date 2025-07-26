import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bgcolor' style={{ backgroundColor: '#F3E5F5' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;