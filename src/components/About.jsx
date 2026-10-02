import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import SectionHeading from './SectionHeading';
import AnalyticsWorkflow from './AnalyticsWorkflow';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#050816]">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT ME"
          title="Turning Data Into Decisions"
          subtitle="I bridge raw technical datasets and strategic business clarity through analytical problem solving."
        />

        {/* Bio & Positioning Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Card 1: Personal Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 glass-panel rounded-3xl border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
                <Sparkles className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-white">Analytical Approach</h3>
            </div>
            
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I am an aspiring Data Analyst with hands-on experience working with <strong className="text-purple-300">Python, SQL, Power BI, and Excel</strong>. I enjoy exploring raw datasets, resolving inconsistencies, discovering trends, and presenting findings through clear visual dashboards.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether analyzing customer retention metrics in SQL, writing data processing scripts in Pandas, or designing executive reports in Power BI, my goal is always to convert raw data into actionable knowledge that drives better business outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                // href={profileData.resumeUrl}
                href="/resume.pdf"
                download="Amandeep_Saini_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/40 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all"
              >
                <span>Explore Skills</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 glass-panel rounded-2xl border border-slate-800/80">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Focus Area</div>
              <div className="text-lg font-bold text-white">Exploratory Data Analysis & Business Intelligence</div>
              <div className="text-xs text-slate-400 mt-2">Specialized in SQL query optimization and interactive dashboard storytelling.</div>
            </div>

            <div className="p-6 glass-panel rounded-2xl border border-slate-800/80">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Current Training</div>
              <div className="text-lg font-bold text-white">Python Data Analytics Trainee @ QSpiders</div>
              <div className="text-xs text-slate-400 mt-2">Enhancing real-world analytics problem solving & database manipulation.</div>
            </div>

            <div className="p-6 glass-panel rounded-2xl border border-slate-800/80">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Academic Background</div>
              <div className="text-lg font-bold text-white">B.Tech Engineering</div>
              <div className="text-xs text-slate-400 mt-2">Vidya College of Engineering (AKTU)</div>
            </div>
          </motion.div>
        </div>

        {/* 3D Folding Deck Analytics Workflow Architecture */}
        <div className="mt-20">
          <AnalyticsWorkflow />
        </div>
      </div>
    </section>
  );
}
