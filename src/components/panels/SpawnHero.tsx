import React from 'react';
import { ArrowRight, Compass, Shield, Terminal, Zap } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

interface SpawnHeroProps {
  onEnterWorld: () => void;
  onViewBuilds: () => void;
}

export const SpawnHero: React.FC<SpawnHeroProps> = ({ onEnterWorld, onViewBuilds }) => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 py-8 my-auto select-none">
      {/* World Seed / Subtitle pill */}
      <div className="inline-flex items-center space-x-2 bg-black/60 border border-emerald-500/40 px-3 py-1 rounded mb-4 backdrop-blur-sm shadow-lg animate-mc-pulse">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-pixel text-[11px] text-emerald-400 tracking-wider">
          WORLD SEED: BALA-AADHITYAA-CSBS
        </span>
      </div>

      {/* Main Name & Title */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-pixel text-white mc-text-shadow tracking-wide leading-tight mb-2">
        BALA AADHITYAA K
      </h1>

      <div className="text-base sm:text-xl md:text-2xl font-pixel text-cyan-300 mc-glow-cyan tracking-wider mb-4">
        AI / FULL-STACK DEVELOPER
      </div>

      {/* Taglines */}
      <p className="max-w-2xl text-zinc-200 text-sm sm:text-base font-sans-clean font-medium leading-relaxed mb-2 drop-shadow-md">
        "Building intelligent systems, real-world applications and connected experiences."
      </p>
      
      <p className="text-xs sm:text-sm text-zinc-400 font-pixel tracking-wide mb-8">
        — Code. Build. Experiment. Repeat. —
      </p>

      {/* Key Quick Stats Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mb-8">
        <div className="mc-panel p-2.5 flex items-center space-x-2.5">
          <Terminal className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="text-left">
            <div className="font-pixel text-xs text-white">1000+</div>
            <div className="text-[10px] text-zinc-400 font-sans-clean">Skill Rack Solved</div>
          </div>
        </div>

        <div className="mc-panel p-2.5 flex items-center space-x-2.5">
          <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
          <div className="text-left">
            <div className="font-pixel text-xs text-white">LangGraph</div>
            <div className="text-[10px] text-zinc-400 font-sans-clean">AI Agent Flows</div>
          </div>
        </div>

        <div className="mc-panel p-2.5 flex items-center space-x-2.5">
          <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-left">
            <div className="font-pixel text-xs text-white">ESP32 IoT</div>
            <div className="text-[10px] text-zinc-400 font-sans-clean">Real-Time IMU</div>
          </div>
        </div>

        <div className="mc-panel p-2.5 flex items-center space-x-2.5">
          <Compass className="w-5 h-5 text-purple-400 shrink-0" />
          <div className="text-left">
            <div className="font-pixel text-xs text-white">7.08%</div>
            <div className="text-[10px] text-zinc-400 font-sans-clean">B.Tech CSBS</div>
          </div>
        </div>
      </div>

      {/* Action Game Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button
          onClick={() => {
            soundManager.playPop();
            onEnterWorld();
          }}
          className="mc-button mc-button-green w-full sm:w-auto px-6 py-3 text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-xl transform active:scale-95"
        >
          <span>ENTER WORLD</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            soundManager.playChestOpen();
            onViewBuilds();
          }}
          className="mc-button mc-button-cyan w-full sm:w-auto px-6 py-3 text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-xl transform active:scale-95"
        >
          <span>VIEW BUILDS</span>
          <span className="text-cyan-200">[HOTBAR 4]</span>
        </button>
      </div>
    </div>
  );
};
