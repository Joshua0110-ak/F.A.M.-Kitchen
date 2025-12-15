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
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 space-y-16 bg-gradient-to-b from-white to-[#c8a97e]/10">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Images - Fixed layout */}
        <div className="hidden lg:flex gap-6 flex-1 justify-center">
          <div className="flex flex-col gap-6">
            <img
              src="https://preview.colorlib.com/theme/feliciano/images/about.jpg"
              alt="Chef preparing dish"
              className="w-full max-w-[280px] h-[350px] object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="flex flex-col gap-6 pt-12">
            <img
              src="https://preview.colorlib.com/theme/feliciano/images/about-1.jpg"
              alt="Chef cooking vegetables"
              className="w-full max-w-[280px] h-[350px] object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-xl">
          <span className="inline-block px-4 py-2 bg-[#c8a97e]/20 text-[#c8a97e] rounded-full mb-4 font-semibold text-sm md:text-base">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="font-hand text-5xl md:text-6xl text-[#c8a97e]">About</span>
            <br />
            F.A.M. <span className="text-[#c8a97e]">Kitchen</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <p className="text-gray-800">
              <span className="font-bold text-[#c8a97e]">Mon – Fri</span>{" "}
              <span className="font-semibold">8 AM – 11 PM</span>
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-[#c8a97e]">Sat – Sun</span>{" "}
              <span className="font-semibold">9 AM – 12 AM</span>
            </p>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-[#c8a97e]">
            +1-978-123-4567
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center"
      >
        {[
          { icon: FaStar, value: yearsCount, label: "YEARS OF EXPERIENCE" },
          { icon: FaUtensils, value: menusCount, label: "MENUS / DISHES" },
          { icon: FaUserFriends, value: staffCount, label: "STAFFS" },
          { icon: FaUsers, value: customersCount.toLocaleString(), label: "HAPPY CUSTOMERS" },
        ].map(({ icon: Icon, value, label }, i) => (
          <div
            key={i}
            className="p-6 sm:p-8 transition hover:-translate-y-2 duration-300 bg-white rounded-2xl shadow-md"
          >
            <div className="w-16 h-16 bg-[#c8a97e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="text-2xl text-[#c8a97e]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {value}
              <span className="text-[#c8a97e]">+</span>
            </h3>
            <p className="text-gray-600 font-medium text-sm md:text-base">{label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutSection;