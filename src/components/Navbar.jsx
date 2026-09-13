import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-brand">
        <span className="brand-badge">DS</span> Dev Stack
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}