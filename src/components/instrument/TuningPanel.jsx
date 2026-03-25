import React from 'react';

export default function TuningPanel({ settings, setSettings }) {
  const toggleSetting = (name) => {
    setSettings(s => ({ ...s, [name]: !s[name] }));
  };

  return (
    <div className="tuning-panel">
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
  );
}
