import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { analyticsWorkflowSteps } from '../data/analyticsWorkflow';
import SectionHeading from './SectionHeading';
import { 
  Database, Filter, Search, Code, PieChart, LayoutDashboard, 
  TrendingUp, ArrowRight 
} from 'lucide-react';

const iconMap = {
  database: Database,
  datacleaning: Filter,
  eda: Search,
  sql: Code,
  dataviz: PieChart,
  powerbi: LayoutDashboard,
  trending: TrendingUp
};

export default function AnalyticsWorkflow() {
  const sectionRef = useRef(null);

  // Viewport visibility observer: triggers 3D explosion when entering, collapse when leaving
  const isInView = useInView(sectionRef, {
    amount: 0.25,
    once: false // Re-triggers automatically every time user enters or exits section
  });

  // return (
  //   <section
  //     ref={sectionRef}
  //     id="workflow"
  //     className="py-20 relative bg-[#050816] overflow-hidden"
  //   >
  //     {/* Background Radial Glow */}
  //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
  //       {/* Section Header */}
  //       {/* <SectionHeading
  //         // badge="MY ANALYTICS PROCESS"
  //         title="How I Turn Data Into Insights"
  //         subtitle="From collecting raw data to delivering actionable business insights."
  //       /> */}

  //       {/* Status Indicator */}
  //       <div className="mb-6 flex items-center justify-center">
  //         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono shadow-md">
  //           <span className={`w-2 h-2 rounded-full ${isInView ? 'bg-purple-400 animate-ping' : 'bg-slate-600'}`} />
  //           <span>
  //             {isInView ? 'EXPLODED 3D ARCHITECTURE • 01 TO 07 SEPARATED' : 'COMPACT 3D STACK • SCROLL INTO VIEW TO ASSEMBLE'}
  //           </span>
  //         </div>
  //       </div>

  //       {/* 3D Perspective Container */}
  //       <div
  //         className="perspective-container w-full flex justify-center py-4"
  //         style={{ perspective: '1400px' }}
  //       >
  //         {/* Main 3D Container (Folded vs Expanded States) */}
  //         <motion.div
  //           initial="folded"
  //           animate={isInView ? "expanded" : "folded"}
  //           variants={{
  //             folded: {
  //               transition: {
  //                 staggerChildren: 0.04,
  //                 staggerDirection: -1
  //               }
  //             },
  //             expanded: {
  //               transition: {
  //                 staggerChildren: 0.09,
  //                 delayChildren: 0.1
  //               }
  //             }
  //           }}
  //           className="relative w-full max-w-6xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-3 py-4"
  //           style={{ transformStyle: 'preserve-3d' }}
  //         >
  //           {analyticsWorkflowSteps.map((step, idx) => {
  //             const IconComp = iconMap[step.iconKey] || Database;

  //             // 3D Exploded Physics Variants:
  //             // `folded`: Cards compress together into ONE compact 3D stack centered at Card 01
  //             // `expanded`: Cards separate horizontally across space with staggered movement into a connected 3D architecture
  //             const cardVariants = {
  //               folded: {
  //                 x: (idx - 3) * 12,
  //                 y: idx * 3,
  //                 z: -idx * 28,
  //                 rotateY: 26,
  //                 rotateZ: (idx - 3) * -1.5,
  //                 scale: 0.94 - idx * 0.02,
  //                 opacity: idx === 0 ? 1 : 0.6,
  //                 boxShadow: '0 10px 25px rgba(0,0,0,0.9)',
  //                 transition: {
  //                   type: 'spring',
  //                   stiffness: 220,
  //                   damping: 24,
  //                   duration: 0.6
  //                 }
  //               },
  //               expanded: {
  //                 x: 0,
  //                 y: 0,
  //                 z: 0,
  //                 rotateY: 0,
  //                 rotateZ: 0,
  //                 scale: 1,
  //                 opacity: 1,
  //                 boxShadow: `0 15px 30px -10px ${step.color}50`,
  //                 transition: {
  //                   type: 'spring',
  //                   stiffness: 170,
  //                   damping: 18,
  //                   duration: 0.8
  //                 }
  //               }
  //             };

  //             return (
  //               <motion.div
  //                 key={step.id}
  //                 variants={cardVariants}
  //                 tabIndex={0}
  //                 role="article"
  //                 aria-label={`Step ${step.id} of 7: ${step.title}`}
  //                 className="relative group focus:outline-none select-none transition-all duration-300"
  //                 style={{
  //                   transformStyle: 'preserve-3d',
  //                   flexBasis: 'calc(100% / 7)',
  //                   minWidth: '135px',
  //                   maxWidth: '175px'
  //                 }}
  //               >
  //                 {/* Top Architectural Annotation Label Tag */}
  //                 <div
  //                   className={`absolute -top-7 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center transition-all duration-500 pointer-events-none ${
  //                     isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
  //                   }`}
  //                 >
  //                   <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 whitespace-nowrap px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
  //                     {step.shortLabel}
  //                   </span>
  //                   <div className="w-[1px] h-1.5 bg-purple-500/40" />
  //                 </div>

  //                 {/* Thin Glowing Connector Line to Next Card when Expanded */}
  //                 {idx < 6 && (
  //                   <div
  //                     className={`absolute top-1/2 -right-3.5 z-20 -translate-y-1/2 hidden lg:flex items-center transition-opacity duration-500 pointer-events-none ${
  //                       isInView ? 'opacity-100' : 'opacity-0'
  //                     }`}
  //                   >
  //                     <div className="w-3 h-[1px] bg-gradient-to-r from-purple-500 to-transparent" />
  //                     <ArrowRight className="w-3 h-3 text-purple-400/80 -ml-1 animate-pulse" />
  //                   </div>
  //                 )}

  //                 {/* 3D Physical Panel Body (~400px compact height) */}
  //                 <div
  //                   className="relative w-full h-[370px] sm:h-[395px] p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#0F172A] via-[#0B1224] to-[#070C1A] border-slate-800 hover:border-purple-500/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.45)]"
  //                   style={{
  //                     boxShadow: `inset 0 1px 1px rgba(255,255,255,0.08), 0 10px 20px rgba(0,0,0,0.7)`
  //                   }}
  //                 >
  //                   {/* Compact Card Header */}
  //                   <div>
  //                     <div className="flex items-center justify-between mb-2">
  //                       <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300">
  //                         {step.stepNum}
  //                       </span>
  //                       <div
  //                         className="p-1.5 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
  //                         style={{
  //                           backgroundColor: `${step.color}20`,
  //                           borderColor: `${step.color}60`,
  //                           color: step.color
  //                         }}
  //                       >
  //                         <IconComp className="w-4 h-4" />
  //                       </div>
  //                     </div>

  //                     {/* Step Title */}
  //                     <h3 className="text-sm font-extrabold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
  //                       {step.title}
  //                     </h3>

  //                     {/* Description */}
  //                     <p className="text-xs text-slate-300 leading-relaxed mb-3">
  //                       {step.description}
  //                     </p>
  //                   </div>

  //                   {/* Bottom Tools Section */}
  //                   <div className="pt-2.5 border-t border-slate-800/80">
  //                     <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 font-semibold">Tools</div>
  //                     <div className="flex flex-wrap gap-1">
  //                       {step.tools.map((tool) => (
  //                         <span
  //                           key={tool}
  //                           className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-200"
  //                         >
  //                           {tool}
  //                         </span>
  //                       ))}
  //                     </div>
  //                   </div>

  //                   {/* Bottom Edge Accent Line */}
  //                   <div
  //                     className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full opacity-70"
  //                     style={{ backgroundColor: step.color }}
  //                   />
  //                 </div>
  //               </motion.div>
  //             );
  //           })}
  //         </motion.div>
  //       </div>

  //       {/* Process Guidance Footer */}
  //       <div className="mt-4 text-center text-xs text-slate-400 font-mono">
  //         <span>Complete 7-Stage Analytics System • Ingestion to Executive Action</span>
  //       </div>

  //     </div>
  //   </section>
  // );
}
