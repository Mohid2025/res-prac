import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Delicious Bites</h1>
          <p className="text-xl mb-8">Experience culinary excellence with every dish</p>
          <Link to="/catalog" className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition">
            View Menu
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">We source the finest local ingredients for authentic flavors</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">Our culinary team brings years of experience and passion</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">5-Star Service</h3>
            <p className="text-gray-600">Exceptional dining experience from start to finish</p>
          </div>
        </div>
      </div>
    </div>
  );
}