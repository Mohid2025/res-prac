import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Sheri Bistro</h3>
            <p className="text-gray-400">Serving happiness on a plate since 2020</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
              <Link to="/catalog" className="text-gray-400 hover:text-white transition">Catalog</Link>
              <Link to="/locations" className="text-gray-400 hover:text-white transition">Locations</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-gray-400">Email: info@sheribistro.com</p>
            <p className="text-gray-400">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Sheri Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}