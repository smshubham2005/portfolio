import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

export default function About() {
  const { about, stats, personal, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  return (
    <section id="about" className="py-24 bg-dark-bg/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="Get To Know Me" title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stats Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.4)' }}
                className="p-6 rounded-xl bg-dark-card border border-white/5 shadow-lg flex flex-col justify-between h-32 transition-all duration-300"
              >
                <span className="text-3xl font-extrabold text-gradient">{stat.value}</span>
                <span className="text-sm font-semibold text-gray-400">{stat.label}</span>
              </motion.div>
            ))}

            {/* General Info Card */}
            <motion.div 
              variants={itemVariants}
              className="col-span-2 p-6 rounded-xl bg-dark-card border border-white/5 shadow-lg flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-emerald-400" />
                <span className="text-sm">{personal.location}</span>
              </div>
              {education.map((item) => (
                <div key={item.institution} className="flex items-start space-x-3 text-gray-300">
                  <FaGraduationCap className="mt-0.5 text-emerald-400" size={18} />
                  <span className="text-sm"><strong className="block text-white">{item.program}</strong>{item.institution} · {item.detail}{item.duration && ` · ${item.duration}`}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Description & Competencies Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaCode className="text-emerald-400" />
              Engineering Student & Programmer
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              {about.description}
            </p>

            <ul className="space-y-4">
              {about.points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
