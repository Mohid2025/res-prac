import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">Sheri Bistro</Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-amber-200 transition ${isActive('/') ? 'text-amber-200 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-amber-200 transition ${isActive('/about') ? 'text-amber-200 font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/catalog" 
              className={`hover:text-amber-200 transition ${isActive('/catalog') ? 'text-amber-200 font-semibold' : ''}`}
            >
              Catalog
            </Link>
            <Link 
              to="/locations" 
              className={`hover:text-amber-200 transition ${isActive('/locations') ? 'text-amber-200 font-semibold' : ''}`}
            >
              Locations
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}