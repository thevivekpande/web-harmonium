import React, { useState, useEffect, useCallback } from 'react';
import { KEY_MAP, LESSONS, RAGAS } from './data/constants';
import { HarmoniumSynth } from './engine/HarmoniumSynth';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';

// Views
import InstrumentView from './components/views/InstrumentView';
import LibraryView from './components/views/LibraryView';
import LessonsView from './components/views/LessonsView';
import LessonDetail from './components/views/LessonDetail';

import './index.css';

const synth = new HarmoniumSynth();

const setMetaTag = (selector, attribute, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

function App() {
  const [activeKeys, setActiveKeys] = useState(new Set());
  const [currentTab, setCurrentTab] = useState('inventory');
  const [activeLesson, setActiveLesson] = useState(null);
  
  const [ragaId, setRagaId] = useState('free_play');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPumping, setPumping] = useState(false);
  
  const [settings, setSettings] = useState({
    male: true,
    bass: true,
    drone: false,
    volume: 0.8,
    transpose: 0,
    lidAngle: 74
  });

  // Manage tab changes to reset sub-views
  const handleSetTab = (tab) => {
    setCurrentTab(tab);
    if (tab !== 'lessons') {
      setActiveLesson(null);
    }
  };

  useEffect(() => {
    const unlock = () => { synth.init(); };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.repeat || isSettingsOpen) return;
    const key = e.key.toLowerCase();
    const noteMap = KEY_MAP[key];

    if (noteMap) {
      setActiveKeys(prev => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
      synth.playNote(key, noteMap.freq, settings);
    }
  }, [settings, isSettingsOpen]);

  const handleKeyUp = useCallback((e) => {
    const key = e.key.toLowerCase();
    if (KEY_MAP[key]) {
      setActiveKeys(prev => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
      synth.stopNote(key);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    synth.toggleDrone(settings.drone, settings.volume);
    synth.setVolume(settings.volume);
  }, [settings.drone, settings.volume]);

  useEffect(() => {
    const lesson = LESSONS.find((item) => item.id === activeLesson);
    const raga = RAGAS.find((item) => item.id === ragaId);

    const seoByTab = {
      inventory: {
        title: `${raga?.name || 'Virtual Harmonium'} | Harmonium Pro`,
        description: raga?.id === 'free_play'
          ? 'Play a virtual Indian harmonium online with responsive keys, drone controls, bellows feel, and guided raga practice.'
          : `Practice Raag ${raga.name} on a virtual harmonium with scale highlighting, playable keys, and Indian classical learning support.`
      },
      library: {
        title: 'Practice Library | Harmonium Pro',
        description: 'Browse harmonium practice recordings including riyaz sessions, alap ideas, bandish references, and taal-focused improvisation.'
      },
      lessons: lesson ? {
        title: `${lesson.title} | Harmonium Pro Lesson`,
        description: lesson.desc
      } : {
        title: 'Harmonium Lessons | Harmonium Pro',
        description: 'Learn harmonium fundamentals with beginner-friendly lessons on sargam, meend, gamak, and Indian classical taals.'
      }
    };

    const seo = seoByTab[currentTab] || seoByTab.inventory;

    document.title = seo.title;
    setMetaTag('meta[name="description"]', 'content', seo.description);
    setMetaTag('meta[name="keywords"]', 'content', 'virtual harmonium, online harmonium, indian classical music, raga practice, harmonium lessons, sargam, taal, riyaz');
    setMetaTag('meta[property="og:title"]', 'content', seo.title);
    setMetaTag('meta[property="og:description"]', 'content', seo.description);
    setMetaTag('meta[name="twitter:title"]', 'content', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'content', seo.description);
  }, [activeLesson, currentTab, ragaId]);

  const handlePointerDown = (key, freq) => {
    setActiveKeys(prev => new Set(prev).add(key));
    synth.playNote(key, freq, settings);
  };

  const handlePointerUp = (key) => {
    setActiveKeys(prev => {
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
    synth.stopNote(key);
  };

  return (
    <div className="app-container">
      {isSettingsOpen && (
        <SettingsModal 
          settings={settings} 
          setSettings={setSettings} 
          setIsSettingsOpen={setIsSettingsOpen} 
        />
      )}

      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={handleSetTab} 
        setIsSettingsOpen={setIsSettingsOpen} 
      />

      <div className="main-content">
        <Header 
          currentTab={currentTab} 
          setCurrentTab={handleSetTab} 
        />

        {currentTab === 'library' && <LibraryView />}
        
        {currentTab === 'lessons' && !activeLesson && (
          <LessonsView setActiveLesson={setActiveLesson} />
        )}

        {currentTab === 'lessons' && activeLesson && (
          <LessonDetail 
            activeLesson={activeLesson} 
            setActiveLesson={setActiveLesson} 
          />
        )}
        
        {currentTab === 'inventory' && (
          <InstrumentView
            setCurrentTab={handleSetTab}
            ragaId={ragaId}
            setRagaId={setRagaId}
            settings={settings}
            setSettings={setSettings}
            activeKeys={activeKeys}
            isPumping={isPumping}
            setPumping={setPumping}
            handlePointerDown={handlePointerDown}
            handlePointerUp={handlePointerUp}
          />
        )}
      </div>
    </div>
  );
}

export default App;
