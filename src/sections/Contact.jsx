import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaPhoneAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background neon blur */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader subtitle="Get In Touch" title="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info cards (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Let's discuss opportunities!</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am actively seeking software engineering internships, co-ops, and full-time placements. Feel free to reach out via the form, directly by email, or connect with me on professional platforms.
            </p>

            {/* Quick Contacts */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-dark-card border border-white/5 shadow-md">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <FaEnvelope size={18} />
                  </span>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email Me</h4>
                    <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs rounded bg-white/5 hover:bg-emerald-500/20 text-gray-300 hover:text-emerald-400 border border-white/10 transition-all flex items-center space-x-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-400" size={12} /> : <FaCopy size={12} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {personal.phone && (
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-dark-card border border-white/5 shadow-md">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <FaPhoneAlt size={16} />
                  </span>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Phone</h4>
                    <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-dark-card border border-white/5 shadow-md">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FaMapMarkerAlt size={18} />
                </span>
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider">Location</h4>
                  <span className="text-sm font-semibold text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Coding Profiles links */}
            <div className="pt-6">
              <h4 className="text-xs uppercase font-bold text-gray-500 tracking-widest mb-4">Coding Profiles</h4>
              <div className="flex space-x-4">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-card border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-card border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-card border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all">
                  <SiLeetcode size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Panel (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-xl bg-dark-card border border-white/5 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe how we can work together..."
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2.5 transition-all cursor-pointer"
                >
                  <FaPaperPlane size={14} />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Submission Notification Toast */}
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-semibold shadow-lg"
                >
                  Your email client is opening with the message ready to send.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
