import React from 'react';

export default function TuningPanel({ settings, setSettings, setPumping }) {
  const toggleSetting = (name) => {
    setSettings(s => ({ ...s, [name]: !s[name] }));
  };

  return (
    <div className="tuning-panel">
      <h3 className="serif">Sound Tuning</h3>
      
      <div className="control-group">
        <span className="control-label">Reeds</span>
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

      <div className="control-group" style={{ marginTop: '16px' }}>
        <span className="control-label">Effects</span>
        <div className="switch-row">
          <span className="switch-label">Drone Base (Sa-Pa)</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={settings.drone} 
              onChange={() => toggleSetting('drone')} 
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
      <button 
        className="mobile-pump-btn"
        onPointerDown={() => setPumping(true)}
        onPointerUp={() => setPumping(false)}
        onPointerLeave={() => setPumping(false)}
      >
        Pump Bellows
      </button>
    </div>
  );
}
