import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillKeyboardRows } from '../data/skills';
import { TechIcon } from './icons/TechIcons';
import SectionHeading from './SectionHeading';
import { Sparkles, Terminal, Layers, ArrowUp, Info, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const keyboardRef = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);

  // Mouse Parallax on Keyboard Chassis
  const handleMouseMove = (e) => {
    if (isTouchDevice || !keyboardRef.current) return;
    const rect = keyboardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 4; // Max 4 deg Y
    const rotateX = 7 - ((e.clientY - centerY) / (rect.height / 2)) * 3; // 7 deg base X ±3
    setMousePos({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ rotateX: 7, rotateY: 0 });
    setHoveredSkill(null);
  };

  const activeSkillInfo = hoveredSkill || selectedSkill;

  return (
    <section id="skills" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="MY TOOLKIT"
          title="Technologies I Work With"
          subtitle="Explore the interactive 3D mechanical keyboard representing my technical toolkit for Data Analytics."
        />

        {/* Floating Tooltip Indicator */}
        <div className="h-16 mb-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeSkillInfo ? (
              <motion.div
                key={activeSkillInfo.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-2.5 glass-panel rounded-2xl border border-purple-500/40 shadow-xl shadow-purple-950/40 flex items-center gap-4 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-700">
                  <TechIcon iconKey={activeSkillInfo.iconKey} className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-white tracking-wide font-mono">
                      {activeSkillInfo.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {activeSkillInfo.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    {activeSkillInfo.description}
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
                <span>Hover or tap any keycap to inspect analytical tools</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3D Keyboard Perspective Container */}
        <div
          className="perspective-container w-full flex justify-center py-6"
          style={{ perspective: '1200px' }}
        >
          {/* Keyboard Outer Base / Chassis */}
          <motion.div
            ref={keyboardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: isTouchDevice ? 0 : mousePos.rotateX || 7,
              rotateY: isTouchDevice ? 0 : mousePos.rotateY || 0,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="relative w-full max-w-5xl p-4 sm:p-6 sm:pb-8 rounded-[36px] bg-gradient-to-b from-[#0E172A] via-[#0B1224] to-[#070C18] border border-slate-800/90 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(139,92,246,0.25)] transition-shadow duration-300"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Keyboard Frame Bevel Lip & Underglow Ring */}
            <div className="absolute inset-0 rounded-[36px] border-t border-white/10 pointer-events-none" />
            <div className="absolute -bottom-3 left-6 right-6 h-6 bg-purple-600/20 blur-xl rounded-full pointer-events-none" />

            {/* Keyboard Brand / Status Bar */}
            <div className="flex items-center justify-between px-4 pb-4 mb-4 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-purple-300 font-bold tracking-wider">AMANDEEP ANALYTICS KB-2026</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">SWITCHES: TACTILE MECHANICAL</span>
                <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">DATA ENGINE ON</span>
              </div>
            </div>

            {/* Rows Container */}
            <div className="space-y-3 sm:space-y-4">
              {skillKeyboardRows.map((row) => (
                <div
                  key={row.rowId}
                  className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3"
                >
                  {row.keys.map((skill) => {
                    const isHovered = hoveredSkill?.id === skill.id;
                    const isSelected = selectedSkill?.id === skill.id;

                    return (
                      <button
                        key={skill.id}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        aria-label={`Skill key: ${skill.name} - ${skill.category}`}
                        className="group relative focus:outline-none transition-all duration-300 ease-out select-none"
                        style={{
                          flexGrow: skill.widthRatio,
                          flexShrink: 0,
                          flexBasis: `calc(100% / 6 * ${skill.widthRatio})`,
                          minWidth: '100px',
                          maxWidth: '220px',
                        }}
                      >
                        {/* 3D Keycap Base Shadow */}
                        <div
                          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                            isHovered
                              ? 'bg-purple-600/40 blur-md scale-105 transform translate-y-3'
                              : 'bg-black/60 translate-y-2'
                          }`}
                        />

                        {/* 3D Keycap Body */}
                        <div
                          className={`relative w-full h-14 sm:h-16 rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-center gap-1 border transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                            isHovered
                              ? '-translate-y-3 scale-105 bg-gradient-to-b from-[#1E293B] via-[#101A33] to-[#0D152A] border-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.5)]'
                              : isSelected
                              ? 'translate-y-0.5 bg-[#0F172A] border-purple-500 shadow-inner'
                              : 'bg-gradient-to-b from-[#111A2E] via-[#0B1224] to-[#070D1A] border-slate-800/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]'
                          }`}
                          style={{
                            boxShadow: isHovered
                              ? `0 15px 30px -5px ${skill.color}50, inset 0 1px 1px rgba(255,255,255,0.3)`
                              : 'inset 0 1px 1px rgba(255,255,255,0.08), 0 6px 0 #050914, 0 10px 15px rgba(0,0,0,0.7)'
                          }}
                        >
                          {/* Keycap Dish Recess Surface */}
                          <div className="w-full h-full rounded-xl flex items-center justify-center gap-2 px-2 bg-slate-950/30 border border-white/5">
                            {/* Centered Technology Icon */}
                            <div className={`transition-transform duration-300 ${isHovered ? 'scale-115 rotate-3' : ''}`}>
                              <TechIcon iconKey={skill.iconKey} className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            {/* Keycap Text Label */}
                            <span
                              className={`text-[11px] sm:text-xs font-bold tracking-wider font-mono transition-colors ${
                                isHovered
                                  ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                                  : 'text-slate-300'
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>

                          {/* Subtle Bottom Bevel Lip */}
                          <div
                            className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full opacity-60"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Keyboard Wrist Rest / Base Footing */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Click key to pin skill spotlight
              </span>
              <span>22 CORE TECHNOLOGIES INSTALLED</span>
            </div>
          </motion.div>
        </div>

        {/* Selected Skill Spotlight Card (Revealed on Click) */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 max-w-3xl mx-auto p-6 glass-panel rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/50"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-950 border border-purple-700">
                    <TechIcon iconKey={selectedSkill.iconKey} className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                      SKILL SPOTLIGHT • {selectedSkill.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Spotlight [ESC]
                </button>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedSkill.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 mr-2">Associated Tools & Concepts:</span>
                {selectedSkill.tools.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800 text-xs font-mono text-purple-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
