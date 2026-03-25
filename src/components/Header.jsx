import React from 'react';

export default function Header({ currentTab, setCurrentTab, showPianoBadge }) {
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
          Harmonium
        </div>
        <div 
          className={`nav-tab ${currentTab === 'piano' ? 'active' : ''} ${showPianoBadge ? 'has-badge' : ''}`} 
          onClick={() => setCurrentTab('piano')}
        >
          {showPianoBadge && <span className="nav-tab-badge">New</span>}
          <span>Piano</span>
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
      <a
        className="developer-link"
        href="https://www.linkedin.com/in/thevivekpande/"
        target="_blank"
        rel="noreferrer"
      >
        Developer
      </a>
    </div>
  );
}
