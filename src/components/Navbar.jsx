import React from 'react';
import { Layers, Bookmark } from 'lucide-react';

export default function Navbar({ stackCount }) {
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold flex items-center gap-2">
          <Layers className="w-6 h-6 text-indigo-600" />
          <span>DevStack</span>
        </a>
      </div>
      <div className="flex-none gap-4">
        <div className="flex items-center gap-2 bg-base-200 px-3 py-1.5 rounded-full">
          <Bookmark className="w-4 h-4 text-indigo-600" />
          <span className="font-semibold text-sm">Stack: {stackCount}</span>
        </div>
     </div>
    </div>
  );
}