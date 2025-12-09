import React from 'react';

export default function About() {
  return (
    <div className="flex-grow">
      <div className="bg-amber-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover the story behind our passion for food
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Delicious Bites started with a simple dream: to bring authentic, 
              delicious food to our community. What began as a small family kitchen has grown 
              into a beloved restaurant chain, but our commitment to quality has never wavered.
            </p>
            <p className="text-gray-600">
              Every dish we serve is crafted with care, using recipes passed down through 
              generations and enhanced with modern culinary techniques. We believe that great 
              food brings people together, and that's exactly what we strive to do every day.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              To create memorable dining experiences through exceptional food, warm hospitality, 
              and a commitment to our community. We're not just serving meals; we're creating 
              moments that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Quality ingredients</li>
                <li>✓ Sustainable practices</li>
                <li>✓ Community focused</li>
                <li>✓ Customer satisfaction</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Awards</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🏆 Best New Restaurant 2021</li>
                <li>🏆 Community Choice Award 2022</li>
                <li>🏆 Excellence in Service 2023</li>
                <li>🏆 Top Rated Restaurant 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}