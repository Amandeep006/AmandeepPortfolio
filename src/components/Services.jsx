import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { servicesData } from '../data/services';
import SectionHeading from './SectionHeading';
import { 
  BarChart3, Code2, Database, LayoutDashboard, Table, 
  PieChart, Filter, FileText 
} from 'lucide-react';

const iconMap = {
  BarChart3,
  Code2,
  Database,
  LayoutDashboard,
  Table,
  PieChart,
  Filter,
  FileText
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  return (
    <section id="services" ref={sectionRef} className="py-24 relative bg-transparent overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ============================================================ */}
      {/* FUTURISTIC NEON SCAN / ENERGY SWEEP OVERLAYS (LEFT -> RIGHT) */}
      {/* ============================================================ */}
      
      {/* 1. Primary Glowing Neon Vertical Energy Sweep Line */}
      <motion.div
        initial={{ x: '-20%', opacity: 0 }}
        animate={isInView ? {
          x: ['-20%', '120%'],
          opacity: [0, 0.9, 1, 0.7, 0]
        } : { x: '-20%', opacity: 0 }}
        transition={{
          duration: 1.7,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-purple-500/25 via-indigo-500/30 to-transparent pointer-events-none z-20 blur-md"
      />

      {/* 2. Intense Core Neon Beam Head with Fading Trailing Glow */}
      <motion.div
        initial={{ x: '-10%', opacity: 0 }}
        animate={isInView ? {
          x: ['-10%', '110%'],
          opacity: [0, 1, 0.8, 1, 0]
        } : { x: '-10%', opacity: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-400 via-indigo-300 to-purple-500 pointer-events-none z-20 shadow-[0_0_15px_#8B5CF6,0_0_30px_#A855F7,0_0_45px_#6366F1]"
      />

      {/* 3. Outer Neon Perimeter Boundary Beam (Pulsing / Blinking Glow) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: [0, 1, 0.4, 0.9, 0.5, 1, 0.8]
        } : { opacity: 0 }}
        transition={{
          duration: 1.8,
          times: [0, 0.15, 0.35, 0.55, 0.75, 0.9, 1]
        }}
        className="absolute inset-x-4 sm:inset-x-8 top-10 bottom-10 rounded-3xl border border-purple-500/20 pointer-events-none z-10 overflow-hidden shadow-[inset_0_0_20px_rgba(139,92,246,0.1)]"
      >
        {/* Top Boundary Line Sweep */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 via-indigo-400 to-transparent shadow-[0_0_12px_#8B5CF6,0_0_24px_#A855F7]"
        />

        {/* Bottom Boundary Line Sweep */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.1 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 via-blue-400 to-transparent shadow-[0_0_12px_#8B5CF6,0_0_24px_#6366F1]"
        />
      </motion.div>

      {/* MAIN SECTION CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Subtle Left -> Right Entrance */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            badge="SERVICES & OFFERINGS"
            title="What I Can Do"
            subtitle="Key technical and analytical capabilities I offer for internships, entry-level positions, and projects."
          />
        </motion.div>

        {/* Services Cards Grid with Staggered Left -> Right Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || BarChart3;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                className="group p-6 glass-panel rounded-3xl border border-slate-800/80 hover:border-purple-500/40 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
