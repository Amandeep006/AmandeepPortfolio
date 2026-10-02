import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/experience';
import SectionHeading from './SectionHeading';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 relative bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMICS"
          title="Educational Qualification"
          subtitle="Formal engineering degree providing strong foundations in computer science and technical logic."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 glass-panel rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-800/40 text-purple-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-purple-400">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      Affiliation: {edu.affiliation}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end text-xs text-slate-400 font-mono space-y-1">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {edu.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
