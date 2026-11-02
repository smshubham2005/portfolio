import React from 'react';
import { portfolioData } from '../data/content';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const { name, github, linkedin, leetcode } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-gray-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-wide">
              &lt;{name.split(' ')[0]} <span className="text-emerald-400">/&gt;</span>
            </span>
            <p className="text-xs text-gray-500 mt-1">Designed for recruiter review & SWE placements.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <SiLeetcode size={20} />
            </a>
          </div>

          {/* Scroll to top & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <span className="text-xs text-gray-500">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </span>
            
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-dark-card border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/20 hover:scale-105 active:scale-95 transition-all shadow-md"
              title="Scroll to Top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
