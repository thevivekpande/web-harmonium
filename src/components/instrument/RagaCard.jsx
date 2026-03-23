import React from 'react';
import { PlayCircle } from 'lucide-react';
import { RAGAS } from '../../data/constants';

export default function RagaCard({ setCurrentTab, ragaId, setRagaId }) {
  const activeRaga = RAGAS.find(r => r.id === ragaId);

  return (
    <div className="raga-card">
      <div className="raga-header">
        <h4>Configuration</h4>
        <select 
          className="raga-select" 
          value={ragaId} 
          onChange={(e) => setRagaId(e.target.value)}
        >
          {RAGAS.map(r => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>
      </div>
      
      <h2 className="serif">{activeRaga.name}</h2>
      <span className="raga-time">{activeRaga.time}</span>
      <p>{activeRaga.description}</p>
      
      <button 
        className="masterclass-btn" 
        onClick={() => setCurrentTab('lessons')}
      >
        <PlayCircle size={18} />
        Start {activeRaga.name} Lesson
      </button>
    </div>
  );
}
