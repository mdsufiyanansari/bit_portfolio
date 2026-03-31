import { useState, lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SplashCursor from "./animation/SplashCursor";

// 🔥 Lazy Imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div>
        <SplashCursor />
        <Navbar />

        {/* Initial Loader */}
        {loading && <Loader onFinish={() => setLoading(false)} />}

        <div>
          {/* Suspense for Lazy Components */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={!loading && <Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default App;