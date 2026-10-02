import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import AnalyticsPipeline from './components/AnalyticsPipeline';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';
import GithubSection from './components/GithubSection';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookSectionTransition from './components/BookSectionTransition';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 selection:bg-purple-600 selection:text-white relative">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Vertically Scrolling Portfolio Content */}
      <main id="main-content">
        <Hero />
        
        <BookSectionTransition id="about-section">
          <About />
          <Stats />
        </BookSectionTransition>

        <BookSectionTransition id="skills-section">
          <Skills />
        </BookSectionTransition>

        <BookSectionTransition id="workflow-section">
          <AnalyticsPipeline />
        </BookSectionTransition>

        <BookSectionTransition id="projects-section">
          <Projects />
        </BookSectionTransition>

        <BookSectionTransition id="experience-section">
          <Experience />
          <Education />
        </BookSectionTransition>

        <BookSectionTransition id="services-section">
          <Services />
        </BookSectionTransition>

        <BookSectionTransition id="github-section">
          <GithubSection />
          <Blog />
        </BookSectionTransition>

        <BookSectionTransition id="contact-section">
          <Contact />
        </BookSectionTransition>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
