import React from 'react';
import { X } from 'lucide-react';

export default function SettingsModal({ settings, setSettings, setIsSettingsOpen }) {
  const handleSettingChange = (e, name) => {
    setSettings(s => ({ ...s, [name]: parseFloat(e.target.value) }));
  };

  return (
    <div className="modal-overlay" onPointerDown={() => setIsSettingsOpen(false)}>
      <div className="modal-content" onPointerDown={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="serif">App Settings</h2>
          <button className="close-btn" onClick={() => setIsSettingsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="control-group" style={{ marginBottom: 20 }}>
          <span className="control-label">Master Volume</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input 
              type="range" 
              min="0" max="1" step="0.05" 
              value={settings.volume} 
              onChange={(e) => handleSettingChange(e, 'volume')} 
              className="range-slider"
            />
            <span style={{ minWidth: 40, fontWeight: 'bold' }}>
              {Math.round(settings.volume * 100)}%
            </span>
          </div>
        </div>

        <div className="control-group" style={{ marginBottom: 20 }}>
          <span className="control-label">Transpose (Semitones)</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <input 
              type="range" 
              min="-12" max="12" step="1" 
              value={settings.transpose} 
              onChange={(e) => handleSettingChange(e, 'transpose')} 
              className="range-slider"
            />
            <span style={{ minWidth: 40, fontWeight: 'bold' }}>
              {settings.transpose > 0 ? `+${settings.transpose}` : settings.transpose}
            </span>
          </div>
        </div>

        <p style={{ fontSize: 13, color: '#666', marginTop: 30 }}>
          Note: Keyboard shortcuts are disabled while settings are open. Standard layout: [Q W E R T Y U I O P [ ] for white keys, with numbers/symbols for black keys.
        </p>
      </div>
    </div>
  );
}
