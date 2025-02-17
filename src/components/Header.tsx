import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lock, Github, Twitter } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-600';
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Lock className="w-6 h-6 text-indigo-600 transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              PassGuard
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/about" 
              className={`${isActive('/about')} hover:text-indigo-600 transition-colors duration-200 text-sm font-medium`}
            >
              About
            </Link>
            <Link 
              to="/docs" 
              className={`${isActive('/docs')} hover:text-indigo-600 transition-colors duration-200 text-sm font-medium`}
            >
              Documentation
            </Link>
            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://github.com/Arya182-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}