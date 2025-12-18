import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c8a97e] to-[#b8976e] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">F.A.M. Kitchen</h3>
                <p className="text-[#c8a97e] text-xs font-light">Premium Dining</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/2349134347904"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="https://twitter.com/Marvellous0110"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1DA1F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/makinyemi501"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#E4405F] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c8a97e]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Menu", path: "/menu" },
                { name: "Blog", path: "/blog" },
                { name: "Book a Table", path: "/contact" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#c8a97e] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#c8a97e] transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c8a97e]">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaClock className="text-[#c8a97e] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Monday - Friday</p>
                  <p className="text-gray-400 text-sm">8:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-[#c8a97e] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Saturday - Sunday</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#c8a97e]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#c8a97e] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 leading-relaxed">
                    123 Restaurant Street<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#c8a97e] flex-shrink-0" />
                <a href="tel:+2349134347904" className="text-gray-400 hover:text-[#c8a97e] transition-colors">
                  +234 913 434 7904
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#c8a97e] flex-shrink-0" />
                <a href="mailto:makinyemi501@gmail.com" className="text-gray-400 hover:text-[#c8a97e] transition-colors">
                  makinyemi501@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} F.A.M. Kitchen. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#c8a97e] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c8a97e] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}