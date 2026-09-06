import React, { useEffect } from 'react';
import { PixelIcon } from '../ui/PixelIcon';
import { soundManager } from '../../utils/soundEffects';

export interface HotbarSlot {
  id: number;
  label: string;
  icon: 'grass_block' | 'player_head' | 'enchanted_book' | 'chest' | 'crafting_table' | 'compass' | 'experience_bottle' | 'nether_star' | 'slimeball' | 'emerald' | 'ghast_tear' | 'book_quill' | 'ender_pearl';
  biome: string;
}

export const HOTBAR_SLOTS: HotbarSlot[] = [
  { id: 1, label: 'Spawn', icon: 'grass_block', biome: 'Overworld' },
  { id: 2, label: 'Profile', icon: 'player_head', biome: 'Player Profile' },
  { id: 3, label: 'Skills', icon: 'enchanted_book', biome: 'Enchanting Table' },
  { id: 4, label: 'Projects', icon: 'chest', biome: 'Mineshaft' },
  { id: 5, label: 'Journey', icon: 'crafting_table', biome: 'Snowy Peaks' },
  { id: 6, label: 'Achievements', icon: 'experience_bottle', biome: 'Deep Dark' },
  { id: 7, label: 'Services', icon: 'slimeball', biome: 'Village' },
  { id: 8, label: 'Contact', icon: 'ghast_tear', biome: 'Lush Caves' },
  { id: 9, label: 'The End', icon: 'ender_pearl', biome: 'The End' },
];

interface HotbarProps {
  activeSlot: number;
  onSelectSlot: (slotId: number) => void;
}

export const Hotbar: React.FC<HotbarProps> = ({ activeSlot, onSelectSlot }) => {
  // Keyboard listener for keys 1 to 9
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        soundManager.playHotbarClick();
        onSelectSlot(num);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectSlot]);

  return (
    <nav 
      aria-label="Game Hotbar Navigation"
      className="bg-[#242428]/95 p-1.5 sm:p-2 rounded border-3 border-[#161618] shadow-2xl backdrop-blur-md flex items-center justify-center space-x-1 sm:space-x-1.5 max-w-full overflow-x-auto"
    >
      {HOTBAR_SLOTS.map((slot) => {
        const isActive = activeSlot === slot.id;
        return (
          <button
            key={slot.id}
            onClick={() => {
              soundManager.playHotbarClick();
              onSelectSlot(slot.id);
            }}
            className={`mc-slot w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center relative cursor-pointer group rounded-xs transition-all ${
              isActive ? 'mc-slot-active bg-[#4a4a52]' : ''
            }`}
            title={`[${slot.id}] ${slot.label}`}
          >
            {/* Slot number in top-left */}
            <span className="absolute top-0.5 left-1 text-[9px] sm:text-[10px] text-zinc-400 font-pixel pointer-events-none">
              {slot.id}
            </span>

            {/* Pixel Icon */}
            <div className={`transition-transform duration-150 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
              <PixelIcon name={slot.icon} size={26} />
            </div>

            {/* Tooltip on hover */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/90 border border-zinc-700 px-2 py-0.5 rounded text-[10px] sm:text-xs text-white whitespace-nowrap font-pixel z-50 shadow-md">
              {slot.label}
            </div>
          </button>
        );
      })}
    </nav>
  );
};
