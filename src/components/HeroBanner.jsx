import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="hero bg-base-200 py-12 px-4 rounded-3xl my-6">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
            <Sparkles className="w-4 h-4" /> Build Your Ideal Stack
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Explore <span className="text-brand-gradient">Modern Tech</span>
          </h1>
          <p className="py-4 text-gray-600">
            Select technologies to build your custom developer stack, track tools, and export your setup.
          </p>
        </div>
      </div>
    </div>
  );
}