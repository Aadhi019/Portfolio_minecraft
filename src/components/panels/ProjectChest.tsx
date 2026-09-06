import React, { useState } from 'react';
import type { ProjectItem } from '../../data/projects';
import { projectsData } from '../../data/projects';
import { ProjectViewer } from './ProjectViewer';
import { PixelIcon } from '../ui/PixelIcon';
import { Sparkles, ArrowUpRight, Cpu, Eye } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

export const ProjectChest: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 select-none">
      {/* Header Banner */}
      <div className="mc-panel p-4 sm:p-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber-950 border-2 border-amber-600 rounded flex items-center justify-center shadow-lg">
            <PixelIcon name="chest" size={26} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-pixel text-amber-400 mc-text-shadow">
              CHEST — COMPLETED BUILDS
            </h2>
            <p className="text-xs text-zinc-400 font-sans-clean">
              Flagship engineering systems crafted in the forge
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-black/60 border border-zinc-700 px-3 py-1.5 rounded">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-pixel text-xs text-zinc-300">2 LEGENDARY ARTIFACTS</span>
        </div>
      </div>

      {/* Project Cards (Interactive Chest Items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              soundManager.playChestOpen();
              setActiveProject(project);
            }}
            className="mc-panel p-5 rounded cursor-pointer transition-all duration-200 group relative hover:-translate-y-1 hover:shadow-2xl border-2 hover:border-amber-400/90"
            style={{ borderColor: `${project.accentColor}55` }}
          >
            {/* Top Tag & Chest Slot */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="mc-slot w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PixelIcon name={project.id === 'lifeos' ? 'enchanted_book' : 'redstone_dust'} size={28} />
                </div>
                <div>
                  <span className="font-pixel text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800" style={{ color: project.accentColor }}>
                    {project.category}
                  </span>
                  <h3 className="font-pixel text-lg sm:text-xl text-white group-hover:text-amber-200 mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-1.5 bg-zinc-900/80 rounded border border-zinc-700 text-zinc-400 group-hover:text-white group-hover:border-amber-400 transition-colors">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-xs font-pixel text-zinc-400 mb-2">
              {project.subtitle}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 font-sans-clean leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-pixel bg-black/60 border border-zinc-800 text-zinc-400 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Inspect Prompt Button */}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-pixel text-amber-400 group-hover:text-amber-300">
              <span className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>OPEN CHEST INSPECTOR</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Chest Instructions */}
      <div className="mt-5 p-3 bg-black/50 border border-zinc-800/80 rounded text-center font-pixel text-[11px] text-zinc-400">
        TIP: Click any chest above to inspect the complete system architecture, hardware flow, and features.
      </div>

      {/* Detailed Modal Viewer */}
      {activeProject && (
        <ProjectViewer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};
