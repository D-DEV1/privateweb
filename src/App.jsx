import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner'


import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  const [Time, setTime] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {Time ? (
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
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
