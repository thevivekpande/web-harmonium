import React, { useEffect, useRef, useState } from 'react';
import RagaCard from '../instrument/RagaCard';
import Bellows from '../instrument/Bellows';
import TuningPanel from '../instrument/TuningPanel';
import Keyboard from '../instrument/Keyboard';

export default function InstrumentView({
  setCurrentTab,
  ragaId,
  setRagaId,
  setSettings,
  settings,
  activeKeys,
  isPumping,
  setPumping,
  handlePointerDown,
  handlePointerUp
}) {
  const baseRef = useRef(null);
  const defaultBaseHeightRef = useRef(null);
  const resizeStateRef = useRef({
    resizing: false,
    startY: 0,
    startHeight: 0,
    minHeight: 0,
    maxHeight: 0
  });
  const [baseHeight, setBaseHeight] = useState(null);
  const bellowsActive = activeKeys.size > 0 || settings.drone || isPumping;
  const lidStyle = {
    '--lid-angle': `${settings.lidAngle}deg`
  };

  useEffect(() => {
    if (!baseRef.current || defaultBaseHeightRef.current !== null) {
      return;
    }

    defaultBaseHeightRef.current = baseRef.current.getBoundingClientRect().height;
  }, []);

  const handleResizeStart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const base = baseRef.current;
    if (!base) {
      return;
    }

    const startHeight = base.getBoundingClientRect().height;
    if (defaultBaseHeightRef.current === null) {
      defaultBaseHeightRef.current = startHeight;
    }

    resizeStateRef.current = {
      resizing: true,
      startY: e.clientY,
      startHeight,
      minHeight: Math.max(140, startHeight - 200),
      maxHeight: startHeight + 200
    };

    base.classList.add('resizing');
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handleResizeMove = (e) => {
    const resizeState = resizeStateRef.current;
    if (!resizeState.resizing) {
      return;
    }

    e.preventDefault();
    const nextHeight = resizeState.startHeight - (e.clientY - resizeState.startY);
    const clampedHeight = Math.min(resizeState.maxHeight, Math.max(resizeState.minHeight, nextHeight));
    setBaseHeight(clampedHeight);
  };

  const handleResizeEnd = (e) => {
    if (!resizeStateRef.current.resizing) {
      return;
    }

    resizeStateRef.current.resizing = false;
    baseRef.current?.classList.remove('resizing');
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const baseStyle = baseHeight
    ? {
        '--instrument-base-height': `${baseHeight}px`,
        '--keyboard-shift': `${defaultBaseHeightRef.current - baseHeight}px`
      }
    : undefined;

  return (
    <div className="instrument-shell" style={lidStyle}>
      <div className="instrument-lid">
        <div className="workspace">
          <RagaCard 
            setCurrentTab={setCurrentTab} 
            ragaId={ragaId} 
            setRagaId={setRagaId} 
          />
          <Bellows 
            bellowsActive={bellowsActive} 
          />
          <TuningPanel
            settings={settings}
            setSettings={setSettings}
          />
        </div>
        <div className="instrument-hinge" />
      </div>

      <div
        ref={baseRef}
        className="instrument-base"
        style={baseStyle}
      >
        <button
          type="button"
          className="instrument-base-resize-handle"
          aria-label="Resize harmonium base"
          onPointerDown={handleResizeStart}
          onPointerMove={handleResizeMove}
          onPointerUp={handleResizeEnd}
          onPointerCancel={handleResizeEnd}
        />
        <Keyboard 
          activeKeys={activeKeys} 
          ragaId={ragaId} 
          handlePointerDown={handlePointerDown} 
          handlePointerUp={handlePointerUp} 
        />
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
