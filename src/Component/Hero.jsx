import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <div>
        <section className="pt-12 bg-gray-50 sm:pt-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Hi, I'm <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Ojemayowa</span>
            </p>
               <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            I craft beautiful, responsive web experiences with modern technologies
          </p>
          
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
                 Passionate about creating pixel-perfect interfaces, optimizing performance, 
            and bringing designs to life with clean, maintainable code.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a href="#projects"
                    className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">
                    Projects
                </a>
                <Link to="/resume"
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">My Resume</Link>
            </div>
        </div>
    </div>
   
    

</section>
    </div>
      
    </>
  )
}

export default Hero
