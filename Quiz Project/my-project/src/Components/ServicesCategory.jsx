import React from "react";
import { FaBirthdayCake, FaHandshake, FaRing } from "react-icons/fa";

const CateringServices = () => {
  const services = [
    {
      icon: <FaBirthdayCake />,
      title: "Birthday Party",
      description: "Make your birthday unforgettable with our customized catering and themed setups."
    },
    {
      icon: <FaHandshake />,
      title: "Business Meetings",
      description: "Professional catering solutions to impress clients and keep your team energized."
    },
    {
      icon: <FaRing />,
      title: "Wedding Party",
      description: "Delicious dishes and elegant presentations to make your wedding day truly special."
    }
  ];

  return (
    <section className="px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
            <div className="font-hand text-6xl text-[#c8a97e]">Services</div>
            <div className="font-bold text-gray-900">Catering Services</div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl hover:border-[#c8a97e] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-[#c8a97e]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-[#c8a97e] text-2xl">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CateringServices;
