import React from 'react';
import { Sparkles } from 'lucide-react';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="hero bg-base-200 py-8 px-6 rounded-3xl my-6">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between gap-8">
        <img
          src="/banner-stack.png"
          alt="Dev Stack Banner"
          className="max-w-xs md:max-w-sm rounded-lg shadow-md"
        />
        <div className="max-w-md text-left">
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