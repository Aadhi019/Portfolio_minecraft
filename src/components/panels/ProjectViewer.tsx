import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ProjectItem } from '../../data/projects';
import { X, ExternalLink, Cpu, Activity, Check, ArrowRight, ShieldAlert, Wifi, Smartphone, BellRing, Database, MessageSquare, Users, Calendar } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';
import { GithubIcon } from '../ui/BrandIcons';

interface ProjectViewerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectViewer: React.FC<ProjectViewerProps> = ({ project, onClose }) => {
  // ESC key listener to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playChestClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const renderArchitectureIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Users': return <Users className="w-4 h-4 text-emerald-400" />;
      case 'Database': return <Database className="w-4 h-4 text-amber-400" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-rose-400" />;
      case 'Activity': return <Activity className="w-4 h-4 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      case 'Wifi': return <Wifi className="w-4 h-4 text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case 'BellRing': return <BellRing className="w-4 h-4 text-red-400" />;
      default: return <Cpu className="w-4 h-4 text-zinc-400" />;
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={() => {
        soundManager.playChestClose();
        onClose();
      }}
    >
      <div 
        className="mc-panel w-full max-w-4xl bg-zinc-950/95 border-3 border-zinc-700 rounded p-4 sm:p-7 shadow-2xl relative max-h-[88vh] overflow-y-auto my-auto"
        style={{ borderColor: project.accentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playChestClose();
            onClose();
          }}
          className="absolute top-4 right-4 mc-button px-2.5 py-1 text-xs cursor-pointer flex items-center space-x-1"
          title="Close (ESC)"
        >
          <X className="w-4 h-4 text-rose-400" />
          <span className="font-pixel text-[10px]">ESC</span>
        </button>

        {/* Header: Title, Subtitle, Type */}
        <div className="border-b border-zinc-800 pb-4 mb-5 pr-16">
          <div className="flex items-center space-x-2 text-xs font-pixel mb-1" style={{ color: project.accentColor }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
            <span>{project.type.toUpperCase()}</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{project.architecture.type}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-pixel text-white mc-text-shadow">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans-clean mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-pixel bg-zinc-900 border border-zinc-700 text-zinc-300 rounded shadow-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-zinc-900/80 border border-rose-950/80 rounded">
            <h4 className="font-pixel text-xs text-rose-400 mb-2 flex items-center space-x-1.5">
              <span>PROBLEM STATEMENT</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans-clean leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 bg-zinc-900/80 border border-emerald-950/80 rounded">
            <h4 className="font-pixel text-xs text-emerald-400 mb-2 flex items-center space-x-1.5">
              <span>ENGINEERING SOLUTION</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans-clean leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="mb-6 p-4 bg-black/60 border border-zinc-800 rounded">
          <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
            <h4 className="font-pixel text-xs text-cyan-400">
              SYSTEM ARCHITECTURE FLOW
            </h4>
            <span className="font-pixel text-[10px] text-zinc-500">
              {project.architecture.type}
            </span>
          </div>

          {/* Interactive Flow Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.architecture.flow.map((node, i) => (
              <div
                key={node.title}
                className="p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-600 transition-colors relative"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <div className="p-1 bg-black/60 rounded border border-zinc-700">
                    {renderArchitectureIcon(node.icon)}
                  </div>
                  <span className="font-pixel text-[11px] text-white">
                    {i + 1}. {node.title}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-sans-clean leading-snug">
                  {node.desc}
                </p>
                {i < project.architecture.flow.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="font-pixel text-xs text-amber-400 mb-3">
            IMPLEMENTED FEATURES ({project.features.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-sans-clean">
            {project.features.map((feat) => (
              <div key={feat} className="flex items-start space-x-2 p-2 bg-zinc-900/50 border border-zinc-800/80 rounded">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playPop()}
            className="mc-button px-4 py-2 text-xs flex items-center space-x-2 cursor-pointer"
          >
            <GithubIcon size={16} />
            <span>VIEW CODE REPOSITORY</span>
          </a>

          <a
            href={project.demoUrl}
            onClick={(e) => {
              if (project.demoUrl === '#') {
                e.preventDefault();
                alert("Demo link currently in staging build.");
              }
              soundManager.playPop();
            }}
            className="mc-button mc-button-cyan px-4 py-2 text-xs flex items-center space-x-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LIVE DEMO / DOCUMENTATION</span>
          </a>

          <span className="text-[10px] text-zinc-500 font-pixel ml-auto">
            PRESS [ESC] TO CLOSE
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};
