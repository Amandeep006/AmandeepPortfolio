import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from './icons/BrandIcons';
import { Star, GitFork, ExternalLink, Code2, Database } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profileData } from '../data/profile';

const featuredRepos = [
  {
    name: "Customer-Behaviour-Analysis",
    desc: "Python & SQL RFM segmentation pipeline with Power BI dashboard integration.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 12,
    forks: 4,
    updated: "Updated recently"
  },
  {
    name: "Netflix-Data-Analysis",
    desc: "EDA on 8,800+ Netflix records examining genre distributions & release patterns.",
    lang: "Jupyter Notebook",
    langColor: "#DA5B0B",
    stars: 8,
    forks: 2,
    updated: "Updated recently"
  },
  {
    name: "Pizza-Sales-Analysis",
    desc: "SQL queries, CTEs, and Window Functions evaluating revenue & hourly demand.",
    lang: "SQL",
    langColor: "#e38c00",
    stars: 15,
    forks: 5,
    updated: "Updated recently"
  },
  {
    name: "Earthquake-Data-Visualization",
    desc: "Interactive Plotly geospatial map visualizing global seismic events & focal depths.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 6,
    forks: 1,
    updated: "Updated recently"
  }
];

export default function GithubSection() {
  // Mock contribution grid generation
  const contributionGrid = Array.from({ length: 52 * 7 }, (_, i) => {
    const rand = Math.random();
    if (rand > 0.85) return 'bg-purple-500';
    if (rand > 0.7) return 'bg-purple-700';
    if (rand > 0.5) return 'bg-purple-900';
    return 'bg-slate-900';
  });

  return (
    <section className="py-24 relative bg-transparent border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OPEN SOURCE & CODE"
          title="Building in Public"
          subtitle="Exploring datasets, writing analytical scripts, and maintaining public project repositories."
        />

        {/* Profile Card Header */}
        <div className="mb-12 p-6 sm:p-8 glass-panel rounded-3xl border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-950 border border-purple-700 flex items-center justify-center text-purple-300 shadow-xl">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Amandeep Saini</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  @Amandeep006
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Data Analyst • Python | SQL | Power BI</p>
            </div>
          </div>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-950/60 transition-all hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Contribution Heatmap Mockup */}
        <div className="mb-12 p-6 glass-panel rounded-3xl border border-slate-800 overflow-x-auto">
          <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-400">
            <span>Analytical Activity & Commit Heatmap</span>
            <span>2026 Activity</span>
          </div>

          <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[700px] justify-between">
            {contributionGrid.map((bgClass, idx) => (
              <div key={idx} className={`w-2.5 h-2.5 rounded-sm ${bgClass}`} />
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`${profileData.githubUrl}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-6 glass-panel rounded-2xl border border-slate-800 hover:border-purple-500/40 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors font-mono">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
