import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Gradient helper for project card covers
  const getGradient = (imageName) => {
    switch (imageName) {
      case 'shelves':
        return 'from-emerald-500/20 via-teal-600/20 to-blue-500/20';
      case 'voting':
        return 'from-blue-600/20 via-indigo-600/20 to-violet-500/20';
      case 'car':
        return 'from-orange-500/20 via-rose-600/20 to-pink-500/20';
      default:
        return 'from-emerald-500/20 to-teal-500/20';
    }
  };

  return (
    <section id="projects" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="My Creations" title="Projects & Case Studies" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col h-full rounded-xl bg-dark-card border border-white/5 overflow-hidden shadow-xl hover:border-emerald-500/20 hover:shadow-emerald-500/5 transition-all duration-300 group"
            >
              {/* Project Card Image Graphic */}
              <div className={`h-48 w-full bg-gradient-to-br ${getGradient(project.image)} relative flex items-center justify-center p-6 border-b border-white/5 group-hover:scale-[1.01] transition-transform duration-300`}>
                {/* Visual Graphic Representation */}
                <div className="glass px-6 py-4 rounded-lg shadow-2xl relative max-w-[80%] border border-white/10 select-none">
                  <div className="flex space-x-1.5 mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-emerald-400">&lt;{project.title.split(' ')[0]} /&gt;</span>
                </div>
                
                {/* Subtle overlay accent */}
                <div className="absolute inset-0 bg-dark-bg/10 opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-xs font-semibold rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-white/5 text-gray-400 border border-white/5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action footer */}
                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                  
                  <div className="flex space-x-3 text-gray-400">
                    {project.github !== '#' && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`} className="hover:text-white transition-colors">
                      <FaGithub size={18} />
                    </a>}
                    {project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`} className="hover:text-white transition-colors">
                      <FaExternalLinkAlt size={16} />
                    </a>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal / Detailed Case Study Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/85 backdrop-blur-md"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-dark-card border border-white/10 shadow-2xl p-6 md:p-8"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>

                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  Project Case Study
                </span>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 pr-6">
                  {selectedProject.title}
                </h3>

                {/* Cover graphic */}
                <div className={`h-40 w-full bg-gradient-to-br ${getGradient(selectedProject.image)} rounded-lg flex items-center justify-center p-4 mb-6 border border-white/5`}>
                  <span className="font-mono text-sm font-bold text-white/80 glass px-4 py-2 rounded">
                    &lt; {selectedProject.title} /&gt;
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">Overview</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.longDesc}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-sm text-gray-400">
                          <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">Full Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-semibold rounded bg-white/5 text-gray-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links CTA */}
                  {(selectedProject.github !== '#' || selectedProject.live !== '#') && <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800 mt-8">
                    {selectedProject.github !== '#' && <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-700"><FaGithub size={16} /><span>Source Code</span></a>}
                    {selectedProject.live !== '#' && <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg"><FaExternalLinkAlt size={14} /><span>Live Demo</span></a>}
                  </div>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
