import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const ChefTeam = () => {
  const chefs = [
    {
      id: 1,
      name: "John Smooth",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Rebeca Welson",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Kharl Branyt",
      role: "Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Luke Simon",
      role: "Chef",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
          <h1 className="text-4xl text-[#c8a97e] md:text-6xl font-hand mb-6 text-center">Our Chefs</h1>
      <div className="max-w-7xl mx-auto">
        {/* Grid of chef cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div 
              key={chef.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={chef.image} 
                  alt={chef.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {chef.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {chef.role}
                </p>
                
                {/* Social Icons */}
                <div className="flex justify-center gap-3">
                  <a 
                    href="#" 
                    className="text-[#c8a97e] hover:text-[#b8976e] transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-[#c8a97e] hover:text-[#b8976e] transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-[#c8a97e] hover:text-[#b8976e] transition-colors"
                    aria-label="Google Plus"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-[#c8a97e] hover:text-[#b8976e] transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefTeam;