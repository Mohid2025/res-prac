import React from 'react';

export default function Catalog() {
  const menuItems = [
    { id: 1, name: 'Classic Burger', price: '$12.99', category: 'Mains', description: 'Juicy beef patty with fresh toppings' },
    { id: 2, name: 'Margherita Pizza', price: '$14.99', category: 'Mains', description: 'Fresh mozzarella and basil' },
    { id: 3, name: 'Caesar Salad', price: '$8.99', category: 'Starters', description: 'Crisp romaine with parmesan' },
    { id: 4, name: 'Pasta Carbonara', price: '$13.99', category: 'Mains', description: 'Creamy Italian classic' },
    { id: 5, name: 'Tiramisu', price: '$6.99', category: 'Desserts', description: 'Traditional Italian dessert' },
    { id: 6, name: 'Chicken Wings', price: '$9.99', category: 'Starters', description: 'Crispy wings with sauce' },
    { id: 7, name: 'Chocolate Cake', price: '$7.99', category: 'Desserts', description: 'Rich and decadent' },
    { id: 8, name: 'Grilled Salmon', price: '$18.99', category: 'Mains', description: 'Fresh Atlantic salmon' },
  ];

  return (
    <div className="flex-grow">
      <div className="bg-amber-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Menu</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Explore our delicious selection of dishes
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl">
                {item.category === 'Mains' && '🍽️'}
                {item.category === 'Starters' && '🥗'}
                {item.category === 'Desserts' && '🍰'}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-amber-700 mb-2">{item.category}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}