import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/content';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Profiles', href: '#coding-profiles' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors">
              &lt;{portfolioData.personal.name.split(' ')[0]} <span className="text-emerald-400">/&gt;</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-emerald-400 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Social Icons & Resume CTA */}
            <div className="flex items-center space-x-3 border-l border-gray-800 pl-6">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
                <FaGithub size={19} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                <FaLinkedin size={19} />
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Shubham_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold rounded-lg border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all cursor-pointer"
              >
                Resume
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-4 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[60px] z-40 bg-dark-bg/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 pt-8 pb-6 space-y-6 flex flex-col items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-emerald-400 text-xl font-semibold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-6 pt-8 w-full border-t border-gray-800">
            <div className="flex space-x-6">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={28} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={28} />
              </a>
            </div>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Shubham_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-2/3 text-center px-5 py-3 font-semibold rounded-lg border border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 transition-all"
            >
              Download Resume (PDF)
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              onClick={() => setIsOpen(false)}
              className="w-2/3 text-center px-5 py-3 font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transition-all"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
