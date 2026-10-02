import React from 'react';
import { motion } from 'framer-motion';
import { techStripItems } from '../data/skills';
import { GithubIcon } from './icons/BrandIcons';
import { 
  Code2, Database, LayoutDashboard, Table, Layers, Cpu, 
  LineChart, ScatterChart, Server, GitBranch 
} from 'lucide-react';

const iconMap = {
  Code2,
  Database,
  LayoutDashboard,
  Table,
  Layers,
  Cpu,
  LineChart,
  ScatterChart,
  Server,
  GitBranch,
  Github: GithubIcon
};

export default function TechStrip() {
  return (
    <section className="py-12 bg-[#080D1C]/80 border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strip Header */}
        <p className="text-center text-xs font-semibold text-purple-400 tracking-widest uppercase mb-8">
          TOOLS & TECHNOLOGIES I WORK WITH
        </p>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStripItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-3.5 glass-panel rounded-xl border border-slate-800/90 hover:border-purple-500/40 flex items-center gap-3 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-900/40 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
