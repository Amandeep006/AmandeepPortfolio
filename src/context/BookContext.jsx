import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

export const BOOK_PAGES = [
  { id: 'home', title: 'Hero', num: '01' },
  { id: 'about', title: 'About & Stats', num: '02' },
  { id: 'skills', title: 'Skills Keyboard', num: '03' },
  { id: 'workflow', title: 'Analytics Workflow', num: '04' },
  { id: 'projects', title: 'Projects Showcase', num: '05' },
  { id: 'experience', title: 'Experience & Education', num: '06' },
  { id: 'services', title: 'Services', num: '07' },
  { id: 'github', title: 'GitHub & Articles', num: '08' },
  { id: 'contact', title: 'Contact & Footer', num: '09' },
];

const BookContext = createContext(null);

export function BookProvider({ children }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('forward');
  const isAnimatingRef = useRef(false);

  // Helper to trigger page transition safely
  const triggerPageChange = useCallback((targetIndex) => {
    if (isAnimatingRef.current) return false;
    if (targetIndex < 0 || targetIndex >= BOOK_PAGES.length) return false;

    setCurrentPageIndex((prevIndex) => {
      if (prevIndex === targetIndex) return prevIndex;

      isAnimatingRef.current = true;
      setIsAnimating(true);
      setDirection(targetIndex > prevIndex ? 'forward' : 'backward');

      // Release animation lock after ~1000ms transition + cooldown
      setTimeout(() => {
        isAnimatingRef.current = false;
        setIsAnimating(false);
      }, 1050);

      return targetIndex;
    });

    return true;
  }, []);

  const goToPage = useCallback(
    (pageIdOrIndex) => {
      let targetIndex = -1;
      if (typeof pageIdOrIndex === 'number') {
        targetIndex = pageIdOrIndex;
      } else if (typeof pageIdOrIndex === 'string') {
        const cleanId = pageIdOrIndex.replace('#', '');
        // Map anchor targets to pages
        if (cleanId === 'home') targetIndex = 0;
        else if (cleanId === 'about' || cleanId === 'stats') targetIndex = 1;
        else if (cleanId === 'skills') targetIndex = 2;
        else if (cleanId === 'workflow') targetIndex = 3;
        else if (cleanId === 'projects') targetIndex = 4;
        else if (cleanId === 'experience' || cleanId === 'education') targetIndex = 5;
        else if (cleanId === 'services') targetIndex = 6;
        else if (cleanId === 'github' || cleanId === 'blog') targetIndex = 7;
        else if (cleanId === 'contact' || cleanId === 'footer') targetIndex = 8;
      }

      if (targetIndex >= 0 && targetIndex < BOOK_PAGES.length) {
        triggerPageChange(targetIndex);
      }
    },
    [triggerPageChange]
  );

  const nextPage = useCallback(() => {
    setCurrentPageIndex((curr) => {
      if (curr < BOOK_PAGES.length - 1) {
        triggerPageChange(curr + 1);
      }
      return curr;
    });
  }, [triggerPageChange]);

  const prevPage = useCallback(() => {
    setCurrentPageIndex((curr) => {
      if (curr > 0) {
        triggerPageChange(curr - 1);
      }
      return curr;
    });
  }, [triggerPageChange]);

  return (
    <BookContext.Provider
      value={{
        currentPageIndex,
        currentSectionId: BOOK_PAGES[currentPageIndex].id,
        totalPages: BOOK_PAGES.length,
        isAnimating,
        direction,
        goToPage,
        nextPage,
        prevPage,
        pages: BOOK_PAGES,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
}
