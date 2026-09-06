import { useState, useCallback } from 'react';
import { GameHUD } from './components/hud/GameHUD';
import { HealthHungerBar } from './components/hud/HealthHungerBar';
import { Hotbar, HOTBAR_SLOTS } from './components/hud/Hotbar';
import { WorldScene } from './components/world/WorldScene';
import { SpawnHero } from './components/panels/SpawnHero';
import { PlayerProfile } from './components/panels/PlayerProfile';
import { SkillEnchantments } from './components/panels/SkillEnchantments';
import { ProjectChest } from './components/panels/ProjectChest';
import { JourneyCrafting } from './components/panels/JourneyCrafting';
import { AchievementPanel } from './components/panels/AchievementPanel';
import { VillagerTrades } from './components/panels/VillagerTrades';
import { ContactBook } from './components/panels/ContactBook';
import { EndScreen } from './components/panels/EndScreen';
import { RecruiterModal } from './components/modals/RecruiterModal';
import { soundManager } from './utils/soundEffects';

export function App() {
  const [activeSlot, setActiveSlot] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [showRecruiter, setShowRecruiter] = useState<boolean>(false);
  const [prefillService, setPrefillService] = useState<string | undefined>(undefined);

  // Active biome determination
  const currentSlotData = HOTBAR_SLOTS.find((s) => s.id === activeSlot) || HOTBAR_SLOTS[0];
  const currentBiome = currentSlotData.biome;

  // Sound toggle handler
  const handleToggleMute = useCallback(() => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  }, []);

  // Progression: Level 29 across the world, leveling up to Level 30 specifically upon reaching The End [Slot 9]
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);
  const [triggerLevelUp, setTriggerLevelUp] = useState<boolean>(false);

  const handleSlotSelect = (slotId: number) => {
    setActiveSlot(slotId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If reaching The End (Slot 9), trigger the grand Level Up to Level 30!
    if (slotId === 9) {
      if (!reachedEnd) {
        setReachedEnd(true);
      }
      setTriggerLevelUp(true);
      setTimeout(() => setTriggerLevelUp(false), 2200);
    }
  };

  const playerLevel = (reachedEnd || activeSlot === 9) ? 30 : 29;
  const xpProgress = (reachedEnd || activeSlot === 9) ? 100 : 95;

  return (
    <div className="min-h-screen w-full relative bg-black text-white font-sans overflow-x-hidden flex flex-col justify-between select-none">
      {/* 1. Cinematic World Scene & Canvas Particles */}
      <WorldScene
        currentBiome={currentBiome}
      />

      {/* 2. Top Game HUD */}
      <GameHUD
        currentBiome={currentBiome}
        onOpenRecruiter={() => setShowRecruiter(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* 3. Main Interactive Panel Area (with ample bottom padding so HUD never covers buttons/toolbars) */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-start pt-20 sm:pt-24 pb-48 sm:pb-56 px-2 sm:px-4">
        {activeSlot === 1 && (
          <SpawnHero
            onEnterWorld={() => handleSlotSelect(2)}
            onViewBuilds={() => handleSlotSelect(4)}
          />
        )}

        {activeSlot === 2 && (
          <PlayerProfile />
        )}

        {activeSlot === 3 && (
          <SkillEnchantments />
        )}

        {activeSlot === 4 && (
          <ProjectChest />
        )}

        {activeSlot === 5 && (
          <JourneyCrafting />
        )}

        {activeSlot === 6 && (
          <AchievementPanel
            onSendMessage={() => handleSlotSelect(8)}
          />
        )}

        {activeSlot === 7 && (
          <VillagerTrades
            onMakeOffer={(serviceName) => {
              setPrefillService(serviceName);
              handleSlotSelect(8);
            }}
          />
        )}

        {activeSlot === 8 && (
          <ContactBook
            prefillService={prefillService}
            onGoToEnd={() => handleSlotSelect(9)}
          />
        )}

        {activeSlot === 9 && (
          <EndScreen
            onRespawn={() => handleSlotSelect(1)}
            onExploreAgain={() => handleSlotSelect(4)}
          />
        )}
      </main>

      {/* 4. Bottom Game HUD (Hearts, Hunger, XP, Hotbar) */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 p-2 sm:p-4 pointer-events-none flex flex-col items-center space-y-1.5 sm:space-y-2">
        <div className="pointer-events-auto w-full max-w-xl">
          <HealthHungerBar 
            level={playerLevel} 
            xpProgress={xpProgress} 
            triggerLevelUp={triggerLevelUp}
          />
        </div>
        <div className="pointer-events-auto">
          <Hotbar
            activeSlot={activeSlot}
            onSelectSlot={handleSlotSelect}
          />
        </div>
      </footer>

      {/* 5. Recruiter / Traditional Dossier Modal */}
      {showRecruiter && (
        <RecruiterModal
          onClose={() => setShowRecruiter(false)}
          onNavigateSlot={(slotId) => {
            handleSlotSelect(slotId);
            setShowRecruiter(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
