import React, { useState } from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { skillsData } from '../../data/skills';
import { educationData } from '../../data/education';
import { achievementsData } from '../../data/achievements';
import { certificationsData } from '../../data/certifications';
import { contactData } from '../../data/socials';
import { soundManager } from '../../utils/soundEffects';
import { GithubIcon } from '../ui/BrandIcons';

interface RecruiterModalProps {
  onClose: () => void;
  onNavigateSlot: (slotId: number) => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ onClose, onNavigateSlot }) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'PROJECTS' | 'SKILLS' | 'EDUCATION' | 'ACHIEVEMENTS'>('OVERVIEW');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-zinc-900 border-2 border-zinc-700 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-start justify-between bg-zinc-950/70">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>PROFESSIONAL DEVELOPER DOSSIER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans-clean">
              {profileData.name}
            </h2>
            <p className="text-zinc-400 text-sm font-sans-clean">
              {profileData.role} • {profileData.specialization}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-2 font-sans-clean">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{contactData.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${contactData.email}`} className="hover:text-white underline">
                  {contactData.email}
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${contactData.phoneRaw}`} className="hover:text-white">
                  {contactData.phone}
                </a>
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded cursor-pointer transition-colors"
            title="Return to Game World (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-zinc-800 bg-zinc-950 px-4">
          {(['OVERVIEW', 'PROJECTS', 'SKILLS', 'EDUCATION', 'ACHIEVEMENTS'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                soundManager.playPop();
                setActiveTab(tab);
              }}
              className={`px-4 py-3 text-xs font-semibold cursor-pointer transition-all border-b-2 font-sans-clean ${
                activeTab === tab
                  ? 'border-emerald-400 text-emerald-400 bg-zinc-900/50'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 font-sans-clean">
          {/* TAB: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Executive Summary
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded border border-zinc-800">
                  {profileData.bio}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                  Key Strengths
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded">
                    <div className="text-emerald-400 font-semibold text-sm mb-1">
                      Multi-Agent AI Engineering
                    </div>
                    <div className="text-xs text-zinc-400">
                      Orchestration with LangGraph, state graphs, persistent memory, and Google Workspace integrations.
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded">
                    <div className="text-cyan-400 font-semibold text-sm mb-1">
                      Embedded IoT & Real-Time Telemetry
                    </div>
                    <div className="text-xs text-zinc-400">
                      ESP32 firmware in C++, MPU6050 6-axis IMU kinematic algorithms, and 10 Hz WebSocket pipelines.
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded">
                    <div className="text-purple-400 font-semibold text-sm mb-1">
                      Modern Full-Stack Development
                    </div>
                    <div className="text-xs text-zinc-400">
                      React, Vite, Node.js, Python, Tailwind CSS, high-performance responsive UI architectures.
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-zinc-800 rounded">
                    <div className="text-amber-400 font-semibold text-sm mb-1">
                      Competitive Algorithmic Problem Solving
                    </div>
                    <div className="text-xs text-zinc-400">
                      1000+ problems cleared on Skill Rack, 150+ solved on LeetCode, HackerRank Bronze in C.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    soundManager.playChestOpen();
                    onNavigateSlot(4);
                    onClose();
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded cursor-pointer transition-colors"
                >
                  Explore Projects in Game World
                </button>
                <button
                  onClick={() => {
                    soundManager.playPop();
                    onNavigateSlot(8);
                    onClose();
                  }}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded cursor-pointer transition-colors"
                >
                  Go to Contact Form
                </button>
              </div>
            </div>
          )}

          {/* TAB: PROJECTS */}
          {activeTab === 'PROJECTS' && (
            <div className="space-y-6">
              {projectsData.map((p) => (
                <div key={p.id} className="p-4 bg-zinc-950 border border-zinc-800 rounded">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wide">
                        {p.type}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {p.title} — <span className="text-zinc-400 font-normal">{p.subtitle}</span>
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-300"
                        title="GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-3 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mb-3">
                    <div className="text-xs font-semibold text-zinc-400 mb-1">Architecture:</div>
                    <div className="text-xs text-zinc-300 bg-zinc-900 p-2 rounded">
                      {p.architecture.flow.map((f, i) => (
                        <span key={f.title}>
                          {i > 0 && " → "}
                          <span className="text-white font-medium">{f.title}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] bg-zinc-900 border border-zinc-700 rounded text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: SKILLS */}
          {activeTab === 'SKILLS' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skillsData.map((s) => (
                  <div key={s.id} className="p-3 bg-zinc-950 border border-zinc-800 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-white text-xs">{s.name}</span>
                      <span className="text-[10px] font-pixel text-purple-400">Tier {s.level}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 mb-1">{s.classification}</div>
                    <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">
                      {s.tooltipText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: EDUCATION */}
          {activeTab === 'EDUCATION' && (
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 bg-zinc-950 border border-zinc-800 rounded">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                      <p className="text-xs text-zinc-400">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400">{edu.period}</span>
                      <div className="text-xs font-bold text-emerald-400">{edu.score}</div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB: ACHIEVEMENTS */}
          {activeTab === 'ACHIEVEMENTS' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-400 uppercase">Hackathons & Milestones</h4>
                {achievementsData.map((ach) => (
                  <div key={ach.id} className="p-3 bg-zinc-950 border border-zinc-800 rounded flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-white">{ach.title}</div>
                      <div className="text-xs text-emerald-400">{ach.subtitle}</div>
                      <p className="text-xs text-zinc-400 mt-1">{ach.description}</p>
                    </div>
                    <span className="text-xs text-zinc-500 shrink-0 font-pixel">{ach.year}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase">Certifications</h4>
                {certificationsData.map((c) => (
                  <div key={c.id} className="p-3 bg-zinc-950 border border-zinc-800 rounded flex justify-between items-start">
                    <div>
                      <div className="text-sm font-semibold text-white">{c.title}</div>
                      <div className="text-xs text-cyan-400">{c.issuer}</div>
                      <p className="text-xs text-zinc-400 mt-1">{c.description}</p>
                    </div>
                    <span className="text-xs text-zinc-500 shrink-0 font-pixel">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
          <div>
            Bala Aadhityaa K • Portfolio Dossier
          </div>
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded cursor-pointer font-sans-clean font-medium"
          >
            Resume Exploring Game World
          </button>
        </div>
      </div>
    </div>
  );
};
