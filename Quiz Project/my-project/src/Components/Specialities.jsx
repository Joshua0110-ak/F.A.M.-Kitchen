import React from 'react';
import { useCart } from "../Context/CartContext.jsx";

const Specialities = () => {
  const { addToCart } = useCart();
  
  const menuItems = [
    {
      id: "spec-1", // Changed to string ID to avoid clashing with Menu IDs
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&h=300&fit=crop",
      name: "Grilled Beef with potatoes", // Changed from title to name
      price: 29, // Changed from "$29" to 29 (Number)
      description: "Meat, Potatoes, Rice, Tomato"
    },
    {
      id: "spec-2",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      name: "Chocolate Dessert", // Changed from title to name
      price: 29,
      description: "Chocolate, Cream, Berries, Sugar"
    },
    {
      id: "spec-3",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      name: "Fresh Salmon",
      price: 29,
      description: "Fish, Lemon, Herbs, Vegetables"
    },
    {
      id: "spec-4",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      name: "Italian Pizza",
      price: 29,
      description: "Cheese, Tomato, Basil, Dough"
    },
    {
      id: "spec-5",
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop',
      name: 'Seafood Paella',
      price: 29,
      description: 'Spanish saffron rice with shrimp, mussels, calamari, and chorizo',
    },
    {
      id: "spec-6",
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
      name: 'Chicken Marsala',
      price: 32,
      description: 'Pan-seared chicken breast, mushroom Marsala wine sauce, creamy polenta',
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl md:text-6xl font-hand text-[#C4A572] mb-2">
          Featured Dishes
        </h2>
      </div>

      <div className="max-w-7xl mx-auto lg:mx-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 sm:h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-xl font-semibold text-[#C4A572] ml-4">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#C4A572] text-white px-6 py-2.5 rounded hover:bg-[#B39562] transition-colors w-fit font-medium"
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialities;