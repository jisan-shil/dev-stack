import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import './App.css';

const TECHNOLOGIES_DATA = [
  { id: 1, name: 'React', category: 'Frontend', badge: 'Popular', badgeClass: 'popular', description: 'A declarative, component-based JavaScript library for building modern user interfaces.', level: 'Intermediate', rating: '4.9', iconText: 'Re', color: '#0ea5e9' },
  { id: 2, name: 'Vue.js', category: 'Frontend', badge: 'Versatile', badgeClass: 'versatile', description: 'An approachable, performant, and versatile framework for building web user interfaces.', level: 'Beginner-Friendly', rating: '4.8', iconText: 'Vu', color: '#10b981' },
  { id: 3, name: 'Svelte', category: 'Frontend', badge: 'Fast', badgeClass: 'fast', description: 'Cybernetically enhanced web apps with compile-time reactivity and zero-truly DOM overhead.', level: 'Intermediate', rating: '4.9', iconText: 'Sv', color: '#f97316' },
  { id: 4, name: 'Next.js', category: 'Frontend', badge: 'Standard', badgeClass: 'standard', description: 'The React framework for full-stack web applications with hybrid static & server rendering.', level: 'Intermediate', rating: '4.9', iconText: 'Nx', color: '#111827' },
  { id: 5, name: 'Node.js', category: 'Backend', badge: 'Standard', badgeClass: 'standard', description: 'An asynchronous event-driven JavaScript runtime built on Chrome\'s V8 engine.', level: 'Intermediate', rating: '4.8', iconText: 'No', color: '#22c55e' },
  { id: 6, name: 'PostgreSQL', category: 'Database', badge: 'Top SQL', badgeClass: 'top-sql', description: 'A powerful, open-source object-relational database system with proven reliability.', level: 'Advanced', rating: '4.9', iconText: 'Pg', color: '#3b82f6' },
  { id: 7, name: 'Redis', category: 'Database', badge: 'Cosmos', badgeClass: 'cosmos', description: 'In-memory data structure store used as a high-speed database, cache, and message broker.', level: 'Intermediate', rating: '4.8', iconText: 'Rd', color: '#ef4444' },
  { id: 8, name: 'JavaScript', category: 'Language', badge: 'Money-Saver', badgeClass: 'money-saver', description: 'The versatile, ubiquitous scripting language powering dynamic web apps across the web.', level: 'Beginner-Friendly', rating: '4.9', iconText: 'JS', color: '#eab308' },
  { id: 9, name: 'TypeScript', category: 'Language', badge: 'Essential', badgeClass: 'essential', description: 'A strongly typed programming language that builds on JavaScript for robust tooling.', level: 'Intermediate', rating: '4.9', iconText: 'TS', color: '#06b6d4' },
  { id: 10, name: 'Java', category: 'Language', badge: 'Robust', badgeClass: 'robust', description: 'A secure, object-oriented programming language designed for portability and scale.', level: 'Intermediate', rating: '4.8', iconText: 'Ja', color: '#6366f1' },
  { id: 11, name: 'Tailwind CSS', category: 'Styling', badge: 'Modern', badgeClass: 'modern', description: 'A utility-first CSS framework packed with classes that can be composed to build any design.', level: 'Beginner-Friendly', rating: '4.9', iconText: 'TW', color: '#14b8a6' },
  { id: 12, name: 'Docker', category: 'DevOps', badge: 'Containers', badgeClass: 'containers', description: 'A platform designed to build, test, and deploy containerized applications faster.', level: 'Intermediate', rating: '4.9', iconText: 'Do', color: '#3b82f6' }
];

export default function App() {
  const [selectedTechs, setSelectedTechs] = useState([
    { id: 3, name: 'Svelte', color: '#f97316', iconText: 'Sv' },
    { id: 1, name: 'React', color: '#0ea5e9', iconText: 'Re' }
  ]);

  const handleToggleStack = (tech) => {
    if (selectedTechs.some((item) => item.id === tech.id)) {
      setSelectedTechs(selectedTechs.filter((item) => item.id !== tech.id));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleRemoveTech = (id) => {
    setSelectedTechs(selectedTechs.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <HeroBanner />
        
        <div id="technologies">
          <div className="tech-explore-header">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="content-layout">
            <div className="tech-grid">
              {TECHNOLOGIES_DATA.map((tech) => (
                <TechCard 
                  key={tech.id} 
                  tech={tech} 
                  onToggleStack={handleToggleStack}
                  isSelected={selectedTechs.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <YourStack 
              selectedTechs={selectedTechs}
              onRemoveTech={handleRemoveTech}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}