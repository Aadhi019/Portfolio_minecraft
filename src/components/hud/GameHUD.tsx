import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Eye } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

interface GameHUDProps {
  currentBiome: string;
  onOpenRecruiter: () => void;
  dayTime?: string;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  currentBiome,
  onOpenRecruiter,
  isMuted,
  onToggleMute
}) => {
  // Real-time live local clock & real FPS
  const [timeString, setTimeString] = useState<string>(() => {
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    return `${hh}:${mm}`;
  });
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, '0');
      const mm = now.getMinutes().toString().padStart(2, '0');
      setTimeString(`${hh}:${mm}`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    // Dynamic FPS monitor
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, Math.max(30, Math.round((frameCount * 1000) / (now - lastTime)))));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };
    animId = requestAnimationFrame(calcFps);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(animId);
    };
  }, []);

  const getBiomeColor = (biome: string) => {
    switch (biome) {
      case 'The End': return 'text-purple-400';
      case 'Lush Caves': return 'text-emerald-400';
      case 'Snowy Peaks': return 'text-cyan-300';
      case 'Deep Dark': return 'text-cyan-400';
      case 'Village': return 'text-amber-400';
      case 'Enchanting Table': return 'text-fuchsia-400';
      case 'Mineshaft': return 'text-orange-400';
      default: return 'text-emerald-400';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-5 pointer-events-none flex justify-between items-start select-none">
      {/* Top Left Game HUD */}
      <div className="pointer-events-auto bg-black/60 border-2 border-zinc-800/80 p-2 sm:p-3 rounded backdrop-blur-md shadow-xl text-left font-pixel text-xs sm:text-sm text-zinc-300 space-y-1">
        <div className="flex items-center space-x-2 text-white font-bold tracking-wider">
          <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-xs animate-pulse"></span>
          <span>Bala Builds</span>
          <span className="text-zinc-500 font-normal text-[10px] sm:text-xs">v1.0.0</span>
        </div>
        <div className="text-zinc-400 text-[11px] sm:text-xs">
          Biome: <span className={`font-semibold ${getBiomeColor(currentBiome)}`}>{currentBiome}</span>
        </div>
        <div className="flex items-center space-x-3 text-zinc-400 text-[10px] sm:text-xs font-vt tracking-wide">
          <span>Day 1 • {timeString}</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-500">{fps} FPS</span>
        </div>
      </div>

      {/* Top Right Controls HUD */}
      <div className="pointer-events-auto flex items-center space-x-2 sm:space-x-3">
        {/* Recruiter / Fast Overview Button */}
        <button
          onClick={() => {
            soundManager.playPop();
            onOpenRecruiter();
          }}
          className="mc-button px-3 py-1.5 sm:px-4 sm:py-2 text-xs flex items-center space-x-1.5 cursor-pointer shadow-lg hover:border-amber-400"
          title="Recruiter / Quick Overview Mode"
        >
          <Eye className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden md:inline">SKIP EXPLORATION</span>
          <span className="md:hidden">RECRUITER</span>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleMute}
          className="mc-button px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs cursor-pointer flex items-center space-x-1"
          title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
          aria-label="Toggle Sound"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          )}
          <span className="hidden sm:inline text-[11px]">
            {isMuted ? 'MUTED' : 'SFX'}
          </span>
        </button>
      </div>
    </header>
  );
};
