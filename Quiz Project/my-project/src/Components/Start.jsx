import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const backgrounds = [
  "url('https://preview.colorlib.com/theme/feliciano/images/bg_1.jpg')",
  "url('https://preview.colorlib.com/theme/feliciano/images/bg_2.jpg')",
  "url('https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg')",
];

const titles = [
  "NUTRITIOUS & TASTY",
  "BEST RESTAURANT",
  "DELICIOUS SPECIALITIES",
];

export default function Start() {
  const [bgIndex, setBgIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [titleFade, setTitleFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleFade(false);
      setTimeout(() => {
        setBgIndex((prev) => {
          const next = (prev + 1) % backgrounds.length;
          setCurrentTitle(titles[next]);
          return next;
        });
        setTitleFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out transform scale-105"
        style={{ backgroundImage: backgrounds[bgIndex] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Static Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Welcome to <br />
          <span className="text-[#c8a97e]">F.A.M. Kitchen</span>
        </h1>

        {/* Changing Subtitle */}
        <p
          className={`text-[#c8a97e] text-lg md:text-xl font-light tracking-[0.3em] mb-4 uppercase transition-opacity duration-500 ${
            titleFade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentTitle}
        </p>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience culinary excellence with our carefully crafted dishes
          made from the finest ingredients
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/menu"
            className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center min-w-[200px]"
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            className="border-2 border-[#c8a97e] px-8 py-4 rounded-full text-[#c8a97e] font-semibold hover:bg-[#c8a97e] hover:text-white transition-all duration-300 text-center min-w-[200px]"
          >
            Book a Table
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#c8a97e] text-sm font-light tracking-wider">
              SCROLL DOWN
            </span>
            <svg
              className="w-6 h-6 text-[#c8a97e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
