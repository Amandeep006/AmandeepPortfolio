import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Database, FileSpreadsheet, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import HeroVisual from './HeroVisual';
import FallingStarsBackground from './FallingStarsBackground';
import FuturisticHeroBackground from './FuturisticHeroBackground';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative z-20 min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#050816] overflow-hidden">
      {/* ============================================================ */}
      {/* 1. NATIVE FUTURISTIC HERO BACKGROUND CANVAS LAYER (z-1)       */}
      {/* ============================================================ */}
      <FuturisticHeroBackground />

      {/* ============================================================ */}
      {/* 2. FALLING STARS / ATMOSPHERE PARTICLES CANVAS LAYER (z-2)   */}
      {/* ============================================================ */}
      <FallingStarsBackground />

      {/* ============================================================ */}
      {/* 3. SUBTLE GRID ACCENT LAYER (z-3)                            */}
      {/* ============================================================ */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-[3]" />

      {/* ============================================================ */}
      {/* 4. HERO CONTENT CONTAINER (z-10)                             */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-purple-950/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>{profileData.badgeTitle}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
            >
              Hi, I'm <span className="text-gradient-purple">{profileData.name}</span>.
            </motion.h1>

            {/* Sub-headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-200 mb-6 leading-snug"
            >
              I turn data into <span className="underline decoration-purple-500/50 decoration-wavy underline-offset-8">meaningful insights</span>.
            </motion.h2>

            {/* Supporting Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mb-8 font-normal leading-relaxed drop-shadow-sm"
            >
              {profileData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-purple-900/40 hover:shadow-purple-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-md"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>View Resume</span>
                </a>

                <button
                  onClick={() => handleScrollTo('contact')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/40 border border-purple-800/50 transition-all duration-300 cursor-pointer backdrop-blur-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Let's Connect</span>
                </button>
              </div>
            </motion.div>

            {/* Quick Tech Highlights Badge Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-400 w-full"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate">Python & Pandas</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="truncate">SQL & MySQL</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Power BI & Excel</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
