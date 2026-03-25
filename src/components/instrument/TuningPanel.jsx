import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function TuningPanel({ settings, setSettings, expanded, onToggle }) {
  const toggleSetting = (name) => {
    setSettings(s => ({ ...s, [name]: !s[name] }));
  };

  return (
    <div className={`tuning-panel mobile-collapsible-card ${expanded ? 'expanded' : ''}`}>
      <button type="button" className="mobile-card-toggle" onClick={onToggle}>
        <span className="mobile-card-toggle-label">Reeds</span>
        <ChevronDown size={20} className="mobile-card-toggle-icon" />
      </button>
      <div className="mobile-card-content">
        <div className="mobile-card-content-inner">
          <h3 className="serif">Reeds</h3>
          
          <div className="control-group">
            <span className="control-label">Reed Banks</span>
            <div className="switch-row">
              <span className="switch-label">Male (Base)</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.male} 
                  onChange={() => toggleSetting('male')} 
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="switch-row">
              <span className="switch-label">Bass (Lower Octave)</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.bass} 
                  onChange={() => toggleSetting('bass')} 
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
