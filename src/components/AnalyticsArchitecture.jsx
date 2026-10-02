import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { analyticsArchitectureData } from '../data/analyticsArchitecture';
import SectionHeading from './SectionHeading';
import { TechIcon } from './icons/TechIcons';
import { 
  Database, Filter, Search, LayoutDashboard, TrendingUp, 
  Sparkles, ArrowUp, Layers, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';

const layerIconMap = {
  Database,
  Filter,
  Search,
  LayoutDashboard,
  TrendingUp
};

const moduleIconKeys = {
  "Python": "python",
  "Pandas": "pandas",
  "NumPy": "numpy",
  "SQL": "sql",
  "SQL Queries": "sql",
  "SQL Wrangling": "sql",
  "MySQL DB": "mysql",
  "MySQL": "mysql",
  "PostgreSQL": "postgres",
  "Power BI": "powerbi",
  "Excel": "excel",
  "Excel Dashboards": "excel",
  "Excel Sheets": "excel",
  "Matplotlib": "matplotlib",
  "Seaborn": "seaborn",
  "Plotly": "plotly",
  "EDA": "eda",
  "Data Cleaning": "datacleaning",
  "Data Visualization": "dataviz",
  "CSV Files": "excel"
};

export default function AnalyticsArchitecture() {
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [mousePos, setMousePos] = useState({ rotateX: 45, rotateY: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = 45 - ((e.clientY - centerY) / (rect.height / 2)) * 4;
    setMousePos({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ rotateX: 45, rotateY: 0 });
    setHoveredLayer(null);
  };

  const activeLayerInfo = hoveredLayer || selectedLayer;

  return (
    <section id="architecture" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="MY ANALYTICS ARCHITECTURE"
          title="How I Turn Data Into Insights"
          subtitle="From raw data to actionable insights — a structured approach to solving data problems."
        />

        {/* Live Hover Info Banner */}
        <div className="h-16 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeLayerInfo ? (
              <motion.div
                key={activeLayerInfo.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 glass-panel rounded-2xl border border-purple-500/40 shadow-xl shadow-purple-950/40 flex items-center gap-4 backdrop-blur-xl"
              >
                <div
                  className="p-2.5 rounded-xl border flex items-center justify-center text-white"
                  style={{ backgroundColor: `${activeLayerInfo.glowColor}20`, borderColor: activeLayerInfo.glowColor }}
                >
                  <span className="font-mono text-xs font-bold text-white">
                    LAYER {activeLayerInfo.layerNum}
                  </span>
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-white tracking-wider font-mono">
                      {activeLayerInfo.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {activeLayerInfo.badge}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    {activeLayerInfo.subtitle}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 font-mono"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>Hover or click any 3D architectural layer to inspect data flow</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3D Isometric Stacked Platform Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="perspective-container w-full flex justify-center py-8 relative"
          style={{ perspective: '1400px' }}
        >
          {/* Main 3D Isometric Platform Group */}
          <motion.div
            animate={{
              rotateX: isTouchDevice ? 0 : mousePos.rotateX || 45,
              rotateY: isTouchDevice ? 0 : mousePos.rotateY || 0,
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 25 }}
            className="relative w-full max-w-4xl p-6 sm:p-10 rounded-[44px] bg-gradient-to-b from-[#0B1224]/90 via-[#080D1C]/95 to-[#050816] border border-slate-800/90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_-10px_rgba(139,92,246,0.25)] transition-shadow duration-300 flex flex-col items-center gap-5 sm:gap-6"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Ambient Chassis Base Glow */}
            <div className="absolute inset-0 rounded-[44px] border-t border-white/10 pointer-events-none" />
            <div className="absolute -bottom-4 left-10 right-10 h-8 bg-purple-600/25 blur-2xl rounded-full pointer-events-none" />

            {/* Central Vertical Data Stream Core Beam */}
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-emerald-400 rounded-full opacity-60 blur-[1px] pointer-events-none z-0">
              <div className="w-full h-12 bg-white rounded-full animate-bounce opacity-80" />
            </div>

            {/* Render 5 Layers from Top (05) to Bottom (01) */}
            {analyticsArchitectureData.map((layer, index) => {
              const LayerIcon = layerIconMap[layer.icon] || Database;
              const isHovered = hoveredLayer?.id === layer.id;
              const isSelected = selectedLayer?.id === layer.id;

              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 50 * (5 - index) }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  onMouseEnter={() => setHoveredLayer(layer)}
                  onClick={() => setSelectedLayer(isSelected ? null : layer)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Layer ${layer.layerNum}: ${layer.title} - ${layer.subtitle}`}
                  className="group relative w-full z-10 cursor-pointer focus:outline-none"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Layer Slab Shadow */}
                  <div
                    className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                      isHovered
                        ? 'bg-purple-600/30 blur-xl translate-y-4 scale-105'
                        : 'bg-black/60 translate-y-2'
                    }`}
                  />

                  {/* 3D Layer Slab Body */}
                  <div
                    className={`relative w-full p-4 sm:p-5 sm:px-8 rounded-3xl border transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      isHovered
                        ? '-translate-y-3 scale-[1.02] bg-gradient-to-r from-[#141E36] via-[#10192E] to-[#141E36] border-purple-400 shadow-[0_0_30px_rgba(139,92,246,0.5)]'
                        : isSelected
                        ? 'translate-y-0.5 bg-[#0D1528] border-purple-500 shadow-inner'
                        : 'bg-gradient-to-r from-[#0E172B] via-[#0A1020] to-[#0E172B] border-slate-800/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]'
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? `0 20px 40px -10px ${layer.glowColor}60, inset 0 1px 1px rgba(255,255,255,0.3)`
                        : 'inset 0 1px 1px rgba(255,255,255,0.08), 0 8px 0 #050914, 0 12px 20px rgba(0,0,0,0.8)'
                    }}
                  >
                    {/* Layer Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${layer.glowColor}25`,
                            borderColor: `${layer.glowColor}80`,
                            color: layer.glowColor
                          }}
                        >
                          <LayerIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                              LAYER {layer.layerNum}
                            </span>
                            <span className="text-sm sm:text-base font-extrabold text-white tracking-wider font-mono">
                              {layer.title}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-medium">
                            {layer.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border text-slate-200"
                          style={{
                            backgroundColor: `${layer.glowColor}15`,
                            borderColor: `${layer.glowColor}50`
                          }}
                        >
                          {layer.badge}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isHovered ? 'translate-x-1 text-white' : ''}`} />
                      </div>
                    </div>

                    {/* Miniature 3D Floating Modules inside Layer Surface */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {layer.modules.map((mod) => {
                        const iconKey = moduleIconKeys[mod];
                        return (
                          <div
                            key={mod}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all duration-300 ${
                              isHovered
                                ? 'bg-slate-900/90 text-white border-purple-400/50 shadow-md scale-105'
                                : 'bg-slate-950/60 text-slate-300 border-slate-800'
                            }`}
                          >
                            {iconKey ? (
                              <TechIcon iconKey={iconKey} className="w-3.5 h-3.5" />
                            ) : (
                              <Zap className="w-3.5 h-3.5 text-purple-400" />
                            )}
                            <span className="font-semibold">{mod}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Edge Accent Line */}
                    <div
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-60"
                      style={{ backgroundColor: layer.glowColor }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Layer Detailed Spotlight Drawer */}
        <AnimatePresence>
          {selectedLayer && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 max-w-4xl mx-auto p-6 sm:p-8 glass-panel rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/60"
            >
              <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3.5 rounded-2xl border text-white"
                    style={{
                      backgroundColor: `${selectedLayer.glowColor}25`,
                      borderColor: selectedLayer.glowColor
                    }}
                  >
                    <span className="font-mono text-sm font-bold">
                      L-{selectedLayer.layerNum}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                      ARCHITECTURE SPOTLIGHT • {selectedLayer.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {selectedLayer.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLayer(null)}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Spotlight
                </button>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedLayer.methodology}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Core Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLayer.modules.map((m) => (
                      <span key={m} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Execution Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLayer.technologies.map((t) => (
                      <span key={t} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-800/80 text-xs font-mono text-purple-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
