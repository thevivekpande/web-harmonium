import React from 'react';

export default function Header({ currentTab, setCurrentTab }) {
  return (
    <div className="header">
      <div className="logo-area">
        <h1 className="logo-title serif">Harmonium Pro</h1>
      </div>
      <div className="nav-tabs">
        <div 
          className={`nav-tab ${currentTab === 'inventory' ? 'active' : ''}`} 
          onClick={() => setCurrentTab('inventory')}
        >
          Instrument
        </div>
        <div 
          className={`nav-tab ${currentTab === 'library' ? 'active' : ''}`} 
          onClick={() => setCurrentTab('library')}
        >
          Library
        </div>
        <div 
          className={`nav-tab ${currentTab === 'lessons' ? 'active' : ''}`} 
          onClick={() => setCurrentTab('lessons')}
        >
          Lessons
        </div>
      </div>
    </div>
  );
}
