import React, { useEffect, useRef, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { NOTES, RAGAS } from '../../data/constants';

export default function Keyboard({ activeKeys, ragaId, handlePointerDown, handlePointerUp, variant = 'harmonium' }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sectionRef = useRef(null);
  const activeRaga = RAGAS.find(r => r.id === ragaId) || RAGAS[0];
  const sectionClassName = [
    'keyboard-section',
    variant === 'piano' ? 'piano-keyboard-section' : '',
    isFullscreen ? 'keyboard-section-fullscreen' : ''
  ].filter(Boolean).join(' ');
  const containerClassName = variant === 'piano'
    ? 'keyboard-container piano-keyboard-container'
    : 'keyboard-container';
  const FullscreenIcon = isFullscreen ? Minimize2 : Maximize2;

  useEffect(() => {
    if (!isFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
      window.screen?.orientation?.unlock?.();
      return;
    }

    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await section.requestFullscreen?.();
        }
      } catch (e) {}

      try {
        await window.screen?.orientation?.lock?.('landscape');
      } catch (e) {}
    };

    enterFullscreen();

    const handleFullscreenExit = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenExit);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenExit);
    };
  }, [isFullscreen]);

  return (
    <div ref={sectionRef} className={sectionClassName}>
      <button
        type="button"
        className="keyboard-fullscreen-btn"
        aria-label={isFullscreen ? 'Exit keyboard fullscreen' : 'Open keyboard fullscreen'}
        onClick={() => setIsFullscreen((value) => !value)}
      >
        <FullscreenIcon size={18} />
      </button>
      <div className={containerClassName}>
        {NOTES.map((note) => {
          const isActive = activeKeys.has(note.key);
          const isRagaNote = activeRaga.id !== 'free_play' && activeRaga.scale.includes(note.name.replace(/\d/g, ''));

          return (
            <div
              key={note.name}
              className={`key key-${note.type} ${isActive ? 'active' : ''}`}
              onPointerDown={(e) => {
                e.preventDefault();
                handlePointerDown(note.key, note.freq);
              }}
              onPointerUp={(e) => {
                e.preventDefault();
                handlePointerUp(note.key);
              }}
              onPointerLeave={(e) => {
                e.preventDefault();
                if (isActive) handlePointerUp(note.key);
              }}
            >
              {isRagaNote && <div className="raga-highlight" title={`Part of ${activeRaga.name}`} />}
              <span className="key-hint">{note.key.toUpperCase()}</span>
              <span className="key-label">{note.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
