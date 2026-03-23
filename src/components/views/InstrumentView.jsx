import React from 'react';
import RagaCard from '../instrument/RagaCard';
import Bellows from '../instrument/Bellows';
import TuningPanel from '../instrument/TuningPanel';
import Keyboard from '../instrument/Keyboard';

export default function InstrumentView({
  setCurrentTab,
  ragaId,
  setRagaId,
  settings,
  setSettings,
  activeKeys,
  isPumping,
  setPumping,
  handlePointerDown,
  handlePointerUp
}) {
  const bellowsActive = activeKeys.size > 0 || settings.drone || isPumping;

  return (
    <>
      <div className="workspace">
        <RagaCard 
          setCurrentTab={setCurrentTab} 
          ragaId={ragaId} 
          setRagaId={setRagaId} 
        />
        <Bellows 
          bellowsActive={bellowsActive} 
        />
        <TuningPanel 
          settings={settings} 
          setSettings={setSettings} 
          setPumping={setPumping} 
        />
      </div>

      <Keyboard 
        activeKeys={activeKeys} 
        ragaId={ragaId} 
        handlePointerDown={handlePointerDown} 
        handlePointerUp={handlePointerUp} 
      />
    </>
  );
}
