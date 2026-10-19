import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-transparent border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CAREER & TRAINING"
          title="Practical Analytics Experience"
          subtitle="My journey in developing core data analytics skills through intensive hands-on problem solving."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10 pb-12 last:pb-0 border-l-2 border-purple-500/30 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#080D1C] border-2 border-purple-500 group-hover:scale-125 group-hover:border-purple-300 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 glass-panel rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-purple-400 flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-xs text-slate-400 font-mono space-y-1">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 mb-6">
                  {exp.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
