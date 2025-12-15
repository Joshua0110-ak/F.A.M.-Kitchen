import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "James Daniel",
      role: "Customer",
      message:
        "Amazing food and wonderful atmosphere! Every dish tasted fresh and flavorful.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Regular Visitor",
      message:
        "The service is exceptional and the meals are always perfectly prepared.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      role: "Food Blogger",
      message:
        "A fantastic culinary experience! Highly recommended for food lovers.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-6xl text-[#c8a97e] md:text-6xl font-hand mb-6 text-center">Testimonials</span> 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#c8a97e]"
                />
              </div>
              <p className="text-gray-600 italic text-center mb-6">
                “{review.message}”
              </p>

              <h3 className="text-center text-lg font-semibold">
                {review.name}
              </h3>
              <p className="text-center text-[#c8a97e] text-sm">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
