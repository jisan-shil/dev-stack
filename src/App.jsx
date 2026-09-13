import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    if (!stack.find((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
      toast.success(`Added ${tech.name} to your stack!`);
    }
  };

  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack.`);
    }
  };

  const handleClearStack = () => {
    setStack([]);
    toast.warn('Cleared your stack.');
  };

  return (
    <div className="min-h-screen bg-base-200/50 flex flex-col justify-between">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <div>
        <Navbar stackCount={stack.length} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBanner />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Available Technologies</h2>
              {loading ? (
                <div className="flex justify-center p-12">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddToStack}
                      isSelected={Boolean(stack.find((s) => s.id === tech.id))}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onClear={handleClearStack}
              />
            </div>
          </div>
        </main>
      </div>
      <div className="max-w-7xl mx-auto px-4 w-full mb-6">
        <Footer />
      </div>
    </div>
  );
}