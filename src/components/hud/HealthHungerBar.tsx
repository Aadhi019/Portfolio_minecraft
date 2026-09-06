import React, { useState, useEffect } from 'react';
import { PixelIcon } from '../ui/PixelIcon';
import { soundManager } from '../../utils/soundEffects';

interface XpEvent {
  id: number;
  text: string;
  isLevelUp?: boolean;
}

interface HealthHungerBarProps {
  level: number; // Controlled by App: Level 29, leveling up to 30 upon reaching The End
  xpProgress: number; // 95% -> 100%
  triggerLevelUp?: boolean; // Fires when arriving at The End
}

const NOTCHES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170];

export const HealthHungerBar: React.FC<HealthHungerBarProps> = ({
  level = 29,
  xpProgress = 95,
  triggerLevelUp = false,
}) => {
  const [heartShake, setHeartShake] = useState<boolean>(false);
  const [foodBounce, setFoodBounce] = useState<boolean>(false);
  const [levelUpFlash, setLevelUpFlash] = useState<boolean>(false);
  const [xpEvents, setXpEvents] = useState<XpEvent[]>([]);

  // Trigger Grand Level-Up specifically when arriving at The End
  useEffect(() => {
    if (triggerLevelUp) {
      soundManager.playLevelUp();
      setLevelUpFlash(true);
      setTimeout(() => setLevelUpFlash(false), 2000);

      const levelUpId = Date.now();
      setXpEvents((prev) => [
        ...prev,
        { id: levelUpId, text: '★ LEVEL UP! 30 ★', isLevelUp: true },
      ]);
      setTimeout(() => {
        setXpEvents((prev) => prev.filter((e) => e.id !== levelUpId));
      }, 2500);
    }
  }, [triggerLevelUp]);

  const handleHeartClick = () => {
    soundManager.playHurt();
    setHeartShake(true);
    setTimeout(() => setHeartShake(false), 400);
  };

  const handleFoodClick = () => {
    soundManager.playEat();
    setFoodBounce(true);
    setTimeout(() => setFoodBounce(false), 400);
  };

  // Clicking the XP bar plays the classic chime & spawns a small chime pop, but does NOT prematurely level up
  const handleXpBarClick = () => {
    soundManager.playXpChime();

    const eventId = Date.now() + Math.random();
    const eventText = level >= 30 ? '★ Level 30 Max ★' : '+XP (Reach The End to Level Up!)';
    const newEvent: XpEvent = {
      id: eventId,
      text: eventText,
      isLevelUp: false,
    };

    setXpEvents((prev) => [...prev.slice(-2), newEvent]);
    setTimeout(() => {
      setXpEvents((prev) => prev.filter((e) => e.id !== eventId));
    }, 1400);
  };

  // Calculate pixel fill width for 182-unit SVG (1 to 180 width inside borders)
  const filledWidth = Math.min(180, Math.max(0, Math.round((xpProgress / 100) * 180)));

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center select-none relative">
      {/* Floating Level Up / XP Chime Badges */}
      <div className="absolute -top-7 pointer-events-none flex flex-col items-center space-y-1 z-30">
        {xpEvents.map((evt) => (
          <div
            key={evt.id}
            className={`font-pixel text-[11px] sm:text-xs px-2.5 py-0.5 rounded shadow-lg border animate-xp-float flex items-center space-x-1.5 ${
              evt.isLevelUp
                ? 'bg-amber-400/95 text-black border-amber-300 font-bold scale-110 shadow-[0_0_16px_rgba(251,191,36,0.9)]'
                : 'bg-black/90 text-[#80ff20] border-[#80ff20]/60 shadow-[0_0_8px_rgba(128,255,32,0.4)]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${evt.isLevelUp ? 'bg-amber-800' : 'bg-[#80ff20]'} animate-ping`} />
            <span>{evt.text}</span>
          </div>
        ))}
      </div>

      {/* Main Row: Classic Red Hearts (Left) & Roast Drumsticks (Right) */}
      <div className="w-full flex justify-between items-center px-1 mb-1.5">
        {/* 10 Classic Red Hearts */}
        <div
          onClick={handleHeartClick}
          className={`flex items-center space-x-1 cursor-pointer transition-transform duration-100 ${
            heartShake ? 'animate-bounce' : 'hover:scale-[1.03]'
          }`}
          title="Health: 20/20 HP (Click for Hurt SFX)"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`heart-${i}`}
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter transition-all hover:scale-125"
            >
              <PixelIcon name="heart" size={18} />
            </div>
          ))}
        </div>

        {/* 10 Roast Chicken Drumsticks (Hunger Bar) */}
        <div
          onClick={handleFoodClick}
          className={`flex items-center space-x-1 cursor-pointer transition-transform duration-100 ${
            foodBounce ? 'animate-bounce' : 'hover:scale-[1.03]'
          }`}
          title="Hunger: 20/20 Roast Drumsticks (Click to Eat)"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`hunger-${i}`}
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter transition-all hover:scale-125 hover:-translate-y-0.5"
            >
              <PixelIcon name="hunger" size={18} />
            </div>
          ))}
        </div>
      </div>

      {/* Authentic Minecraft Dynamic XP Bar & Level Number */}
      <div 
        onClick={handleXpBarClick}
        className="w-full flex flex-col items-center cursor-pointer group px-0.5"
        title={
          level >= 30
            ? 'Level 30 (Max Enchant Level Achieved at The End!)'
            : `Level ${level} — Journey to The End [Slot 9] to Level Up to 30!`
        }
      >
        {/* Dynamic Level Number */}
        <div 
          className={`font-pixel text-xs sm:text-sm font-bold tracking-wider mb-0.5 leading-none select-none transition-all duration-300 [text-shadow:1px_0_0_#000,-1px_0_0_#000,0_1px_0_#000,0_-1px_0_#000,1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,0_2px_0_#000] ${
            levelUpFlash 
              ? 'text-amber-300 scale-140 drop-shadow-[0_0_14px_#f59e0b]' 
              : 'text-[#80ff20] group-hover:scale-110'
          }`}
        >
          {level}
        </div>

        {/* Authentic Minecraft 182x5 Pixel XP Bar with Smooth Dynamic Fill */}
        <svg
          viewBox="0 0 182 5"
          className="w-full h-2 sm:h-2.5 [image-rendering:pixelated] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]"
          preserveAspectRatio="none"
          shapeRendering="crispEdges"
        >
          {/* Black Base Frame */}
          <rect x="0" y="0" width="182" height="5" fill="#000000" />

          {/* Empty Background (Dark Olive / Forest) */}
          <rect x="1" y="1" width="180" height="1" fill="#303c2b" />
          <rect x="1" y="2" width="180" height="1" fill="#202a1d" />
          <rect x="1" y="3" width="180" height="1" fill="#141d11" />

          {/* Filled Progress (Authentic Minecraft Lime Highlight, Mid, Shadow) with smooth animated transition */}
          {filledWidth > 0 && (
            <g className="animate-xp-shimmer">
              <rect 
                x="1" 
                y="1" 
                width={filledWidth} 
                height="1" 
                fill="#a4f83b" 
                style={{ transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
              />
              <rect 
                x="1" 
                y="2" 
                width={filledWidth} 
                height="1" 
                fill="#75d81f" 
                style={{ transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
              />
              <rect 
                x="1" 
                y="3" 
                width={filledWidth} 
                height="1" 
                fill="#3d8212" 
                style={{ transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
              />
            </g>
          )}

          {/* 17 Notch Dividers (1px width every 10px across the bar) */}
          {NOTCHES.map((x) => (
            <rect key={x} x={x} y="1" width="1" height="3" fill="#0c1409" />
          ))}

          {/* Black Outer Border */}
          <rect x="0" y="0" width="182" height="1" fill="#000000" />
          <rect x="0" y="4" width="182" height="1" fill="#000000" />
          <rect x="0" y="0" width="1" height="5" fill="#000000" />
          <rect x="181" y="0" width="1" height="5" fill="#000000" />
        </svg>
      </div>
    </div>
  );
};
