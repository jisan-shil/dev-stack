import React from 'react';

export default function TechCard({ tech, onToggleStack, isSelected }) {
  return (
    <div className="tech-card">
      <div>
        <div className="tech-card-top">
          <div className="tech-icon-title">
            <div className="tech-logo" style={{ backgroundColor: tech.color || '#374151' }}>
              {tech.iconText}
            </div>
            <h3>{tech.name}</h3>
          </div>
          <span className={`badge ${tech.badgeClass}`}>{tech.badge}</span>
        </div>
        <p>{tech.description}</p>
      </div>
      <div className="tech-card-footer">
        <div className="tech-meta">
          <span className="category-tag">{tech.category}</span>
          <span>{tech.level}</span>
          <span><span className="rating-star">★</span> {tech.rating}</span>
        </div>
        <button 
          className={`add-stack-btn ${isSelected ? 'added' : ''}`}
          onClick={() => onToggleStack(tech)}
        >
          {isSelected ? '✓ Added to Stack' : '+ Add to Stack'}
        </button>
      </div>
    </div>
  );
}