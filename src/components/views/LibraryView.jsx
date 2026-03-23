import React from 'react';
import { Mic, PlayCircle } from 'lucide-react';

export default function LibraryView() {
  const recordings = [
    { title: "Morning Riyaz - Bhairav", date: "Oct 24, 2024", duration: "14:20" },
    { title: "Yaman Alap Practice", date: "Oct 22, 2024", duration: "08:15" },
    { title: "Teental 16 Beats Improvisation", date: "Oct 19, 2024", duration: "05:40" },
    { title: "Desh Bandish Recording", date: "Oct 15, 2024", duration: "12:05" },
  ];

  return (
    <div className="page-container">
      <h2 className="serif">Library</h2>
      <div className="list-layout">
        {recordings.map((rec, i) => (
          <div className="card card-row" key={i}>
            <Mic size={32} color="#C5A059" />
            <div>
              <h3 className="serif">{rec.title}</h3>
              <p>{rec.date} • {rec.duration}</p>
            </div>
            <PlayCircle size={32} className="play-action" />
          </div>
        ))}
      </div>
    </div>
  );
}
