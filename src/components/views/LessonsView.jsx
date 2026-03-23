import React from 'react';
import { Music, BookOpen } from 'lucide-react';
import { LESSONS } from '../../data/constants';

export default function LessonsView({ setActiveLesson }) {
  // Helper to map iconType string to an actual icon
  const renderIcon = (type) => {
    switch (type) {
      case 'Music': return <Music size={48} />;
      case 'BookOpen': return <BookOpen size={48} />;
      default: return <BookOpen size={48} />;
    }
  };

  return (
    <div className="page-container">
      <h2 className="serif">Learn & Master</h2>
      <div className="grid">
        {LESSONS.map((lesson) => (
          <div 
            className="card" 
            key={lesson.id} 
            onClick={() => setActiveLesson(lesson.id)}
          >
            <div className="lesson-image">
              {renderIcon(lesson.iconType)}
            </div>
            <h3 className="serif">{lesson.title}</h3>
            <p>{lesson.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
