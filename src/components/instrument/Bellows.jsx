import React from 'react';

export default function Bellows({ bellowsActive }) {
  return (
    <div className="bellows-container">
      <div className={`bellows ${bellowsActive ? 'pumping' : ''}`}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bellows-fold" />
        ))}
      </div>
    </div>
  );
}
