import React from 'react'

const Project = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Map through your projects array */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <img src="project-image.jpg" alt="Project" className="rounded mb-4" />
          <h3 className="text-xl font-bold mb-2">Project Title</h3>
          <p className="text-gray-600 mb-4">Short project description goes here.</p>
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Tailwind</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium">GitHub</a>
            <a href="https://demo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium">Live Demo</a>
          </div>
        </div>
        {/* ...more cards */}
      </div>
    </>
  )
}

export default Project
