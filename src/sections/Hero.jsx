import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { FaGithub, FaLinkedin, FaArrowRight, FaTerminal, FaCode, FaCogs, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
  const { name, title, subTitle, github, linkedin, leetcode, resumeUrl } = portfolioData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 90, damping: 14 } 
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background gradients that orbit/blend */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[90px] animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Bio Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono font-bold max-w-max">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>SYSTEMS INTEGRATION & INTERNSHIP READY</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
              Hi, I'm <span className="text-gradient font-black">{name}</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300">
              {title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              {subTitle}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center space-x-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Showcase</span>
                <FaArrowRight size={14} />
              </a>
              <a 
                href={resumeUrl}
                download="Shubham_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-500 text-emerald-400 font-bold tracking-wide transition-all cursor-pointer"
              >
                <FaDownload size={14} />
                <span>Download Resume</span>
              </a>
              <a 
                href="#contact" 
                className="px-6 py-4 rounded-xl bg-dark-card/50 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-gray-300 hover:text-emerald-400 font-bold tracking-wide transition-all cursor-pointer"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social profiles fast-links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-5 pt-4">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Connect:</span>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <FaGithub size={24} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href={leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <SiLeetcode size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Unique Cyber Dashboard Mockup (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring', delay: 0.4 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Dashboard Box */}
            <div className="w-full max-w-md rounded-2xl bg-dark-card/80 border border-white/10 shadow-2xl p-6 relative overflow-hidden backdrop-blur-md">
              {/* Header bar */}
              <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="font-mono text-xs text-gray-500 flex items-center gap-1.5">
                  <FaTerminal className="text-emerald-400" /> env://placements.sh
                </span>
              </div>

              {/* Status metrics grid */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
                    <FaCode className="mb-2 text-blue-400" />
                    <span className="block text-xs text-gray-500">Core strength</span>
                    <strong className="text-sm text-white">Java & DSA</strong>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-3">
                    <FaCogs className="mb-2 text-emerald-400" />
                    <span className="block text-xs text-gray-500">Focus</span>
                    <strong className="text-sm text-white">Backend systems</strong>
                  </div>
                </div>

                {/* Live Console Output */}
                <div className="mt-6 p-4 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] leading-relaxed text-emerald-400/90 space-y-1 shadow-inner h-32 overflow-hidden">
                  <p className="text-gray-500">$ run test-suite</p>
                  <p>✔ DSA_Compilation: Successful (0.01ms)</p>
                  <p>✔ Projects: 3 shipped</p>
                  <p>✔ Internship: InnovationHub</p>
                  <p className="text-white animate-pulse">■ Open to software opportunities...</p>
                </div>
              </div>

              {/* Glowing decorative frame line */}
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent to-emerald-400"></div>
              <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>

            {/* Orbiting graphic node 1 */}
            <motion.div 
              animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -left-6 glass border border-white/10 shadow-2xl px-4 py-2.5 rounded-xl flex items-center space-x-2"
            >
              <span className="text-sm">🔥</span>
              <span className="text-[11px] font-mono font-bold text-gray-300">LeetCode 250+</span>
            </motion.div>

            {/* Orbiting graphic node 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-4 glass border border-white/10 shadow-2xl px-4 py-2.5 rounded-xl flex items-center space-x-2"
            >
              <span className="text-sm">💻</span>
              <span className="text-[11px] font-mono font-bold text-gray-300">CGPA 9.0</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
