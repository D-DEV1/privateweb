import React, { useEffect, useState } from 'react';

const projects = [
  {
    image: '/images/devp3.png',
    title: 'My portfolio website',
    desc: 'My personal portfolio showcasing my work and skills.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/D-DEV1/privateweb.git',
  },
  {
    image: '/images/devp.png',
    title: 'simple landing page',
    desc: 'A simple landing page with login functionality.',
    tech: ['HTML', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/D-DEV1/project01',
  },
  {
    image: '/images/devp2.png',
    title: 'My first project',
    desc: 'A cool project built with html and css.',
    tech: [ 'Html', 'css'],
    github: 'https://github.com/D-DEV1/Devp',
  },
  {
    image: '/images/dev4.png',
    title: 'A clone of a popular website',
    desc: 'Yet another project with a neat stack.',
    tech: ['Tailwind', 'JavaScript', 'Tailwind'],
    github: 'https://github.com/D-DEV1/cloneALI',
  },
];

const Project = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50" id='projects'>
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-700 mx-auto w-full max-w-md flex flex-col
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 w-full h-40 object-cover"
              style={{ minHeight: '10rem', maxHeight: '10rem' }}
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-1">{project.desc}</p>
            <div className="flex gap-2 mb-4 flex-wrap">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
