import React from 'react';

export default function YourStack({ selectedTechs, onRemoveTech, onRemoveAll }) {
  return (
    <div className="your-stack-sidebar">
      <h3>Your Stack</h3>
      <p>{selectedTechs.length} Technology Selected</p>
      
      <div className="selected-list">
        {selectedTechs.length === 0 ? (
          <div className="empty-stack">No technologies added yet. Click "+ Add to Stack" on any card.</div>
        ) : (
          selectedTechs.map((tech) => (
            <div key={tech.id} className="selected-item">
              <div className="selected-item-info">
                <div className="tech-logo" style={{ width: '24px', height: '24px', fontSize: '0.7rem', backgroundColor: tech.color }}>
                  {tech.iconText}
                </div>
                <span>{tech.name}</span>
              </div>
              <button className="remove-item-btn" onClick={() => onRemoveTech(tech.id)}>×</button>
            </div>
          ))
        )}
      </div>

      {selectedTechs.length > 0 && (
        <button className="remove-all-btn" onClick={onRemoveAll}>
          Remove All
        </button>
      )}
    </div>
  );
}