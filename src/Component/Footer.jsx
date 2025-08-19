import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <section id='footer'>
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Ojemayowa</h3>
          <p className="text-gray-200 mb-8">Frontend Developer</p>

          <div className="flex items-center justify-center space-x-6 mb-8">
            <a
              href="https://github.com/D-DEV1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bolu-mayowa-25612926a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:Bolumayowa4@email.com"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-200">
              © {new Date().getFullYear()} Ojemayowa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}

export default Footer
