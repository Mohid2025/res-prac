import React from 'react';

export default function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Downtown Branch',
      address: '123 Main Street, City Center',
      phone: '(555) 123-4567',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM'
    },
    {
      id: 2,
      name: 'Westside Branch',
      address: '456 West Avenue, Westside',
      phone: '(555) 234-5678',
      hours: 'Mon-Sun: 11:00 AM - 11:00 PM'
    },
    {
      id: 3,
      name: 'Uptown Branch',
      address: '789 North Boulevard, Uptown',
      phone: '(555) 345-6789',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM'
    },
    {
      id: 4,
      name: 'Southside Branch',
      address: '321 South Lane, Southside',
      phone: '(555) 456-7890',
      hours: 'Mon-Thu: 11:00 AM - 10:00 PM, Fri-Sun: 11:00 AM - 11:00 PM'
    }
  ];

  return (
    <div className="flex-grow">
      <div className="bg-amber-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Locations</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our convenient locations
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map(location => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-amber-700 mb-4">{location.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🕒</span>
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-600">{location.hours}</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-semibold">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}