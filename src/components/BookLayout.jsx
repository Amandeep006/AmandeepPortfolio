import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBook, BOOK_PAGES } from '../context/BookContext';
import { ChevronUp, ChevronDown, BookOpen } from 'lucide-react';

export default function BookLayout({ children }) {
  const {
    currentPageIndex,
    totalPages,
    isAnimating,
    direction,
    nextPage,
    prevPage,
    goToPage,
    pages,
  } = useBook();

  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const pageRefs = useRef([]);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle Wheel Scroll Events with Scroll Lock & Threshold
  useEffect(() => {
    let wheelCooldown = false;
    let accumulatedDelta = 0;

    const handleWheel = (e) => {
      // Allow normal scroll inside form elements if active
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      // Prevent native page scroll
      e.preventDefault();

      if (isAnimating || wheelCooldown) return;

      const activePageEl = pageRefs.current[currentPageIndex];
      const delta = e.deltaY;

      // Check if active page has scrollable content that isn't at boundary yet
      if (activePageEl) {
        const { scrollTop, scrollHeight, clientHeight } = activePageEl;
        const isScrollable = scrollHeight > clientHeight + 10;

        if (isScrollable) {
          if (delta > 0 && scrollTop + clientHeight < scrollHeight - 5) {
            // Still scrolling down inside page
            activePageEl.scrollTop += delta;
            return;
          }
          if (delta < 0 && scrollTop > 5) {
            // Still scrolling up inside page
            activePageEl.scrollTop += delta;
            return;
          }
        }
      }

      accumulatedDelta += delta;

      // Threshold to prevent minor trackpad jitters
      if (Math.abs(accumulatedDelta) > 30) {
        wheelCooldown = true;

        if (accumulatedDelta > 0) {
          nextPage();
        } else {
          prevPage();
        }

        accumulatedDelta = 0;

        setTimeout(() => {
          wheelCooldown = false;
        }, 900);
      }
    };

    const container = containerRef.current || window;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentPageIndex, isAnimating, nextPage, prevPage]);

  // Handle Mobile Touch Swipes
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = (e) => {
      if (isAnimating) return;
      if (!touchStartRef.current) return;

      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };

      const deltaY = touchStartRef.current.y - touchEnd.y;
      const deltaX = touchStartRef.current.x - touchEnd.x;

      // Ensure vertical swipe is dominant
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 55) {
        const activePageEl = pageRefs.current[currentPageIndex];
        if (activePageEl) {
          const { scrollTop, scrollHeight, clientHeight } = activePageEl;
          if (deltaY > 0 && scrollTop + clientHeight < scrollHeight - 10) return;
          if (deltaY < 0 && scrollTop > 10) return;
        }

        if (deltaY > 0) {
          nextPage();
        } else {
          prevPage();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPageIndex, isAnimating, nextPage, prevPage]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          nextPage();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevPage();
          break;
        case 'Home':
          e.preventDefault();
          goToPage(0);
          break;
        case 'End':
          e.preventDefault();
          goToPage(totalPages - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, goToPage, totalPages]);

  // Convert Children to Array of Sections
  const sectionChildren = React.Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-[#050816] text-slate-100 select-none"
      style={{ perspective: '1600px' }}
    >
      {/* 3D BOOK PAGES STACK */}
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {pages.map((page, idx) => {
          const sectionEl = sectionChildren[idx];
          const isCurrent = idx === currentPageIndex;

          // Page Flip Transformation Logic:
          // Pages before current index are turned face-down to the left (-180deg).
          // Pages at or after current index are facing up (0deg).
          let targetRotateY = 0;
          if (idx < currentPageIndex) {
            targetRotateY = -180;
          }

          // Compute z-index stacking:
          // Active page sits on top. Remaining pages stack underneath in order.
          let zIndex = totalPages - Math.abs(idx - currentPageIndex);
          if (isCurrent) zIndex = 50;

          return (
            <motion.div
              key={page.id}
              initial={false}
              animate={{
                rotateY: targetRotateY,
              }}
              transition={{
                duration: reducedMotion ? 0.4 : 0.95,
                ease: [0.645, 0.045, 0.355, 1.0], // Custom cubic-bezier for physical page turn physics
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d',
                zIndex: zIndex,
                visibility: Math.abs(idx - currentPageIndex) > 2 ? 'hidden' : 'visible',
              }}
            >
              {/* FRONT SURFACE OF THE BOOK PAGE */}
              <div
                ref={(el) => (pageRefs.current[idx] = el)}
                className="absolute inset-0 w-full h-full bg-[#050816] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-transparent"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Embedded Section Content */}
                {sectionEl}
              </div>

              {/* 3D PAGE SIDE EDGE THICKNESS BAR (Dark Navy Book Edge) */}
              {!reducedMotion && (
                <div
                  className="absolute top-0 bottom-0 right-0 w-[5px] bg-gradient-to-r from-[#0E172A] via-[#0B1224] to-[#080D1C] border-r border-slate-700/50 shadow-inner"
                  style={{
                    transform: 'rotateY(90deg) translateZ(2px)',
                    transformOrigin: 'right center',
                    backfaceVisibility: 'hidden',
                  }}
                />
              )}

              {/* BACK SURFACE OF THE BOOK PAGE (Visible when page turns past -90deg) */}
              {!reducedMotion && (
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#080D1C] via-[#050816] to-[#040612] border-r border-purple-950/40 p-12 flex flex-col justify-between items-end text-right"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <div className="flex items-center gap-3 opacity-30 text-purple-400 font-mono text-sm tracking-widest uppercase">
                    <span>DIGITAL BOOK ARCHITECTURE</span>
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>

                  <div className="flex flex-col items-end opacity-20">
                    <span className="text-8xl font-extrabold text-purple-500/30 font-mono">
                      {page.num}
                    </span>
                    <span className="text-xl font-bold text-slate-400 font-mono uppercase tracking-wider">
                      {page.title}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 font-mono opacity-40">
                    AMANDEEP SAINI • PORTFOLIO 2026
                  </div>
                </div>
              )}

              {/* DYNAMIC SHADOW & LIGHTING OVERLAY DURING FLIP */}
              <motion.div
                animate={{
                  opacity: idx === currentPageIndex ? 0 : idx < currentPageIndex ? 0.35 : 0,
                }}
                transition={{ duration: 0.95 }}
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-purple-950/20 to-transparent"
                style={{ backfaceVisibility: 'hidden' }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* MINIMAL DIGITAL BOOK PROGRESS INDICATOR & CONTROLS */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 glass-panel px-4 py-2 rounded-full border border-purple-500/30 shadow-2xl backdrop-blur-xl pointer-events-auto">
        <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-slate-300">
          <span className="text-purple-400">{pages[currentPageIndex].num}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">0{totalPages}</span>
        </div>

        {/* Vertical Pagination Dots */}
        <div className="hidden sm:flex items-center gap-1 px-2 border-l border-r border-slate-800">
          {pages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => goToPage(idx)}
              title={`Jump to Page ${p.num}: ${p.title}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentPageIndex
                  ? 'bg-purple-400 scale-125 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                  : 'bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Up / Down Arrow Page Flip Triggers */}
        <div className="flex items-center gap-1">
          <button
            onClick={prevPage}
            disabled={currentPageIndex === 0 || isAnimating}
            className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Previous Page (Up Arrow)"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPageIndex === totalPages - 1 || isAnimating}
            className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Next Page (Down Arrow)"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CURRENT PAGE TITLE HUD FLOATING TAG (BOTTOM LEFT) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 glass-panel px-3.5 py-1.5 rounded-full border border-slate-800/80 text-xs font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-slate-300 font-bold uppercase tracking-wider">
          PAGE {pages[currentPageIndex].num} • {pages[currentPageIndex].title}
        </span>
      </div>
    </div>
  );
}
