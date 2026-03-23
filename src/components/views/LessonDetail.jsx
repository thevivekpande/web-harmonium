import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LESSONS } from '../../data/constants';

export default function LessonDetail({ activeLesson, setActiveLesson }) {
  const lesson = LESSONS.find(l => l.id === activeLesson);

  if (!lesson) return null;

  return (
    <div className="page-container">
      <button 
        style={{
          background: 'none', border: 'none', color: '#4A2E2A', 
          cursor: 'pointer', display: 'flex', alignItems: 'center', 
          gap: '8px', marginBottom: '24px', fontWeight: 'bold'
        }}
        onClick={() => setActiveLesson(null)}
      >
        <ArrowLeft size={20} /> Back to Lessons
      </button>

      <div className="card" style={{ cursor: 'default', transform: 'none', boxShadow: 'none' }}>
        <h2 className="serif" style={{ marginBottom: '16px', fontSize: '32px' }}>
          {lesson.title}
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
          {lesson.content}
        </p>
      </div>
    </div>
  );
}
