
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Resume from './Component/Resume';

const App = () => {
  const [Time, setTime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (Time) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#000000"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Project />
              <Contact />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <Resume />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
