import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from './icons/BrandIcons';
import { ArrowUpRight, BookOpen, Layers } from 'lucide-react';

export default function ProjectCard({ project, onSelectCaseStudy }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative glass-panel rounded-3xl border border-slate-800/80 hover:border-purple-500/40 glass-panel-hover overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail Container */}
        <div className="relative w-full h-52 overflow-hidden bg-slate-950">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1224] via-transparent to-black/40" />

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono font-bold text-purple-300">
            PROJECT {project.number}
          </div>

          {/* Featured Ribbon if applicable */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600/90 text-white text-[10px] font-bold tracking-widest uppercase shadow-lg">
              FEATURED
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-purple-400 mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-300"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Key Highlights Bullet points */}
          {project.highlights && (
            <div className="space-y-1 mb-6 pt-3 border-t border-slate-800/60">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-800/40">
        <button
          onClick={() => onSelectCaseStudy(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 hover:border-purple-500 transition-all duration-300 group/btn"
        >
          <BookOpen className="w-3.5 h-3.5 text-purple-300 group-hover/btn:text-white" />
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
          title="View GitHub Repository"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
