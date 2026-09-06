import React, { useEffect, useRef, useState } from 'react';
import type { Particle } from '../../utils/particles';
import { createBiomeParticles } from '../../utils/particles';

import overworldBg from '../../assets/overworld.png';
import profileBg from '../../assets/player profile.png';
import enchantmentBg from '../../assets/Enchantment room.png';
import mineshaftBg from '../../assets/Mineshaft.png';
import snowyPeaksBg from '../../assets/Snowy peaks.png';
import deepDarkBg from '../../assets/deep dark.png';
import villageBg from '../../assets/village.png';
import lushCaveBg from '../../assets/Lush cave.png';
import endBg from '../../assets/end.png';

interface WorldSceneProps {
  currentBiome: string;
}

export const WorldScene: React.FC<WorldSceneProps> = ({ currentBiome }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Map biome name to image file
  const getBiomeImage = (biome: string): string => {
    switch (biome) {
      case 'The End':
        return endBg;
      case 'Village':
        return villageBg;
      case 'Lush Caves':
        return lushCaveBg;
      case 'Snowy Peaks':
        return snowyPeaksBg;
      case 'Deep Dark':
        return deepDarkBg;
      case 'Enchanting Table':
        return enchantmentBg;
      case 'Mineshaft':
        return mineshaftBg;
      case 'Player Profile':
        return profileBg;
      case 'Overworld':
      default:
        return overworldBg;
    }
  };

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ambient Canvas Particle Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = createBiomeParticles(currentBiome, canvas.width, canvas.height, 45);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha += p.fadeSpeed;

        if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        // Wrap around bounds
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'rune') {
          // Pixel cross/glyph
          ctx.fillRect(p.x - p.size / 2, p.y - 1, p.size, 2);
          ctx.fillRect(p.x - 1, p.y - p.size / 2, 2, p.size);
        } else {
          // Square pixel particle
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [currentBiome]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Dynamic Background Image with subtle parallax */}
      <div
        className="absolute inset-[-20px] bg-cover bg-center transition-all duration-700 ease-out filter"
        style={{
          backgroundImage: `url(${getBiomeImage(currentBiome)})`,
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(1.03)`,
        }}
      />

      {/* Atmospheric dark vignette / gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/70 pointer-events-none" />

      {/* Canvas Particle Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-80"
      />
    </div>
  );
};
