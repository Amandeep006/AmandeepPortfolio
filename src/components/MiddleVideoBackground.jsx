import React, { useState, useEffect, useRef } from 'react';

export default function MiddleVideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      {!reducedMotion && !videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setVideoError(true)}
          className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none opacity-100"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
