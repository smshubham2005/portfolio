import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ subtitle, title, alignment = 'center' }) {
  const isLeft = alignment === 'left';
  
  return (
    <div className={`mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2"
      >
        {subtitle}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[3px] bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
      />
    </div>
  );
}
