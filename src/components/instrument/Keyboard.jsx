import React from 'react';
import { NOTES, RAGAS } from '../../data/constants';

export default function Keyboard({ activeKeys, ragaId, handlePointerDown, handlePointerUp, variant = 'harmonium' }) {
  const activeRaga = RAGAS.find(r => r.id === ragaId) || RAGAS[0];
  const sectionClassName = variant === 'piano'
    ? 'keyboard-section piano-keyboard-section'
    : 'keyboard-section';
  const containerClassName = variant === 'piano'
    ? 'keyboard-container piano-keyboard-container'
    : 'keyboard-container';

  return (
    <div className={sectionClassName}>
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
