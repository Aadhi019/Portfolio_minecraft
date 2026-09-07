import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import type { AchievementItem } from '../../data/achievements';
import { achievementsData } from '../../data/achievements';
import type { CertificationItem } from '../../data/certifications';
import { certificationsData } from '../../data/certifications';
import { codingData } from '../../data/coding';
import { Check, Trophy, Award, ExternalLink, ArrowUpRight, X } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

interface AchievementPanelProps {
  onSendMessage: () => void;
}

export const AchievementPanel: React.FC<AchievementPanelProps> = ({ onSendMessage }) => {
  const [activeTab, setActiveTab] = useState<'ADVANCEMENTS' | 'CERTIFICATIONS' | 'STATS'>('ADVANCEMENTS');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 select-none">
      {/* Panel Header */}
      <div className="mc-panel p-4 sm:p-5 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-cyan-950 border-2 border-cyan-500 rounded flex items-center justify-center shadow-lg">
            <Trophy className="w-5 h-5 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-pixel text-cyan-400 mc-glow-cyan">
              ADVANCEMENTS & TROPHIES
            </h2>
            <p className="text-xs text-zinc-400 font-sans-clean">
              Milestones unlocked across hackathons, coding battles, and certifications
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-1.5 bg-black/60 p-1 rounded border border-zinc-800">
          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('ADVANCEMENTS');
            }}
            className={`px-3 py-1 text-[11px] font-pixel rounded cursor-pointer transition-all ${
              activeTab === 'ADVANCEMENTS'
                ? 'bg-cyan-600 text-white border border-cyan-300 shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            ADVANCEMENTS
          </button>
          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('CERTIFICATIONS');
            }}
            className={`px-3 py-1 text-[11px] font-pixel rounded cursor-pointer transition-all ${
              activeTab === 'CERTIFICATIONS'
                ? 'bg-cyan-600 text-white border border-cyan-300 shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            CERTIFICATES
          </button>
          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('STATS');
            }}
            className={`px-3 py-1 text-[11px] font-pixel rounded cursor-pointer transition-all ${
              activeTab === 'STATS'
                ? 'bg-cyan-600 text-white border border-cyan-300 shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            COMBAT STATS
          </button>
        </div>
      </div>

      {/* TAB 1: ADVANCEMENTS */}
      {activeTab === 'ADVANCEMENTS' && (
        <div className="space-y-3">
          {achievementsData.map((item: AchievementItem) => (
            <div
              key={item.id}
              className="mc-panel-gold p-4 rounded flex items-center justify-between gap-4 transition-all duration-150 hover:border-amber-300 group"
            >
              <div className="flex items-center space-x-3.5">
                {/* Gold Advancement Frame */}
                <div className="w-12 h-12 bg-amber-950/70 border-2 border-amber-400 rounded flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-6 h-6 text-amber-300 group-hover:rotate-6 transition-transform" />
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-pixel text-sm sm:text-base text-white group-hover:text-amber-200">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-pixel text-zinc-400">
                      [{item.year}]
                    </span>
                  </div>
                  <div className="text-xs font-pixel text-amber-400 mt-0.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-zinc-300 font-sans-clean leading-snug mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Green Checkmark Badge */}
              <div className="w-8 h-8 rounded bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-lg">
                <Check className="w-5 h-5 text-emerald-400 stroke-[3]" />
              </div>
            </div>
          ))}

          {/* Action Row */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                soundManager.playPop();
                onSendMessage();
              }}
              className="mc-button mc-button-cyan px-5 py-2 text-xs flex items-center space-x-2 cursor-pointer shadow-lg"
            >
              <span>SEND A MESSAGE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: CERTIFICATIONS */}
      {activeTab === 'CERTIFICATIONS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certificationsData.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              onClick={() => {
                soundManager.playEnchant();
                setSelectedCert(cert);
              }}
              className="mc-panel p-4 rounded cursor-pointer transition-all hover:border-cyan-400 hover:bg-zinc-900/90 group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-pixel text-[10px] text-cyan-400 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded">
                  {cert.issuer} • {cert.year}
                </span>
                <span className="font-pixel text-xs text-amber-400">
                  TIER {cert.enchantmentLevel}
                </span>
              </div>
              <h3 className="font-pixel text-sm sm:text-base text-white group-hover:text-cyan-200 mb-1.5">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-300 font-sans-clean line-clamp-2 leading-relaxed mb-3">
                {cert.description}
              </p>
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-pixel">
                <span className="text-zinc-500">{cert.category}</span>
                <span className="text-cyan-400 group-hover:underline flex items-center space-x-1">
                  <span>Inspect</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: COMBAT STATS */}
      {activeTab === 'STATS' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {codingData.map((code) => (
              <div key={code.platform} className="mc-panel p-4 rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-pixel text-xs text-zinc-400">{code.platform}</span>
                    <span className="font-pixel text-[10px] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800" style={{ color: code.color }}>
                      {code.badge}
                    </span>
                  </div>
                  <div className="text-lg font-pixel text-white mb-1" style={{ color: code.color }}>
                    {code.metric}
                  </div>
                  <p className="text-xs text-zinc-300 font-sans-clean leading-snug mb-3">
                    {code.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="w-full h-2.5 bg-black border border-zinc-700 rounded-xs overflow-hidden mb-2">
                    <div
                      className="h-full transition-all duration-500"
                      style={{ width: `${code.progressPercent}%`, backgroundColor: code.color }}
                    />
                  </div>
                  <a
                    href={code.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playPop()}
                    className="mc-button w-full py-1 text-[10px] flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>VIEW {code.platform}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCert && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="mc-panel max-w-lg w-full p-6 relative rounded border-2 border-cyan-400"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 mc-button px-2 py-1 text-xs cursor-pointer"
            >
              <X className="w-4 h-4 text-rose-400" />
            </button>

            <span className="font-pixel text-xs text-cyan-400 uppercase">
              CERTIFICATE OF COMPLETION
            </span>
            <h3 className="font-pixel text-lg text-white mt-1 mb-2">
              {selectedCert.title}
            </h3>
            <div className="flex items-center space-x-3 text-xs font-pixel text-zinc-400 mb-4">
              <span>ISSUER: {selectedCert.issuer}</span>
              <span>•</span>
              <span>YEAR: {selectedCert.year}</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans-clean leading-relaxed mb-5 bg-zinc-950 p-3 rounded border border-zinc-800">
              {selectedCert.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-pixel">
                Verification status: Verified
              </span>
              <button
                onClick={() => {
                  soundManager.playPop();
                  alert("Credential verification link will open original certificate ledger.");
                }}
                className="mc-button mc-button-cyan px-4 py-1.5 text-xs flex items-center space-x-1 cursor-pointer"
              >
                <span>VERIFY CREDENTIAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
