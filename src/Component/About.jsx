import React, { useEffect, useState } from 'react';
import { Code, Palette, Zap, Github, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
   <>
   <div className="max-w-4xl mx-auto px-4 py-24 mb-6">
    <div>
        <h1 className='flex justify-center text-3xl font-bold '>About me</h1>
        <p className='text-center mt-4 text-gray-600'>
          I am a passionate web developer with a focus on creating beautiful and responsive web experiences.</p>
    </div>

<div className="grid md:grid-cols-2 gap-12 items-center">
  {/* Left: Profile & Tech */}
  <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 relative overflow-hidden">
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Developer</h3>
      <p className="text-gray-600 mb-6">
        A year building responsive, user-friendly apps with modern frameworks. Passionate about clean code and performance.
      </p>
      <div className="flex flex-wrap gap-2">
        {['React',  'TailwindCSS', 'Boostrap'].map(tech => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
        ))}
      </div>
    </div>
  </div>

  
  <div className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
    {[
      { icon: Code, title: 'Clean Code', desc: 'Maintainable, scalable code with best practices.' },
      { icon: Palette, title: 'UI/UX Design', desc: 'Intuitive interfaces and great user experience.' },
      { icon: Zap, title: 'Performance', desc: 'Fast, accessible, seamless interactions.' }
    ].map(({ icon: Icon, title, desc }) => (
      <div key={title} className="flex items-start space-x-4">
        <div className="bg-blue-100 rounded-lg p-3">
          <Icon className="text-blue-600" size={24} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
 <div className="flex justify-center space-x-6 mt-10">
     <a
       href="https://github.com/yourusername"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="GitHub"
       className="hover:scale-110 transition-transform"
     >
       <Github size={40} color="black" /> 
     </a>
     <a
       href="mailto:your@email.com"
       aria-label="Mail"
       className="hover:scale-110 transition-transform"
     >
       <Mail size={40} color="red" /> 
     </a>
     <a
       href="https://linkedin.com/in/yourusername"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="LinkedIn"
       className="hover:scale-110 transition-transform"
     >
       <Linkedin size={40} color="#2563eb" />
     </a>
   </div>
   </div>
  
   
   </>
   
  );
};

export default About;
