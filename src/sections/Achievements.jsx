import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function Achievements() {
  const { achievements, activities } = portfolioData;

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="achievements" className="py-24 bg-dark-bg/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="Extra-curriculars" title="Achievements & Certifications" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.3)' }}
              className="p-6 rounded-xl bg-dark-card border border-white/5 shadow-xl flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <FaAward size={20} />
                  </span>
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                    <FaCalendarAlt /> {ach.date}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {ach.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  {ach.organization}
                </h4>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Action Link (Optional representation) */}
              <div className="border-t border-gray-800/80 pt-4 mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resume highlight
                </span>
                <span className="text-emerald-400 group-hover:text-white transition-colors">
                  <FaExternalLinkAlt size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-dark-card p-6 shadow-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Activities</p>
          {activities.map((activity) => (
            <div key={activity.title} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div><h3 className="font-bold text-white">{activity.title}</h3><p className="text-sm leading-relaxed text-gray-400">{activity.detail}</p></div>
              <span className="shrink-0 text-xs font-semibold text-gray-500">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
