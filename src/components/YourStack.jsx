import React from 'react';
import { Trash2 } from 'lucide-react';

export default function YourStack({ stack, onRemove, onClear }) {
  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Stack ({stack.length})</h2>
        {stack.length > 0 && (
          <button onClick={onClear} className="btn btn-ghost btn-xs text-error">
            Clear All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400 py-4 text-center">
          No technologies added yet. Select tools from the left to build your stack!
        </p>
      ) : (
        <ul className="space-y-2">
          {stack.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-base-200 p-3 rounded-xl"
            >
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <span className="text-xs text-gray-400">{item.category}</span>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="btn btn-square btn-ghost btn-xs text-gray-500 hover:text-error"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}