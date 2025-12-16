import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar() {
  const { cartItems, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-sm shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-12 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-[#c8a97e] to-[#b8976e] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-2xl">F</span>
          </div>
          <div>
            <p className="font-extrabold text-2xl text-white tracking-wide">
              F.A.M. Kitchen
            </p>
            <p className="text-[#c8a97e] text-xs -mt-1 font-light">
              Fredrick • Adam • Marvellous
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
{["Home", "About", "Menu", "Blog", "Contact"].map((item) => (
  <Link
    key={item}
    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
    className="text-white hover:text-[#c8a97e] transition-all duration-300 text-sm font-medium tracking-wider"
  >
    {item}
  </Link>
))}

          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#c8a97e] to-[#b8976e] px-6 py-2 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a table
          </Link>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="relative text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            <FaCartArrowDown className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c8a97e] rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex gap-4 md:hidden">
          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="text-white py-2 px-3 font-semibold shadow-lg hover:bg-white/10 rounded-lg transition-all"
          >
            <FaCartArrowDown className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="ml-1 bg-[#c8a97e] rounded-full text-xs px-2 py-0.5">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm px-4 py-6 space-y-4">
          {["Home", "About", "Menu", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-white hover:text-[#c8a97e] transition-all duration-300 text-lg font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            to="/contact"
            className="block bg-gradient-to-r from-[#c8a97e] to-[#b8976e] px-6 py-3 rounded-full text-white font-semibold text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Book a table
          </Link>
        </div>
      )}
    </header>
  );
}
