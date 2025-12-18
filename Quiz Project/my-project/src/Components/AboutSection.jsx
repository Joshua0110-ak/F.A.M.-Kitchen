import React, { useState, useEffect, useRef } from "react";
import { FaUtensils, FaUsers, FaUserFriends, FaStar } from "react-icons/fa";

const AboutSection = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [menusCount, setMenusCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const sectionRef = useRef(null);

  const animateCount = (target, setter, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(18, setYearsCount, 1500);
          animateCount(100, setMenusCount, 1800);
          animateCount(50, setStaffCount, 1200);
          animateCount(15000, setCustomersCount, 2000);
        }
      },
      { threshold: 0.2 } // Trigger earlier for better mobile experience
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 space-y-16 bg-gradient-to-b from-white to-[#c8a97e]/10">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        
        {/* Images - Visible and Responsive on all screens */}
        <div className="flex gap-4 md:gap-6 w-full lg:flex-1 justify-center order-2 lg:order-1">
          <div className="flex flex-col">
            <img
              src="https://preview.colorlib.com/theme/feliciano/images/about.jpg"
              alt="Chef preparing dish"
              className="w-full max-w-[160px] sm:max-w-[240px] md:max-w-[280px] h-[250px] sm:h-[350px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </div>
          <div className="flex flex-col pt-8 md:pt-12">
            <img
              src="https://preview.colorlib.com/theme/feliciano/images/about-1.jpg"
              alt="Chef cooking vegetables"
              className="w-full max-w-[160px] sm:max-w-[240px] md:max-w-[280px] h-[250px] sm:h-[350px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:flex-1 text-center lg:text-left order-1 lg:order-2">
          <span className="inline-block px-4 py-1.5 bg-[#c8a97e]/20 text-[#c8a97e] rounded-full mb-4 font-bold text-xs md:text-sm uppercase tracking-wider">
            Our Story
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="font-hand text-5xl md:text-6xl text-[#c8a97e]">About</span>
            <br />
            F.A.M. <span className="text-[#c8a97e]">Kitchen</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base max-w-lg mx-auto lg:mx-0">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mb-8 border-y border-[#c8a97e]/10 py-4">
            <div>
              <p className="text-[#c8a97e] font-bold text-xs uppercase tracking-tighter">Mon – Fri</p>
              <p className="font-bold text-gray-800">8 AM – 11 PM</p>
            </div>
            <div>
              <p className="text-[#c8a97e] font-bold text-xs uppercase tracking-tighter">Sat – Sun</p>
              <p className="font-bold text-gray-800">9 AM – 12 AM</p>
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-black text-[#c8a97e] hover:scale-105 transition-transform inline-block">
             09134347904
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
      >
        {[
          { icon: FaStar, value: yearsCount, label: "YEARS OF EXPERIENCE" },
          { icon: FaUtensils, value: menusCount, label: "MENUS / DISHES" },
          { icon: FaUserFriends, value: staffCount, label: "STAFFS" },
          { icon: FaUsers, value: customersCount.toLocaleString(), label: "HAPPY CUSTOMERS" },
        ].map(({ icon: Icon, value, label }, i) => (
          <div
            key={i}
            className="p-6 md:p-8 transition-all hover:-translate-y-2 duration-300 bg-white rounded-3xl shadow-sm border border-gray-50 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#c8a97e]/10 rounded-2xl flex items-center justify-center mb-4 rotate-3 group-hover:rotate-0 transition-transform">
              <Icon className="text-2xl text-[#c8a97e]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
              {value}
              <span className="text-[#c8a97e]">+</span>
            </h3>
            <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutSection;
