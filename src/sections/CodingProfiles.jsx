import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { SiLeetcode } from 'react-icons/si';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

export default function CodingProfiles() {
  const { personal, stats } = portfolioData;
  const solved = stats.find((stat) => stat.label === 'LeetCode Problems')?.value ?? '120+';

  return (
    <section id="coding-profiles" className="relative overflow-hidden bg-dark-bg/60 py-24">
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader subtitle="Problem Solving" title="Consistent Practice" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-card p-6 shadow-2xl shadow-black/20 md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/20"><SiLeetcode size={28} /></span>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Data structures & algorithms</p>
                <h3 className="text-2xl font-bold text-white md:text-3xl">Building consistency, one problem at a time.</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">I have solved {solved} problems on LeetCode while strengthening my Java, problem-solving, and algorithmic thinking skills.</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <FaCode className="text-emerald-400" />
              <div><span className="block text-2xl font-extrabold text-white">{solved}</span><span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Problems solved</span></div>
            </div>
          </div>
          {personal.leetcode !== '#' && <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-yellow-400 transition-colors hover:text-white">View LeetCode profile <FaExternalLinkAlt size={11} /></a>}
        </motion.div>
      </div>
    </section>
  );
}
