import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/stats';
import AnimatedCounter from './AnimatedCounter';
import { FolderCheck, Wrench, Database, Award } from 'lucide-react';

const iconMap = {
  FolderCheck,
  Wrench,
  Database,
  Award
};

export default function Stats() {
  return (
    <section className="py-16 bg-transparent relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || FolderCheck;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 glass-panel rounded-2xl border border-slate-800/90 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-950/40 px-2 py-1 rounded">
                    Portfolio Metric
                  </span>
                </div>

                {/* Number Counter */}
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-sm font-bold text-slate-200 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
