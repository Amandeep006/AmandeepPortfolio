import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BookSectionTransition({ children, id, className = '' }) {
  const sectionRef = useRef(null);
  const prevScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track natural vertical scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection('up');
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Viewport intersection detection for boundary crossing animation
  const isInView = useInView(sectionRef, {
    amount: 0.12,
    once: false,
  });

  if (reducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  // 3D Page Turn Transition Physics
  const initialRotateY = scrollDirection === 'down' ? -12 : 12;

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{ perspective: '1400px' }}
    >
      <motion.section
        id={id}
        initial={{
          rotateY: initialRotateY,
          opacity: 0.85,
          scale: 0.985,
        }}
        animate={{
          rotateY: isInView ? 0 : initialRotateY,
          opacity: isInView ? 1 : 0.85,
          scale: isInView ? 1 : 0.985,
        }}
        transition={{
          duration: 0.65,
          ease: [0.25, 1, 0.5, 1], // Natural cubic-bezier page-turn curve
        }}
        style={{
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
        }}
        className={`relative ${className}`}
      >
        {/* SUBTLE DYNAMIC BOOK PAGE SHADOW OVERLAY DURING SCROLL TRANSITION */}
        <motion.div
          animate={{
            opacity: isInView ? 0 : 0.35,
          }}
          transition={{ duration: 0.65 }}
          className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-r from-purple-950/30 via-slate-950/20 to-transparent"
        />

        {/* SUBTLE 3D PAGE EDGE HIGHLIGHT DURING SCROLL TRANSITION */}
        <motion.div
          animate={{
            opacity: isInView ? 0 : 0.6,
          }}
          transition={{ duration: 0.65 }}
          className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 pointer-events-none z-30 shadow-[0_0_12px_rgba(168,85,247,0.6)]"
        />

        {/* ACTUAL SECTION CONTENT (REMAINS 100% UNTOUCHED & UNCLIPPED) */}
        {children}
      </motion.section>
    </div>
  );
}
