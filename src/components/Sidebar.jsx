import React from 'react';
import { Home, Music, Library, BookOpen, Settings } from 'lucide-react';

export default function Sidebar({ currentTab, setCurrentTab, setIsSettingsOpen, showPianoBadge }) {
  return (
    <div className="sidebar">
      <div 
        className={`sidebar-icon ${currentTab === 'inventory' ? 'active' : ''}`} 
        onClick={() => setCurrentTab('inventory')}
      >
        <Home size={24} />
      </div>
      <div 
        className={`sidebar-icon ${currentTab === 'piano' ? 'active' : ''}`} 
        onClick={() => setCurrentTab('piano')}
      >
        {showPianoBadge && <span className="sidebar-badge">New</span>}
        <Music size={24} />
      </div>
      <div 
        className={`sidebar-icon ${currentTab === 'library' ? 'active' : ''}`} 
        onClick={() => setCurrentTab('library')}
      >
        <Library size={24} />
      </div>
      <div 
        className={`sidebar-icon ${currentTab === 'lessons' ? 'active' : ''}`} 
        onClick={() => setCurrentTab('lessons')}
      >
        <BookOpen size={24} />
      </div>
      <div style={{ flex: 1 }} className="spacer-desktop"></div>
      <div 
        className="sidebar-icon" 
        onClick={() => setIsSettingsOpen(true)}
      >
        <Settings size={24} />
      </div>
    </div>
  );
}
