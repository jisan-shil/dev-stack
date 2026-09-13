import React from 'react';

export default function HeroBanner() {
  return (
    <div className="hero-section" id="home">
      <div className="hero-text">
        <h1>
          Build Your Ideal <br />
          <span>Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore Technologies</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-graphic">
        <img 
          src="/banner-stack.png" 
          alt="Development Stack 3D Illustration" 
          className="banner-img" 
        />
      </div>
    </div>
  );
}