import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';

// Icons Import
import {
  FaJava, FaPython, FaReact, FaHtml5, FaNodeJs, FaDocker, FaAws, FaLinux, FaGitAlt, FaCode
} from 'react-icons/fa';
import { 
  SiCplusplus, SiJavascript, SiRedux, SiTailwindcss, SiFramer, 
  SiExpress, SiMongodb, SiPostgresql, SiRedis, SiPostman 
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';

const getIcon = (iconName) => {
  const iconProps = { className: "w-8 h-8 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" };
  
  switch(iconName) {
    case 'cpp': return <SiCplusplus {...iconProps} />;
    case 'java': return <FaJava {...iconProps} />;
    case 'js': return <SiJavascript {...iconProps} />;
    case 'python': return <FaPython {...iconProps} />;
    case 'sql': return <DiDatabase {...iconProps} />;
    
    case 'react': return <FaReact {...iconProps} />;
    case 'redux': return <SiRedux {...iconProps} />;
    case 'tailwind': return <SiTailwindcss {...iconProps} />;
    case 'htmlcss': return <FaHtml5 {...iconProps} />;
    case 'framer': return <SiFramer {...iconProps} />;
    
    case 'node': return <FaNodeJs {...iconProps} />;
    case 'express': return <SiExpress {...iconProps} />;
    case 'mongodb': return <SiMongodb {...iconProps} />;
    case 'postgres': return <SiPostgresql {...iconProps} />;
    case 'redis': return <SiRedis {...iconProps} />;
    
    case 'git': return <FaGitAlt {...iconProps} />;
    case 'docker': return <FaDocker {...iconProps} />;
    case 'postman': return <SiPostman {...iconProps} />;
    case 'aws': return <FaAws {...iconProps} />;
    case 'linux': return <FaLinux {...iconProps} />;
    case 'fastapi':
    case 'langchain':
    case 'android':
    case 'raspberrypi':
    case 'opencv':
    case 'ml':
    case 'api': return <FaCode {...iconProps} />;
    case 'database': return <DiDatabase {...iconProps} />;
    
    default: return <FaGitAlt {...iconProps} />;
  }
};

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader subtitle="My Capabilities" title="Skills & Technologies" />
        
        <div className="space-y-12">
          {skills.map((categoryObj) => (
            <div key={categoryObj.category} className="space-y-6">
              <h3 className="text-lg font-bold text-gray-300 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                {categoryObj.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {categoryObj.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative p-5 rounded-xl bg-dark-card border border-white/5 shadow-md flex flex-col items-center justify-center text-center space-y-4 hover:border-emerald-500/30 hover:shadow-emerald-500/5 transition-all duration-300"
                  >
                    {/* Glowing highlight backdrop */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {getIcon(skill.icon)}
                    
                    <div className="relative z-10">
                      <h4 className="text-sm font-bold text-white tracking-wide">{skill.name}</h4>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-emerald-400 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
