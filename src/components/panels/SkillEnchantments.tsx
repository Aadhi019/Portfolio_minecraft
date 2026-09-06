import React, { useState } from 'react';
import type { SkillItem } from '../../data/skills';
import { skillsData } from '../../data/skills';
import { Sparkles, BookOpen, Layers } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export const SkillEnchantments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeTooltipSkill, setActiveTooltipSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Runes' },
    { id: 'AI_ML', label: 'AI / ML' },
    { id: 'PROGRAMMING', label: 'Programming' },
    { id: 'WEB', label: 'Web' },
    { id: 'CORE', label: 'Core' },
    { id: 'DATABASES', label: 'Databases' },
    { id: 'TOOLS', label: 'Tools' },
  ];

  const filteredSkills = selectedCategory === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 select-none">
      {/* Enchantment Table Header */}
      <div className="mc-panel p-4 sm:p-5 mb-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-900/60 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-950/80 border-2 border-purple-500 rounded flex items-center justify-center text-purple-300 shadow-md">
              <BookOpen className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-pixel text-purple-300 mc-glow-purple">
                ENCHANTMENTS
              </h2>
              <p className="text-xs text-zinc-400 font-sans-clean">
                Arcane technical competencies & system enchantments
              </p>
            </div>
          </div>

          {/* XP Requirement Pill */}
          <div className="flex items-center space-x-2 bg-purple-950/60 border border-purple-600/50 px-3 py-1.5 rounded">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="font-pixel text-xs text-fuchsia-300">LAPIS LAZULI INFUSED</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playPop();
                setSelectedCategory(cat.id);
              }}
              className={`px-3 py-1 text-[11px] font-pixel rounded cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-700 text-white border border-purple-400 shadow-lg'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid of Enchanted Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSkills.map((skill) => {
          const isSelected = activeTooltipSkill?.id === skill.id;
          return (
            <div
              key={skill.id}
              onMouseEnter={() => {
                soundManager.playEnchant();
                setActiveTooltipSkill(skill);
              }}
              onClick={() => {
                soundManager.playEnchant();
                setActiveTooltipSkill(skill);
              }}
              className={`mc-panel p-3.5 rounded cursor-pointer transition-all duration-150 relative group ${
                isSelected
                  ? 'border-purple-400 bg-purple-950/70 shadow-xl'
                  : 'border-zinc-800 hover:border-purple-500/70 hover:bg-zinc-900/90'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <span className="font-pixel text-xs text-purple-400 font-bold bg-purple-950/80 border border-purple-800 px-1.5 py-0.5 rounded">
                    {skill.level}
                  </span>
                  <span className="font-pixel text-sm text-white group-hover:text-purple-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-pixel text-amber-400/90">
                  {skill.enchantmentName}
                </span>
              </div>

              {/* Minecraft Power Level Bar */}
              <div className="w-full h-2.5 bg-zinc-950 border border-zinc-700 p-0.5 rounded-xs mb-1.5">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${skill.powerLevel}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-sans-clean">
                <span>{skill.classification}</span>
                <span className="text-zinc-500 text-[10px] font-pixel">Hover to read</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating / Fixed Minecraft Tooltip Inspector */}
      <div className="mt-4 p-4 bg-[#14101e]/95 border-2 border-[#a855f7] rounded shadow-2xl backdrop-blur-md">
        {activeTooltipSkill ? (
          <div>
            <div className="flex items-center justify-between border-b border-purple-900/60 pb-2 mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-pixel text-sm text-purple-300 mc-glow-purple">
                  {activeTooltipSkill.name.toUpperCase()} {activeTooltipSkill.level}
                </span>
                <span className="text-zinc-500 font-pixel text-xs">|</span>
                <span className="text-amber-300 font-pixel text-xs">
                  {activeTooltipSkill.enchantmentName}
                </span>
              </div>
              <span className="text-emerald-400 font-pixel text-[11px]">
                {activeTooltipSkill.classification}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 font-sans-clean leading-relaxed">
              {activeTooltipSkill.tooltipText}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-zinc-500 font-pixel text-xs py-2">
            <Layers className="w-4 h-4 text-purple-400 animate-spin" />
            <span>Hover or tap any skill rune above to reveal arcane project tooltip</span>
          </div>
        )}
      </div>
    </div>
  );
};
