import React from 'react';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import CodingProfiles from './sections/CodingProfiles';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-gray-200">
      {/* Interactive Canvas Background */}
      <InteractiveBackground />

      {/* Navigation bar */}
      <Navbar />

      {/* Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
}
