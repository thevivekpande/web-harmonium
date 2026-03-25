import React from 'react';
import Keyboard from '../instrument/Keyboard';

export default function PianoView({ activeKeys, handlePointerDown, handlePointerUp }) {
  return (
    <div className="piano-page">
      <div className="piano-stage">
        <div className="piano-panel">
          <span className="piano-eyebrow">Keyboard Instrument</span>
          <h2 className="serif">Studio Piano</h2>
          <p>
            Switch from harmonium phrasing to a more direct piano layout while keeping the same playable keyboard
            mapping. Use it for melody sketching, chord shapes, and fast note testing.
          </p>
          <div className="piano-meta">
            <span>88-key inspired stage</span>
            <span>Live pointer input</span>
            <span>Keyboard shortcuts enabled</span>
          </div>
        </div>

        <div className="piano-panel piano-panel-secondary">
          <span className="piano-eyebrow">Practice Notes</span>
          <h3 className="serif">Focus Areas</h3>
          <ul className="piano-list">
            <li>Use left hand for octave anchors and right hand for phrases.</li>
            <li>Try repeated note patterns to compare attack and spacing.</li>
            <li>Use the same note map as the harmonium for fast switching.</li>
          </ul>
        </div>
      </div>

      <div className="piano-keybed">
        <Keyboard
          activeKeys={activeKeys}
          ragaId="free_play"
          handlePointerDown={handlePointerDown}
          handlePointerUp={handlePointerUp}
          variant="piano"
        />
      </div>
    </div>
  );
}
