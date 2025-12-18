import React, { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta Making",
      excerpt: "Discover the secrets behind creating authentic Italian pasta from scratch. Learn traditional techniques passed down through generations.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=500&fit=crop",
      author: "Chef Maria",
      date: "Dec 10, 2024",
      category: "Recipes",
      readTime: "5 min read",
      link: "https://www.seriouseats.com/how-to-make-fresh-pasta-dough-recipe"
    },
    {
      id: 2,
      title: "Farm to Table: Our Sourcing Philosophy",
      excerpt: "We believe in supporting local farmers and bringing the freshest ingredients to your plate. Here's how we do it.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop",
      author: "John Smooth",
      date: "Dec 8, 2024",
      category: "Behind the Scenes",
      readTime: "4 min read",
      link: "https://www.bonappetit.com/story/farm-to-table-movement"
    },
    {
      id: 3,
      title: "Wine Pairing 101: A Beginner's Guide",
      excerpt: "Master the basics of wine pairing with our expert sommelier's tips. Elevate your dining experience at home.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 5, 2024",
      category: "Tips & Tricks",
      readTime: "6 min read",
      link: "https://www.foodandwine.com/wine/wine-pairing-guide"
    },
    {
      id: 4,
      title: "Seasonal Menu: Winter Warmers",
      excerpt: "Explore our new winter menu featuring hearty stews, roasted vegetables, and comforting desserts perfect for cold evenings.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=500&fit=crop",
      author: "Chef Maria",
      date: "Dec 1, 2024",
      category: "Menu Updates",
      readTime: "3 min read",
      link: "https://www.epicurious.com/recipes-menus/winter-comfort-food-recipes-gallery"
    },
    {
      id: 5,
      title: "Sustainability in the Kitchen",
      excerpt: "How we reduce waste, compost, and create a more sustainable dining experience for our guests and the planet.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop",
      author: "John Smooth",
      date: "Nov 28, 2024",
      category: "Behind the Scenes",
      readTime: "5 min read",
      link: "https://www.theguardian.com/food/2023/oct/15/sustainable-restaurant-practices"
    },
    {
      id: 6,
      title: "Mastering the Perfect Steak",
      excerpt: "Temperature, timing, and technique - everything you need to know to cook restaurant-quality steak at home.",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=500&fit=crop",
      author: "Chef Maria",
      date: "Nov 25, 2024",
      category: "Recipes",
      readTime: "7 min read",
      link: "https://www.seriouseats.com/how-to-cook-steak-reverse-sear"
    }
  ];

  const categories = ['All', 'Recipes', 'Behind the Scenes', 'Tips & Tricks', 'Menu Updates'];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-hand text-[#c8a97e] mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stories, recipes, and insights from the F.A.M. Kitchen
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#c8a97e] focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No articles found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c8a97e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-[#c8a97e]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="text-[#c8a97e]" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c8a97e] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="flex items-center gap-2 text-[#c8a97e] font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 mb-8">
            Get the latest recipes, cooking tips, and restaurant updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button 
            className="bg-white text-[#c8a97e] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Blog;