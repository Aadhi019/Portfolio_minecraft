import React, { useState } from 'react';
import type { VillagerTradeItem } from '../../data/services';
import { servicesData, builderStats } from '../../data/services';
import { PixelIcon } from '../ui/PixelIcon';
import { ArrowRight, Bot, Cpu, Layout, BarChart3, Workflow, MessageSquare, Check, X } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';

interface VillagerTradesProps {
  onMakeOffer: (serviceName?: string) => void;
}

export const VillagerTrades: React.FC<VillagerTradesProps> = ({ onMakeOffer }) => {
  const [selectedTrade, setSelectedTrade] = useState<VillagerTradeItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'ai-apps': return <Bot className="w-5 h-5 text-purple-400" />;
      case 'iot-systems': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'dashboards': return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'automation': return <Workflow className="w-5 h-5 text-rose-400" />;
      default: return <Layout className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 select-none">
      {/* Villager Trading Panel */}
      <div className="mc-panel p-5 sm:p-6 rounded relative border-3 border-zinc-700">
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 mb-4 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow">
              Villager Trades
            </h2>
            <p className="text-xs text-zinc-400 font-sans-clean">
              {builderStats.rank}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-pixel text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2 py-0.5 rounded">
              OPEN FOR FREELANCE & ROLES
            </span>
          </div>
        </div>

        {/* Trades List */}
        <div className="space-y-2.5 mb-5">
          {servicesData.map((trade: VillagerTradeItem) => (
            <div
              key={trade.id}
              onClick={() => {
                soundManager.playVillager();
                setSelectedTrade(trade);
              }}
              className="mc-panel-stone p-3 sm:p-3.5 rounded flex items-center justify-between gap-3 cursor-pointer hover:border-emerald-400 transition-colors group"
            >
              {/* Emerald cost */}
              <div className="flex items-center space-x-2 w-16 sm:w-20 shrink-0">
                <PixelIcon name="emerald" size={20} />
                <span className="font-pixel text-xs sm:text-sm text-emerald-400 font-bold">
                  {trade.emeralds}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </div>

              {/* Service Details */}
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="p-1.5 bg-black/40 rounded border border-zinc-700 shrink-0">
                  {getServiceIcon(trade.id)}
                </div>
                <div className="truncate">
                  <h3 className="font-pixel text-xs sm:text-sm text-white group-hover:text-emerald-300 truncate">
                    {trade.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-sans-clean truncate">
                    {trade.subtitle}
                  </p>
                </div>
              </div>

              {/* Stock Status Pill */}
              <div className="shrink-0">
                <span className={`text-[10px] font-pixel px-2 py-0.5 rounded ${
                  trade.stock === 'In stock'
                    ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800'
                    : 'text-amber-400 bg-amber-950/60 border border-amber-800'
                }`}>
                  {trade.stock}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats and Make an Offer Row matching screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
          {/* Builder Stats Box */}
          <div className="grid grid-cols-3 gap-2 w-full sm:w-auto text-center">
            <div className="bg-black/60 border border-zinc-800 p-2 rounded">
              <div className="font-pixel text-xs sm:text-sm text-white">{builderStats.builds}</div>
              <div className="text-[10px] text-zinc-500 font-pixel">BUILDS</div>
            </div>
            <div className="bg-black/60 border border-zinc-800 p-2 rounded">
              <div className="font-pixel text-xs sm:text-sm text-white">{builderStats.problems}</div>
              <div className="text-[10px] text-zinc-500 font-pixel">PROBLEMS</div>
            </div>
            <div className="bg-black/60 border border-zinc-800 p-2 rounded">
              <div className="font-pixel text-xs sm:text-sm text-white">{builderStats.academic}</div>
              <div className="text-[10px] text-zinc-500 font-pixel">CGPA</div>
            </div>
          </div>

          {/* Make an Offer Button */}
          <button
            onClick={() => {
              soundManager.playVillager();
              onMakeOffer();
            }}
            className="mc-button mc-button-green w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <span>MAKE AN OFFER</span>
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Trade Inspection Modal */}
      {selectedTrade && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="mc-panel max-w-md w-full p-5 rounded border-2 border-emerald-400 relative">
            <button
              onClick={() => setSelectedTrade(null)}
              className="absolute top-4 right-4 mc-button px-2 py-1 text-xs cursor-pointer"
            >
              <X className="w-4 h-4 text-rose-400" />
            </button>

            <div className="flex items-center space-x-2 text-emerald-400 font-pixel text-xs mb-1">
              <PixelIcon name="emerald" size={16} />
              <span>VILLAGER TRADE DETAILS</span>
            </div>

            <h3 className="font-pixel text-lg text-white mb-1">
              {selectedTrade.name}
            </h3>
            <p className="text-xs text-zinc-400 font-sans-clean mb-3">
              {selectedTrade.subtitle}
            </p>

            <p className="text-xs text-zinc-300 font-sans-clean leading-relaxed bg-zinc-950 p-3 rounded border border-zinc-800 mb-3">
              {selectedTrade.description}
            </p>

            <div className="mb-4">
              <div className="text-[10px] font-pixel text-zinc-400 mb-1.5">
                STACK / ENCHANTMENTS
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedTrade.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-pixel bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onMakeOffer(selectedTrade.name);
                setSelectedTrade(null);
              }}
              className="mc-button mc-button-green w-full py-2 text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>INQUIRE ABOUT THIS TRADE</span>
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
