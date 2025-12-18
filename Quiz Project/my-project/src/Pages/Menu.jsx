import React, { useState } from 'react';
import { useCart } from "../Context/CartContext.jsx";

const RestaurantMenu = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'breakfast', name: 'Breakfast' },
        { id: 'lunch', name: 'Lunch' },
        { id: 'dinner', name: 'Dinner' },
        { id: 'desserts', name: 'Desserts' },
        { id: 'drinks', name: 'Drinks' },
    ];

    const menuItems = [
        // BREAKFAST
        {
            id: 1,
            category: 'breakfast',
            name: 'Grilled Beef with Potatoes',
            description: 'Tender grilled beef served with roasted potatoes, fresh vegetables, and our signature sauce',
            price: 29,
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        },
        {
            id: 2,
            category: 'breakfast',
            name: 'Eggs Benedict',
            description: 'Poached eggs on English muffin with Canadian bacon and hollandaise sauce',
            price: 18,
            image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop',
        },
        {
            id: 3,
            category: 'breakfast',
            name: 'Pancake Stack',
            description: 'Fluffy buttermilk pancakes with maple syrup, fresh berries, and whipped cream',
            price: 15,
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
        },
        {
            id: 4,
            category: 'breakfast',
            name: 'Avocado Toast',
            description: 'Smashed avocado on sourdough with poached eggs, cherry tomatoes, and feta',
            price: 16,
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
        },
        {
            id: 5,
            category: 'breakfast',
            name: 'French Toast',
            description: 'Thick-cut brioche French toast with caramelized bananas and cinnamon butter',
            price: 17,
            image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop',
        },
        {
            id: 6,
            category: 'breakfast',
            name: 'Breakfast Burrito',
            description: 'Scrambled eggs, chorizo, cheese, peppers, and salsa in a flour tortilla',
            price: 14,
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
        },

        // LUNCH
        {
            id: 7,
            category: 'lunch',
            name: 'Italian Pizza Margherita',
            description: 'Fresh mozzarella, tomatoes, basil on wood-fired crispy dough',
            price: 24,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        },
        {
            id: 8,
            category: 'lunch',
            name: 'Caesar Salad',
            description: 'Romaine lettuce, parmesan cheese, croutons with classic Caesar dressing',
            price: 16,
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
        },
        {
            id: 9,
            category: 'lunch',
            name: 'Gourmet Burger',
            description: 'Angus beef patty, aged cheddar, caramelized onions, special sauce, brioche bun',
            price: 22,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        },
        {
            id: 10,
            category: 'lunch',
            name: 'Chicken Pesto Pasta',
            description: 'Grilled chicken, penne pasta, homemade basil pesto, sun-dried tomatoes',
            price: 21,
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        },
        {
            id: 11,
            category: 'lunch',
            name: 'Club Sandwich',
            description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted bread',
            price: 18,
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
        },
        {
            id: 12,
            category: 'lunch',
            name: 'Greek Salad Bowl',
            description: 'Mixed greens, olives, feta, cucumber, tomatoes, red onion, Greek dressing',
            price: 17,
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        },
        {
            id: 13,
            category: 'lunch',
            name: 'Fish Tacos',
            description: 'Grilled mahi-mahi, cabbage slaw, avocado crema, fresh lime on corn tortillas',
            price: 20,
            image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
        },

        // DINNER
        {
            id: 14,
            category: 'dinner',
            name: 'Grilled Salmon',
            description: 'Fresh Atlantic salmon with lemon butter, herbs, and seasonal vegetables',
            price: 35,
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
        },
        {
            id: 15,
            category: 'dinner',
            name: 'Lamb Chops',
            description: 'Grilled lamb chops with rosemary, garlic mashed potatoes, and mint sauce',
            price: 42,
            image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
        },
        {
            id: 16,
            category: 'dinner',
            name: 'Ribeye Steak',
            description: '12oz premium ribeye, truffle butter, roasted vegetables, crispy potatoes',
            price: 48,
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        },
        {
            id: 17,
            category: 'dinner',
            name: 'Seafood Paella',
            description: 'Spanish saffron rice with shrimp, mussels, calamari, and chorizo',
            price: 38,
            image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop',
        },
        {
            id: 18,
            category: 'dinner',
            name: 'Duck Confit',
            description: 'Slow-cooked duck leg, orange glaze, wild rice, roasted Brussels sprouts',
            price: 40,
            image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop',
        },
        {
            id: 19,
            category: 'dinner',
            name: 'Lobster Thermidor',
            description: 'Whole lobster tail with creamy cognac sauce, gratin topping, asparagus',
            price: 55,
            image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop',
        },
        {
            id: 20,
            category: 'dinner',
            name: 'Chicken Marsala',
            description: 'Pan-seared chicken breast, mushroom Marsala wine sauce, creamy polenta',
            price: 32,
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
        },
        {
            id: 21,
            category: 'dinner',
            name: 'Beef Wellington',
            description: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles',
            price: 52,
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        },

        // DESSERTS
        {
            id: 22,
            category: 'desserts',
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with molten center, vanilla ice cream and berry compote',
            price: 12,
            image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
        },
        {
            id: 23,
            category: 'desserts',
            name: 'Tiramisu',
            description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
            price: 14,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        },
        {
            id: 24,
            category: 'desserts',
            name: 'Crème Brûlée',
            description: 'Vanilla custard with caramelized sugar crust and fresh berries',
            price: 13,
            image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop',
        },
        {
            id: 25,
            category: 'desserts',
            name: 'New York Cheesecake',
            description: 'Creamy cheesecake with graham cracker crust and strawberry coulis',
            price: 11,
            image: 'https://images.unsplash.com/photo-1533134242820-d14d77c3f3db?w=400&h=300&fit=crop',
        },
        {
            id: 26,
            category: 'desserts',
            name: 'Apple Pie',
            description: 'Traditional apple pie with cinnamon, served warm with vanilla ice cream',
            price: 10,
            image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop',
        },
        {
            id: 27,
            category: 'desserts',
            name: 'Panna Cotta',
            description: 'Silky Italian cream dessert with mixed berry sauce and mint',
            price: 11,
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
        },

        // DRINKS
        {
            id: 28,
            category: 'drinks',
            name: 'Fresh Orange Juice',
            description: 'Freshly squeezed orange juice',
            price: 8,
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
        },
        {
            id: 29,
            category: 'drinks',
            name: 'Cappuccino',
            description: 'Rich espresso with steamed milk and foam',
            price: 6,
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        },
        {
            id: 30,
            category: 'drinks',
            name: 'Strawberry Smoothie',
            description: 'Blended strawberries, banana, yogurt, and honey',
            price: 9,
            image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
        },
        {
            id: 31,
            category: 'drinks',
            name: 'Iced Latte',
            description: 'Espresso with cold milk over ice, choice of flavor',
            price: 7,
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
        },
        {
            id: 32,
            category: 'drinks',
            name: 'Mojito Mocktail',
            description: 'Fresh mint, lime, soda water, and sugar',
            price: 8,
            image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
        },
        {
            id: 33,
            category: 'drinks',
            name: 'Hot Chocolate',
            description: 'Rich chocolate with whipped cream and chocolate shavings',
            price: 7,
            image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop',
        },
        {
            id: 34,
            category: 'drinks',
            name: 'Green Tea',
            description: 'Premium Japanese green tea, served hot or iced',
            price: 5,
            image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop',
        },
        {
            id: 35,
            category: 'drinks',
            name: 'Mango Lassi',
            description: 'Traditional Indian yogurt drink blended with sweet mangoes',
            price: 8,
            image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
        },
    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
            {/* Hero Header */}
            <div className="relative bg-linear-to-r from-black to-gray-900 text-white py-24 px-4">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=400&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mb-6"></div>
                    <h2 className="text-5xl md:text-7xl font-light italic text-[#c8a97e] mb-3" style={{ fontFamily: 'serif' }}>
                        Specialties
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Menu</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover our carefully crafted dishes made with the finest ingredients
                    </p>
                    <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#c8a97e] to-transparent mx-auto mt-6"></div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md shadow-md py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-linear-to-r from-[#c8a97e] to-[#b8976e] text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Items Grid */}
            <div className="max-w-7xl gap-4 lg:mx-10 mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className="flex flex-col sm:flex-row h-full">
                                {/* Image */}
                                <div className="w-full sm:w-2/5 relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-64 sm:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-[#c8a97e] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#c8a97e] transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            <span className="text-2xl font-bold text-[#c8a97e] ml-4 whitespace-nowrap">
                                                ${item.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-[#C4A572] text-white px-6 py-2.5 rounded hover:bg-[#B39562] transition-colors w-fit font-medium"
                                    >
                                        Order Now
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">No items found in this category</p>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default RestaurantMenu;