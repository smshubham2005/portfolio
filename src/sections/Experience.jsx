import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-dark-bg/60 relative">
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader subtitle="Work History" title="Experience" />

        {/* Timeline container */}
        <div className="relative border-l border-gray-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot / icon */}
              <span className="absolute -left-[39px] md:-left-[55px] top-1.5 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-dark-bg border border-emerald-500/40 text-emerald-400">
                <FaBriefcase size={12} className="md:w-3.5 md:h-3.5" />
              </span>

              {/* Content box */}
              <div className="p-6 md:p-8 rounded-xl bg-dark-card border border-white/5 shadow-xl hover:border-emerald-500/20 hover:shadow-emerald-500/5 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{exp.role}</h3>
                    <h4 className="text-md font-semibold text-emerald-400">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col text-xs md:text-sm text-gray-400 space-y-1 md:items-end">
                    <span className="flex items-center gap-1.5 font-medium">
                      <FaCalendarAlt size={12} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="marker:text-emerald-500">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-semibold rounded-md border border-white/5 bg-white/5 text-gray-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
