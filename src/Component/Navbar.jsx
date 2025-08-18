import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="">
        <nav className="p-4 flex justify-between items-center">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="100px"
            className="ml-0 h-8"
            viewBox="0 0 200 100"
            aria-label="D-DEV Logo"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#9013FE", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <text
              x="10"
              y="70"
              fontFamily="'Arial', sans-serif"
              fontSize="60"
              fontWeight="bold"
              fill="url(#gradient)"
            >
              D-DEV
            </text>
          </svg>
          
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <ul className={`flex-col md:flex-row md:flex space-y-0 mr-2 font-medium md:space-y-0 md:space-x-4 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-4 md:px-0 transition-all duration-200 ease-in ${menuOpen ? 'flex top-16' : 'hidden md:flex'}`}>
            <li><a href="#" className="text-black hover:text-gray-400 block py-2 md:py-0">About</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 block py-2 md:py-0">Skills</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 block py-2 md:py-0">Projects</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 block py-2 md:py-0">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
