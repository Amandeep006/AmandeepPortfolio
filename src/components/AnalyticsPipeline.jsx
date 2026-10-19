import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Database, Filter, Search, Terminal, PieChart, 
  LayoutDashboard, TrendingUp, CheckCircle2, ArrowRight, 
  Sparkles, Layers, Activity, ChevronRight, Zap, Code, ShieldCheck, BarChart3, LineChart
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const pipelineStages = [
  {
    num: '01',
    title: 'Data Collection',
    shortLabel: 'DATA INGESTION',
    badge: 'RAW DATA INGESTION',
    description: 'Gathering raw structured and unstructured data from databases, REST APIs, CSV files, and spreadsheet logs.',
    tools: ['CSV', 'Excel', 'MySQL', 'APIs'],
    icon: Database,
    color: '#06B6D4', // Cyan
    glowColor: 'rgba(6, 182, 212, 0.4)',
    borderColor: 'border-cyan-500/50',
    lightBg: 'bg-cyan-500/10'
  },
  {
    num: '02',
    title: 'Data Cleaning',
    shortLabel: 'FILTERING FUNNEL',
    badge: 'MESSY → CLEAN',
    description: 'Handling missing values, deduplication, normalizing data types, and filtering anomalies using Python.',
    tools: ['Python', 'Pandas', 'NumPy'],
    icon: Filter,
    color: '#3B82F6', // Blue
    glowColor: 'rgba(59, 130, 246, 0.4)',
    borderColor: 'border-blue-500/50',
    lightBg: 'bg-blue-500/10'
  },
  {
    num: '03',
    title: 'Exploratory Data Analysis',
    shortLabel: 'EDA & STATS',
    badge: 'STATISTICAL PATTERNS',
    description: 'Uncovering statistical distributions, correlation matrices, trends, and exploratory data patterns.',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    icon: Search,
    color: '#6366F1', // Indigo
    glowColor: 'rgba(99, 102, 241, 0.4)',
    borderColor: 'border-indigo-500/50',
    lightBg: 'bg-indigo-500/10'
  },
  {
    num: '04',
    title: 'SQL Analysis',
    shortLabel: 'HOLOGRAPHIC TERMINAL',
    badge: 'EXECUTED ✓',
    description: 'Executing analytical SQL queries, Window Functions, CTEs, and aggregations to compute business metrics.',
    tools: ['SQL', 'MySQL', 'PostgreSQL'],
    icon: Terminal,
    color: '#8B5CF6', // Violet
    glowColor: 'rgba(139, 92, 246, 0.4)',
    borderColor: 'border-violet-500/50',
    lightBg: 'bg-violet-500/10'
  },
  {
    num: '05',
    title: 'Visualization',
    shortLabel: '3D GLASS CHARTS',
    badge: 'CHARTS & GRAPHICS',
    description: 'Transforming processed query results into clear line charts, scatter plots, and donut graphics.',
    tools: ['Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Excel'],
    icon: PieChart,
    color: '#A855F7', // Purple
    glowColor: 'rgba(168, 85, 247, 0.4)',
    borderColor: 'border-purple-500/50',
    lightBg: 'bg-purple-500/10'
  },
  {
    num: '06',
    title: 'Dashboard',
    shortLabel: 'ENTERPRISE DASHBOARD',
    badge: 'PROMINENT HUB',
    description: 'Building automated, interactive executive dashboards in Power BI & Excel with DAX and custom slicers.',
    tools: ['Power BI', 'Excel', 'DAX', 'Power Query'],
    icon: LayoutDashboard,
    color: '#D946EF', // Magenta
    glowColor: 'rgba(217, 70, 239, 0.4)',
    borderColor: 'border-fuchsia-500/50',
    lightBg: 'bg-fuchsia-500/10'
  },
  {
    num: '07',
    title: 'Business Insights',
    shortLabel: 'INSIGHT CORE',
    badge: 'DECISION ENGINE',
    description: 'Translating analytical outputs into executive growth summaries and strategic business recommendations.',
    tools: ['KPIs', 'Trends', 'Segment Growth', '+24% Revenue'],
    icon: TrendingUp,
    color: '#EC4899', // Pink-Magenta
    glowColor: 'rgba(236, 72, 153, 0.4)',
    borderColor: 'border-pink-500/50',
    lightBg: 'bg-pink-500/10'
  }
];

