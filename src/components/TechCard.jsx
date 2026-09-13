import React from 'react';
import { Plus, Check } from 'lucide-react';

export default function TechCard({ tech, onAdd, isSelected }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-base-200">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <span className="badge badge-neutral text-xs">{tech.category}</span>
        </div>
        <h2 className="card-title text-xl font-bold mt-2">{tech.name}</h2>
        <p className="text-gray-500 text-sm">{tech.description}</p>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => onAdd(tech)}
            disabled={isSelected}
            className={`btn btn-sm ${isSelected ? 'btn-disabled' : 'btn-primary'}`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4" /> Added
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" /> Add to Stack
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}