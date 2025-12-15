import React from 'react';


const About = () => {
  const stats = [
    { icon: '🏆', label: 'Years of Excellence', value: '15+' },
    { icon: '👥', label: 'Happy Customers', value: '50K+' },
    { icon: '🍽️', label: 'Signature Dishes', value: '100+' },
    { icon: '⏰', label: 'Hours Open Daily', value: '18' },
  ];

  const values = [
    {
      icon: '🍽️',
      title: 'Quality Ingredients',
      description: 'We source only the finest, freshest ingredients from local farms and trusted suppliers.',
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our team of experienced chefs brings passion and creativity to every dish they create.',
    },
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Every meal is prepared with care, attention to detail, and genuine love for culinary arts.',
    },
    {
      icon: '🌟',
      title: 'Memorable Experience',
      description: 'We create more than meals – we craft unforgettable dining experiences for our guests.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=400&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-7xl font-light italic text-[#c8a97e] mb-3" style={{ fontFamily: 'serif' }}>
            Our Story
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About F.A.M. Kitchen</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Where passion meets flavor in every dish we serve
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              A Culinary Journey Since 2009
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              F.A.M. Kitchen was born from a simple dream: to create a place where food brings people together. 
              Founded by Fredrick, Adam, and Marvellous, our restaurant has become a beloved destination for exceptional dining.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Great food is more than sustenance – it's an art form, a way to celebrate life, and a bridge between cultures. 
              Our menu blends traditional recipes with modern culinary techniques to delight and surprise.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every ingredient is carefully selected, every dish thoughtfully prepared, and every guest warmly welcomed. 
              This is our passion, pride, and gift to the community.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                View Our Menu
              </button>
              <button className="border-2 border-[#c8a97e] text-[#c8a97e] px-8 py-4 rounded-full hover:bg-[#c8a97e] hover:text-white transition-all duration-300 font-semibold">
                Book a Table
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop" 
                alt="Restaurant interior"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" 
                alt="Chef cooking"
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" 
                alt="Food plating"
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=500&fit=crop" 
                alt="Restaurant ambiance"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us Special
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c8a97e] transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience F.A.M. Kitchen?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join us for an unforgettable dining experience that will delight your senses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg">
              Reserve Your Table
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
