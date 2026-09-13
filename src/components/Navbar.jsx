import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';




    const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#060814]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section eyta */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img 
            src="/banner-stack.png" 
            alt="Stack Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            STACK
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#stacks" className="hover:text-blue-400 transition-colors">Tech Stacks</a>
          <a href="#cards" className="hover:text-blue-400 transition-colors">Cards</a>
          <a href="#footer" className="hover:text-blue-400 transition-colors">About Us</a>
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:opacity-90"></span>
            <span className="relative px-6 py-2.5 rounded-full bg-[#0b0e26] transition-all duration-300 group-hover:bg-transparent text-sm text-white font-medium flex items-center gap-2">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0d24] border-b border-gray-800 px-6 pt-4 pb-6 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-blue-400">Home</a>
          <a href="#stacks" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-blue-400">Tech Stacks</a>
          <a href="#cards" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-blue-400">Cards</a>
          <a href="#footer" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-blue-400">About Us</a>
          <button className="w-full mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;