export default function AnalyticsPipeline() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });
  const [activeStage, setActiveStage] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="py-24 relative bg-transparent overflow-hidden select-none"
    >
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-purple-600/15 to-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="DATA → INSIGHT ENGINE"
          title="How I Turn Data Into Insights"
          subtitle="A seven-stage workflow that transforms raw data into actionable business decisions."
        />

        {/* Live System HUD Header Status Bar */}
        <div className="mb-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#070B1F]/90 border border-purple-500/30 text-xs font-mono text-slate-300 shadow-xl backdrop-blur-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-purple-300 font-bold uppercase tracking-wider">
              {activeStage !== null 
                ? `STAGE ${pipelineStages[activeStage].num} HIGHLIGHTED • ${pipelineStages[activeStage].shortLabel}` 
                : 'CONTINUOUS DATA INTELLIGENCE PIPELINE ACTIVE • 01 INGESTION TO 07 INSIGHT CORE'}
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP CONNECTED 7-STAGE HORIZONTAL PIPELINE               */}
        {/* ============================================================ */}
        <div className="hidden lg:block relative py-6">
          
          {/* Continuous Glowing Connector Beam Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[2px] -translate-y-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 via-indigo-500 via-purple-500 via-fuchsia-500 to-pink-500 opacity-40 z-0" />

          {/* Luminous Moving Data Stream Particles (01 -> 07) */}
          {!reducedMotion && isInView && (
            <div className="absolute top-1/2 left-6 right-6 h-3 -translate-y-1/2 pointer-events-none z-10 overflow-hidden">
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ 
                  duration: activeStage !== null ? 2.5 : 4.5, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 shadow-[0_0_15px_#38BDF8]"
              />
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ 
                  duration: activeStage !== null ? 2.5 : 4.5, 
                  repeat: Infinity, 
                  ease: 'linear', 
                  delay: activeStage !== null ? 1.25 : 2.25 
                }}
                className="w-24 h-1.5 rounded-full bg-gradient-to-r from-transparent via-purple-400 to-pink-400 shadow-[0_0_15px_#EC4899]"
              />
            </div>
          )}

          {/* 7 STAGES GRID */}
          <div className="grid grid-cols-7 gap-3 relative z-20">
            {pipelineStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isHovered = activeStage === idx;
              const isProminent = stage.num === '06';

              return (
                <div
                  key={stage.num}
                  onMouseEnter={() => setActiveStage(idx)}
                  onMouseLeave={() => setActiveStage(null)}
                  className={`group relative transition-all duration-300 ${
                    isProminent ? 'scale-105 z-30' : ''
                  }`}
                >
                  {/* Top Stage Node Counter Badge */}
                  <div className="flex items-center justify-center mb-3">
                    <span
                      className="text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-md bg-[#050816] border transition-colors shadow-md"
                      style={{ borderColor: stage.color, color: stage.color }}
                    >
                      {stage.num}
                    </span>
                  </div>

                  {/* Glass Stage Node Container */}
                  <motion.div
                    whileHover={{ y: -8, scale: isProminent ? 1.06 : 1.04 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className={`relative p-3.5 rounded-2xl border backdrop-blur-xl flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#0B1026] via-[#070B1F] to-[#03050F] ${
                      isHovered
                        ? `${stage.borderColor} shadow-[0_0_25px_${stage.glowColor}] bg-slate-900/90`
                        : 'border-slate-800/90 shadow-lg'
                    } ${isProminent ? 'h-[360px] border-fuchsia-500/60 shadow-[0_0_22px_rgba(217,70,239,0.3)]' : 'h-[340px]'}`}
                  >
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-[8.5px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-950/80 border border-white/5 uppercase"
                          style={{ color: stage.color }}
                        >
                          {stage.badge}
                        </span>

                        <div
                          className="p-1.5 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${stage.color}18`,
                            borderColor: `${stage.color}45`,
                            color: stage.color
                          }}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-xs font-extrabold text-white mb-1.5 leading-tight group-hover:text-purple-300 transition-colors">
                        {stage.title}
                      </h3>

                      {/* Stage Description */}
                      <p className="text-[10.5px] text-slate-400 leading-relaxed mb-3">
                        {stage.description}
                      </p>
                    </div>

                    {/* 3D MINIATURE SPECIFIC VISUALIZATIONS */}
                    <div className="my-2 p-2 rounded-xl bg-slate-950/80 border border-white/10 font-mono text-[9.5px]">
                      
                      {/* STAGE 01 — DATA COLLECTION */}
                      {stage.num === '01' && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[9px] text-cyan-400 font-bold">
                            <span>RAW INGESTION</span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                              ACTIVE
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-[8.5px] text-slate-300">
                            <div className="p-1 rounded bg-slate-900 border border-cyan-500/20 text-center">MySQL DB</div>
                            <div className="p-1 rounded bg-slate-900 border border-cyan-500/20 text-center">REST API</div>
                          </div>
                        </div>
                      )}

                      {/* STAGE 02 — DATA CLEANING */}
                      {stage.num === '02' && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[9px] text-blue-400 font-bold">
                            <span>FUNNEL FILTER</span>
                            <span>MESSY → CLEAN</span>
                          </div>
                          <div className="h-1.5 rounded bg-slate-900 overflow-hidden relative border border-blue-500/30">
                            <div className="w-full h-full bg-gradient-to-r from-red-500/60 via-amber-500/60 to-emerald-400" />
                          </div>
                          <div className="text-[8px] text-slate-400 flex justify-between">
                            <span>Nulls / Dupes</span>
                            <span className="text-emerald-400 font-bold">Cleaned ✓</span>
                          </div>
                        </div>
                      )}

                      {/* STAGE 03 — EDA */}
                      {stage.num === '03' && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[9px] text-indigo-400 font-bold">
                            <span>DISTRIBUTION & CORR</span>
                            <span>r = 0.94</span>
                          </div>
                          <div className="flex items-end gap-1 h-5 pt-1">
                            <div className="w-1/4 h-2 bg-indigo-500/40 rounded-t" />
                            <div className="w-1/4 h-4 bg-indigo-400/70 rounded-t" />
                            <div className="w-1/4 h-5 bg-purple-400 rounded-t" />
                            <div className="w-1/4 h-3 bg-cyan-400 rounded-t" />
                          </div>
                        </div>
                      )}

                      {/* STAGE 04 — SQL ANALYSIS (HOLOGRAPHIC TERMINAL) */}
                      {stage.num === '04' && (
                        <div className="p-1.5 rounded bg-slate-950 border border-violet-500/40 font-mono text-[8.5px] leading-tight text-violet-300 transition-all duration-300 group-hover:border-violet-400 shadow-inner">
                          <div className="text-[7.5px] text-violet-400 font-bold mb-1 flex items-center justify-between">
                            <span>SQL QUERY</span>
                            <span className="text-emerald-400">EXECUTED ✓</span>
                          </div>
                          <div className="text-slate-300 font-mono">
                            <span className="text-purple-400">SELECT</span> segment,<br/>
                            <span className="text-cyan-400">SUM</span>(revenue)<br/>
                            <span className="text-purple-400">FROM</span> sales_data;
                          </div>
                        </div>
                      )}

                      {/* STAGE 05 — VISUALIZATION */}
                      {stage.num === '05' && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[9px] text-purple-300 font-bold">
                            <span>3D GLASS CHARTS</span>
                            <LineChart className="w-3 h-3 text-purple-400" />
                          </div>
                          <div className="flex items-end justify-between gap-1 h-6 pt-1">
                            <div className="w-2.5 h-3 bg-purple-500/50 rounded-t border-t border-purple-400" />
                            <div className="w-2.5 h-5 bg-purple-400 rounded-t border-t border-purple-300" />
                            <div className="w-2.5 h-4 bg-cyan-400 rounded-t border-t border-cyan-300" />
                            <div className="w-2.5 h-6 bg-pink-400 rounded-t border-t border-pink-300" />
                          </div>
                        </div>
                      )}

                      {/* STAGE 06 — DASHBOARD (ENTERPRISE PROMINENT) */}
                      {stage.num === '06' && (
                        <div className="p-1.5 rounded bg-fuchsia-950/40 border border-fuchsia-500/50 text-[9px] space-y-1">
                          <div className="flex items-center justify-between text-fuchsia-300 font-bold">
                            <span>POWER BI HUB</span>
                            <span className="text-[8px] px-1 py-0.2 rounded bg-fuchsia-500/20 text-fuchsia-200">LIVE</span>
                          </div>
                          <div className="text-[10px] text-emerald-400 font-extrabold flex items-center justify-between">
                            <span>REV TREND</span>
                            <span>$148.5K (+18%)</span>
                          </div>
                          <div className="h-1 rounded bg-slate-900 overflow-hidden">
                            <div className="w-5/6 h-full bg-gradient-to-r from-fuchsia-500 to-pink-400 animate-pulse" />
                          </div>
                        </div>
                      )}

                      {/* STAGE 07 — BUSINESS INSIGHTS (INSIGHT CORE) */}
                      {stage.num === '07' && (
                        <div className="p-1.5 rounded bg-pink-950/60 border border-pink-500/60 text-[9px] text-center space-y-0.5">
                          <div className="text-pink-300 font-extrabold text-[10px] flex items-center justify-center gap-1">
                            <Zap className="w-3 h-3 text-pink-400 animate-bounce" />
                            <span>+24% REVENUE</span>
                          </div>
                          <div className="text-[8px] text-slate-300">
                            Segment A Growth
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Tools Tags Footer */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-1">
                        {stage.tools.map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[8.5px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE / TABLET CLEAN VERTICAL CONNECTED PIPELINE            */}
        {/* ============================================================ */}
        <div className="lg:hidden space-y-4 relative py-4">
          {pipelineStages.map((stage, idx) => {
            const IconComp = stage.icon;

            return (
              <div key={stage.num} className="relative">
                {/* Vertical Connector Line to Next Node */}
                {idx < 6 && (
                  <div className="absolute left-7 top-full h-4 w-[2px] bg-gradient-to-b from-purple-500 to-transparent z-0" />
                )}

                <div
                  className={`p-5 glass-panel rounded-3xl border ${stage.borderColor} bg-gradient-to-b from-[#0B1026] via-[#070B1F] to-[#03050F] relative z-10 flex flex-col gap-3 shadow-xl`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-2xl border flex items-center justify-center"
                        style={{
                          backgroundColor: `${stage.color}18`,
                          borderColor: `${stage.color}45`,
                          color: stage.color
                        }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          STAGE {stage.num}
                        </span>
                        <h3 className="text-base font-extrabold text-white">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="text-[9.5px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-950 border border-white/10"
                      style={{ color: stage.color }}
                    >
                      {stage.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                    {stage.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guidance Footer */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>DATA ENGINEERING → ANALYTICS → BUSINESS DECISION</span>
        </div>

      </div>
    </section>
  );
}
