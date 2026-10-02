import React, { useEffect, useRef, useState } from 'react';

export default function FuturisticHeroBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Measure actual Hero container dimensions using getBoundingClientRect / offsetWidth
    const updateSize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width || container.offsetWidth || window.innerWidth;
      height = canvas.height = rect.height || container.offsetHeight || window.innerHeight;
    };

    updateSize();

    // ResizeObserver on the Hero container for accurate responsive canvas sizing
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // -------------------------------------------------------------
    // 1. NEBULA ENERGY ORBS CONFIGURATION (Rich & Vibrant Glowing Motion)
    // -------------------------------------------------------------
    const getOrbs = () => [
      {
        xRatio: 0.25,
        yRatio: 0.35,
        radius: Math.max(width, height) * 0.5,
        colorStart: 'rgba(124, 58, 237, 0.35)', // Deep Purple #7C3AED
        colorEnd: 'rgba(5, 8, 22, 0)',
        vx: 0.00015,
        vy: 0.00012,
        phaseX: 0,
        phaseY: 1,
      },
      {
        xRatio: 0.75,
        yRatio: 0.55,
        radius: Math.max(width, height) * 0.55,
        colorStart: 'rgba(79, 70, 229, 0.32)', // Deep Indigo #4F46E5
        colorEnd: 'rgba(5, 8, 22, 0)',
        vx: 0.00011,
        vy: 0.00018,
        phaseX: 2,
        phaseY: 0.5,
      },
      {
        xRatio: 0.5,
        yRatio: 0.75,
        radius: Math.max(width, height) * 0.45,
        colorStart: 'rgba(139, 92, 246, 0.28)', // Electric Violet #8B5CF6
        colorEnd: 'rgba(5, 8, 22, 0)',
        vx: 0.00018,
        vy: 0.0001,
        phaseX: 1.5,
        phaseY: 2.2,
      },
      {
        xRatio: 0.85,
        yRatio: 0.25,
        radius: Math.max(width, height) * 0.38,
        colorStart: 'rgba(34, 211, 238, 0.18)', // Cyan Highlight #22D3EE
        colorEnd: 'rgba(5, 8, 22, 0)',
        vx: 0.00013,
        vy: 0.00015,
        phaseX: 3.1,
        phaseY: 0.8,
      },
    ];

    let orbs = getOrbs();

    // Re-initialize orb radii when dimensions update
    const reinitOrbs = () => {
      orbs = getOrbs();
    };

    // -------------------------------------------------------------
    // 2. AMBIENT COSMIC DUST PARTICLES
    // -------------------------------------------------------------
    const getDustCount = () => (width < 768 ? 25 : 55);
    const createDust = () =>
      Array.from({ length: getDustCount() }, () => ({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        size: Math.random() * 2.0 + 0.8,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.018 + 0.006,
        pulsePhase: Math.random() * Math.PI * 2,
        vy: Math.random() * -0.2 - 0.08,
        vx: (Math.random() - 0.5) * 0.12,
      }));

    let dustParticles = createDust();

    // -------------------------------------------------------------
    // 3. MAIN ANIMATION RENDER LOOP
    // -------------------------------------------------------------
    let time = 0;

    const render = () => {
      time += 1;

      if (width === 0 || height === 0) {
        updateSize();
        reinitOrbs();
      }

      ctx.clearRect(0, 0, width, height);

      // Deep Dark Base Fill
      ctx.fillStyle = '#03050F';
      ctx.fillRect(0, 0, width, height);

      // Render Soft Morphing Nebula Orbs
      ctx.globalCompositeOperation = 'screen';
      orbs.forEach((orb) => {
        const cx =
          width * orb.xRatio + Math.sin(time * orb.vx + orb.phaseX) * (width * 0.15);
        const cy =
          height * orb.yRatio + Math.cos(time * orb.vy + orb.phaseY) * (height * 0.15);

        const gradient = ctx.createRadialGradient(
          cx,
          cy,
          0,
          cx,
          cy,
          orb.radius
        );
        gradient.addColorStop(0, orb.colorStart);
        gradient.addColorStop(0.5, orb.colorStart.replace(/[\d\.]+\)$/, '0.08)'));
        gradient.addColorStop(1, orb.colorEnd);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Subtle Organic Flowing Energy Waves
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineWidth = 1.5;
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        const waveOffset = w * 140 + time * 0.25;
        const waveAlpha = 0.08 + Math.sin(time * 0.012 + w) * 0.04;
        ctx.strokeStyle = `rgba(139, 92, 246, ${waveAlpha})`;

        for (let x = 0; x <= width + 20; x += 15) {
          const y =
            height * (0.3 + w * 0.15) +
            Math.sin((x + waveOffset) * 0.003) * 40 +
            Math.cos((x - waveOffset * 0.5) * 0.002) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Render Ambient Cosmic Dust Particles
      ctx.globalCompositeOperation = 'source-over';
      dustParticles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.pulsePhase += p.pulseSpeed;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity =
          p.opacity * (0.6 + 0.4 * Math.sin(p.pulsePhase));

        ctx.fillStyle = `rgba(196, 181, 253, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#03050F] via-[#070B1F] to-[#140A32] pointer-events-none z-[1]" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]"
    >
      {/* Native Canvas Rendering Futuristic Digital Atmosphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Radial Dark Masking Overlay for 100% Text & Hero Content Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,25,0.25),rgba(5,8,22,0.85)_82%)]" />

      {/* Top & Bottom Seamless Edge Blending Vignette Gradients */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050816] via-[#050816]/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050816] via-[#050816]/75 to-transparent" />
    </div>
  );
}
