import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { Shield, Sparkles, MapPin, Award, Terminal, Cpu } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';
import playerHeadImg from '../../assets/player_head.png';

export const PlayerProfile: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 select-none">
      {/* Panel Header */}
      <div className="mc-panel p-4 sm:p-6 mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex items-center space-x-4">
            {/* Avatar Head / Model Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 border-2 border-zinc-700 rounded-xs flex items-center justify-center relative overflow-hidden shadow-inner shrink-0 p-1">
              <img
                src={playerHeadImg}
                alt={profileData.name}
                className="w-full h-full object-contain rounded-[2px] [image-rendering:pixelated]"
              />
              <span className="absolute bottom-0 right-0 bg-emerald-700 text-white font-pixel text-[9px] px-1">
                Lv.30
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow">
                  {profileData.name}
                </h2>
              </div>
              <p className="text-cyan-400 font-pixel text-xs sm:text-sm mt-0.5">
                CLASS: {profileData.role}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1 font-sans-clean">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{profileData.location}</span>
                </span>
                <span>•</span>
                <span className="text-amber-300 font-medium">SPECIALIZATION: {profileData.specialization}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-zinc-900/80 border border-zinc-700 px-3 py-1.5 rounded">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="font-pixel text-xs text-zinc-300">TITLE: BUILDER</span>
          </div>
        </div>

        {/* Bio description */}
        <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans-clean leading-relaxed italic bg-zinc-950/50 p-3 rounded border border-zinc-800/80">
          "{profileData.bio}"
        </p>
      </div>

      {/* Two Column Layout: Developer Combat Stats & Gear / Equipment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column: Combat / Dev Stats */}
        <div className="mc-panel p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
            <h3 className="font-pixel text-sm sm:text-base text-emerald-400 flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>DEVELOPER STATS</span>
            </h3>
            <span className="font-pixel text-[10px] text-zinc-500">EXPERTISE LEVEL</span>
          </div>

          <div className="space-y-3.5">
            {profileData.combatStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-pixel">
                  <span className="text-zinc-200">{stat.label}</span>
                  <span className="text-emerald-400 font-bold">{stat.value} / {stat.max}</span>
                </div>
                {/* Minecraft Styled Progress Bar */}
                <div className="w-full h-3 bg-zinc-950 border border-zinc-700 p-0.5 rounded-xs">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500 shadow-sm"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stat Info note */}
          <div className="mt-5 p-2.5 bg-zinc-900/60 border border-zinc-800 rounded text-[11px] text-zinc-400 font-sans-clean flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Scores reflect hands-on project implementations and competitive milestones.</span>
          </div>
        </div>

        {/* Right Column: Player Equipment / Gear Slots */}
        <div className="mc-panel p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
            <h3 className="font-pixel text-sm sm:text-base text-purple-400 flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span>EQUIPMENT & LOADOUT</span>
            </h3>
            <span className="font-pixel text-[10px] text-zinc-500">CLICK TO INSPECT</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {profileData.equipment.map((item, idx) => {
              const isSelected = selectedEquipment === idx;
              return (
                <button
                  key={item.slot}
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedEquipment(isSelected ? null : idx);
                  }}
                  className={`p-2.5 text-left border rounded transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-950/60 border-purple-400 shadow-lg'
                      : 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-850'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-pixel text-[10px] text-zinc-400 uppercase">
                      [{item.slot}]
                    </span>
                    <span className={`text-[9px] font-pixel ${
                      item.rarity === 'Legendary' ? 'text-amber-400' : 'text-purple-400'
                    }`}>
                      {item.rarity}
                    </span>
                  </div>
                  <div className="font-pixel text-xs text-white truncate">
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Item Detail / Tooltip Box */}
          <div className="mt-4 p-3 bg-zinc-950/80 border-2 border-purple-500/40 rounded min-h-[90px] flex flex-col justify-center">
            {selectedEquipment !== null ? (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-pixel text-xs text-purple-300">
                    {profileData.equipment[selectedEquipment].name}
                  </span>
                  <span className="font-pixel text-[10px] text-amber-400">
                    {profileData.equipment[selectedEquipment].rarity} Item
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-sans-clean leading-snug">
                  {profileData.equipment[selectedEquipment].description}
                </p>
              </div>
            ) : (
              <div className="text-center text-zinc-500 font-pixel text-xs flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4 opacity-50" />
                <span>Select an equipment piece to view enchanted traits</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
