import React, { useEffect, useRef } from 'react';

export default function FallingStarsBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count calculation
    const getParticleCount = (w) => {
      if (w < 640) return 22;  // Mobile
      if (w < 1024) return 40; // Tablet
      return 65;               // Desktop
    };

    const colors = ['#FFFFFF', '#DDE4FF', '#C7D8FF'];

    // Helper: Draw 4-point star
    const drawStar4 = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    // Helper: Draw 6-point crystalline snowflake
    const drawSnowflake6 = (ctx, cx, cy, size) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI) / 3;
        const x1 = cx + Math.cos(angle) * size;
        const y1 = cy + Math.sin(angle) * size;
        const x2 = cx - Math.cos(angle) * size;
        const y2 = cy - Math.sin(angle) * size;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();
    };

    // Particle Data Generator
    let particles = [];

    const initParticles = () => {
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

      const count = getParticleCount(width);
      particles = [];

      for (let i = 0; i < count; i++) {
        // Types: 'dot' (50%), 'star4' (25%), 'snowflake' (15%), 'glow' (10%)
        const randType = Math.random();
        let type = 'dot';
        if (randType > 0.85) type = 'glow';
        else if (randType > 0.70) type = 'snowflake';
        else if (randType > 0.45) type = 'star4';

        const size = type === 'dot' ? Math.random() * 1.2 + 0.8 :
                     type === 'star4' ? Math.random() * 2 + 1.8 :
                     type === 'snowflake' ? Math.random() * 2.5 + 2.0 :
                     Math.random() * 3 + 2.5;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          type,
          size,
          speedY: Math.random() * 0.4 + 0.25, // Slow falling speed
          driftAmp: Math.random() * 0.4 + 0.1, // Horizontal sway
          driftSpeed: Math.random() * 0.015 + 0.005,
          driftPhase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.012,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseOpacity: Math.random() * 0.35 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initParticles();

    // Mouse Movement listener for subtle parallax
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = e.clientX - rect.left - rect.width / 2;
      const relativeY = e.clientY - rect.top - rect.height / 2;
      mouseRef.current.targetX = (relativeX / rect.width) * 12; // Max 12px shift
      mouseRef.current.targetY = (relativeY / rect.height) * 12;
    };

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let time = 0;

    // Main Canvas Render Loop
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const px = mouseRef.current.x;
      const py = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Falling movement
          p.y += p.speedY;
          // Horizontal sway
          p.x += Math.sin(time * p.driftSpeed + p.driftPhase) * p.driftAmp;
          // Rotation
          p.rotation += p.rotationSpeed;

          // Respawn at top if fallen past bottom
          if (p.y > height + 15) {
            p.y = -15;
            p.x = Math.random() * width;
          }
        }

        // Twinkle calculation
        const opacity = Math.min(
          0.7,
          Math.max(0.12, p.baseOpacity + Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.18)
        );

        ctx.save();
        ctx.translate(p.x + px * (p.size / 4), p.y + py * (p.size / 4));
        ctx.rotate(p.rotation);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 0.8;

        if (p.type === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star4') {
          drawStar4(ctx, 0, 0, 4, p.size, p.size * 0.35);
        } else if (p.type === 'snowflake') {
          drawSnowflake6(ctx, 0, 0, p.size);
        } else if (p.type === 'glow') {
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 1.8);
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
    />
  );
}
