import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './icons/BrandIcons';
import { X, ExternalLink, Database, Filter, Search, Code, Lightbulb, CheckCircle2, Copy, Check } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedQueryIndex, setCopiedQueryIndex] = React.useState(null);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  const handleCopyQuery = (queryText, index) => {
    navigator.clipboard.writeText(queryText);
    setCopiedQueryIndex(index);
    setTimeout(() => setCopiedQueryIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-y-auto z-10 text-slate-100 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-mono font-bold mb-3">
              PROJECT {project.number} • CASE STUDY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-purple-300 text-base font-medium">
              {project.subtitle}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-semibold"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail Image Banner */}
          <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8 border border-slate-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1224] via-transparent to-transparent" />
          </div>

          {/* Case Study Details Grid */}
          <div className="space-y-8 text-sm leading-relaxed">
            {/* Problem & Dataset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                  <Filter className="w-4 h-4" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-slate-300">{caseStudy?.problemStatement}</p>
              </div>

              <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <Database className="w-4 h-4" />
                  <span>Dataset & Scope</span>
                </div>
                <p className="text-slate-300">{caseStudy?.datasetInfo}</p>
              </div>
            </div>

            {/* Data Cleaning Steps */}
            {caseStudy?.dataCleaningSteps?.length > 0 && (
              <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Data Cleaning & Transformation</span>
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {caseStudy.dataCleaningSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exploratory Data Analysis */}
            {caseStudy?.exploratoryAnalysis?.length > 0 && (
              <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>Exploratory Data Analysis (EDA)</span>
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {caseStudy.exploratoryAnalysis.map((eda, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{eda}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SQL Queries Snippet */}
            {caseStudy?.sqlQueries?.map((sqlObj, idx) => (
              <div key={idx} className="p-5 glass-panel rounded-2xl border border-purple-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="font-bold text-white">{sqlObj.title}</span>
                  </div>
                  <button
                    onClick={() => handleCopyQuery(sqlObj.query, idx)}
                    className="flex items-center gap-1 text-xs text-purple-300 hover:text-white px-2.5 py-1 rounded bg-purple-950 border border-purple-800/60"
                  >
                    {copiedQueryIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy SQL</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-400 mb-3">{sqlObj.description}</p>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-purple-200 overflow-x-auto leading-relaxed">
                  <code>{sqlObj.query}</code>
                </pre>
              </div>
            ))}

            {/* Key Insights & Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy?.keyInsights?.length > 0 && (
                <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span>Key Analytics Insights</span>
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    {caseStudy.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy?.businessRecommendations?.length > 0 && (
                <div className="p-5 glass-panel rounded-2xl border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Business Impact</span>
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    {caseStudy.businessRecommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-slate-900 border border-slate-700 hover:border-purple-500 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
