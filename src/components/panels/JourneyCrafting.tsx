import React, { useState } from 'react';
import type { EducationMilestone } from '../../data/education';
import { educationData } from '../../data/education';
import { PixelIcon } from '../ui/PixelIcon';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export const JourneyCrafting: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 select-none">
      {/* Header */}
      <div className="mc-panel p-4 sm:p-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-zinc-800 border-2 border-zinc-600 rounded flex items-center justify-center shadow-lg">
            <GraduationCap className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-pixel text-cyan-300 mc-text-shadow">
              CRAFTING — THE JOURNEY
            </h2>
            <p className="text-xs text-zinc-400 font-sans-clean">
              Academic progression forged through crafting recipes
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-black/60 border border-zinc-700 px-3 py-1.5 rounded">
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span className="font-pixel text-xs text-zinc-300">3 RECIPES UNLOCKED</span>
        </div>
      </div>

      {/* Crafting Grid Timeline */}
      <div className="space-y-4">
        {educationData.map((item: EducationMilestone) => (
          <div
            key={item.id}
            className="mc-panel p-4 sm:p-5 rounded transition-all duration-150 hover:border-cyan-400/80 group"
          >
            {/* Top Period & Score Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3 mb-4">
              <span className="font-pixel text-xs text-amber-400">
                {item.period}
              </span>
              <div className="flex items-center space-x-2">
                <span className="font-pixel text-[11px] text-zinc-400">
                  {item.scoreType}:
                </span>
                <span className="font-pixel text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded">
                  {item.score}
                </span>
              </div>
            </div>

            {/* Crafting Table Visualization */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Recipe Ingredients */}
              <div className="flex items-center space-x-2 shrink-0">
                {/* Slot 1 */}
                <div
                  onMouseEnter={() => {
                    soundManager.playPop();
                    setActiveTooltip(item.craftingRecipe.slot1.tooltip);
                  }}
                  className="mc-slot w-12 h-12 flex items-center justify-center cursor-pointer group/slot relative"
                  title={item.craftingRecipe.slot1.tooltip}
                >
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span className="absolute bottom-0.5 right-1 text-[9px] font-pixel text-zinc-400">1</span>
                </div>

                <span className="text-zinc-500 font-pixel text-xs">+</span>

                {/* Slot 2 */}
                <div
                  onMouseEnter={() => {
                    soundManager.playPop();
                    setActiveTooltip(item.craftingRecipe.slot2.tooltip);
                  }}
                  className="mc-slot w-12 h-12 flex items-center justify-center cursor-pointer group/slot relative"
                  title={item.craftingRecipe.slot2.tooltip}
                >
                  <PixelIcon name="redstone_dust" size={24} />
                  <span className="absolute bottom-0.5 right-1 text-[9px] font-pixel text-zinc-400">1</span>
                </div>

                <span className="text-zinc-500 font-pixel text-xs">+</span>

                {/* Slot 3 */}
                <div
                  onMouseEnter={() => {
                    soundManager.playPop();
                    setActiveTooltip(item.craftingRecipe.slot3.tooltip);
                  }}
                  className="mc-slot w-12 h-12 flex items-center justify-center cursor-pointer group/slot relative"
                  title={item.craftingRecipe.slot3.tooltip}
                >
                  <PixelIcon name="emerald" size={24} />
                  <span className="absolute bottom-0.5 right-1 text-[9px] font-pixel text-zinc-400">1</span>
                </div>

                {/* Crafting Arrow */}
                <div className="px-2">
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
                </div>

                {/* Crafting Result Slot */}
                <div className="mc-slot w-14 h-14 bg-cyan-950/40 border-2 border-cyan-400/80 flex items-center justify-center shadow-lg relative">
                  <GraduationCap className="w-7 h-7 text-cyan-300 animate-pulse" />
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="flex-1">
                <h3 className="font-pixel text-base sm:text-lg text-white group-hover:text-cyan-200">
                  {item.degree}
                </h3>
                <div className="text-xs font-pixel text-zinc-400 mb-1.5">
                  {item.institution}
                </div>
                <p className="text-xs text-zinc-300 font-sans-clean leading-relaxed mb-2">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px] text-zinc-400 font-sans-clean">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Tooltip Bar */}
      <div className="mt-4 p-3 bg-black/60 border border-zinc-800 rounded text-center text-xs font-pixel text-zinc-400">
        {activeTooltip ? (
          <span className="text-cyan-300">RECIPE INGREDIENT: {activeTooltip}</span>
        ) : (
          <span>Hover over recipe ingredient slots to inspect academic requirements</span>
        )}
      </div>
    </div>
  );
};
