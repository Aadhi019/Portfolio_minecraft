import React from 'react';
import { RotateCcw, Compass, Copy, Check, ExternalLink } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

interface EndScreenProps {
  onRespawn: () => void;
  onExploreAgain: () => void;
}

export const EndScreen: React.FC<EndScreenProps> = ({ onRespawn, onExploreAgain }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("balaaadhityaa.k2024lcsbs@sece.ac.in");
    soundManager.playPop();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4 py-8 select-none">
      {/* Small Eyebrow Header matching screenshot */}
      <div className="font-pixel text-xs sm:text-sm text-purple-300 tracking-[0.25em] uppercase mb-2 mc-glow-purple">
        THANKS FOR PLAYING
      </div>

      {/* The End Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-pixel text-white mc-text-shadow tracking-wide mb-6">
        The End
      </h1>

      {/* Dramatic end quote matching screenshot */}
      <div className="space-y-2 max-w-lg mb-8 text-zinc-300 font-pixel text-xs sm:text-sm leading-relaxed mc-text-shadow">
        <p>You reached the end of the world.</p>
        <p className="text-purple-200">But every world has another seed.</p>
        <p className="text-white font-bold">Go build something nobody expects.</p>
      </div>

      {/* Respawn Button matching screenshot */}
      <div className="space-y-3 w-full max-w-xs mb-6">
        <button
          onClick={() => {
            soundManager.playPortal();
            onRespawn();
          }}
          className="mc-button w-full py-3 text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-2xl hover:border-purple-400"
        >
          <RotateCcw className="w-4 h-4 text-purple-300" />
          <span>Respawn</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onExploreAgain();
          }}
          className="mc-button mc-button-cyan w-full py-2.5 text-xs flex items-center justify-center space-x-2 cursor-pointer shadow-xl"
        >
          <Compass className="w-4 h-4" />
          <span>Explore Projects</span>
        </button>
      </div>

      {/* Secondary Fast Action: Copy Email / LinkedIn */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={handleCopyEmail}
          className="px-3 py-1.5 bg-black/60 border border-zinc-700 hover:border-zinc-500 rounded text-xs font-pixel text-zinc-300 flex items-center space-x-1.5 cursor-pointer backdrop-blur-sm"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">EMAIL COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>COPY EMAIL</span>
            </>
          )}
        </button>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playPop()}
          className="px-3 py-1.5 bg-black/60 border border-zinc-700 hover:border-zinc-500 rounded text-xs font-pixel text-zinc-300 flex items-center space-x-1.5 cursor-pointer backdrop-blur-sm"
        >
          <span>LINKEDIN</span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>
    </div>
  );
};
