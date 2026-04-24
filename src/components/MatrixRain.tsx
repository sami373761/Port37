'use client';

import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const colorRef = useRef<string>('#00ff41');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 16;
    const chars = ['0', '1'];
    let columns = 0;
    let drops: number[] = [];

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Only re-initialize if dimensions actually changed significantly
      if (Math.abs(canvas.width - width) > 1 || Math.abs(canvas.height - height) > 1) {
        canvas.width = width;
        canvas.height = height;

        const newColumns = Math.floor(width / fontSize);
        const newDrops = [];
        for (let i = 0; i < newColumns; i++) {
          newDrops[i] = Math.random() * -height / fontSize;
        }
        columns = newColumns;
        drops = newDrops;
      }
    };

    // Initial sizing
    updateDimensions();

    // Use ResizeObserver for ongoing changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Failsafe: Check dimensions again after 500ms and 1500ms 
    // (helps with late layout shifts in Next.js/Flexbox)
    const t1 = setTimeout(updateDimensions, 500);
    const t2 = setTimeout(updateDimensions, 1500);

    const draw = () => {
      if (canvas.width === 0 || canvas.height === 0) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      // Semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color
      ctx.fillStyle = colorRef.current;
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop once it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    // Sync color with CSS
    const updateColor = () => {
      if (typeof window !== 'undefined') {
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
        if (accentColor) colorRef.current = accentColor;
      }
    };
    updateColor();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none',
        opacity: 0.5, // Even more visible
        zIndex: 1,
        display: 'block', // Ensure it's not hidden
      }} 
    />
  );
};

export default MatrixRain;
