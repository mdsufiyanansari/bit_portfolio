import { useState } from "react";
import Loader from "./components/Loader";

import { Routes, Route } from "react-router-dom";
import SplashCursor from './animation/SplashCursor';

import Navbar from './components/Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    const [loading, setLoading] = useState(true);
  return (
    <div>
      <SplashCursor/>
      <Navbar/>
            {loading && <Loader onFinish={() => setLoading(false)} />}

      <Routes>
         <Route path="/" element= {!loading && <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
