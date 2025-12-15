import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { FaTrash, FaShoppingBag } from "react-icons/fa";

export default function SideCart() {
  const { cartItems, isOpen, toggleCart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleCart}
        ></div>
      )}

      {/* Side Cart */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-[#c8a97e] to-[#b8976e]">
          <div className="flex items-center gap-3">
            <FaShoppingBag className="text-white text-2xl" />
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          </div>
          <button
            onClick={toggleCart}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FaShoppingBag className="text-gray-400 text-4xl" />
              </div>
              <p className="text-gray-500 text-lg font-medium mb-2">
                Your cart is empty
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Add some delicious items to get started!
              </p>
              <Link
              to="/menu"
              onClick={toggleCart}
              className="block w-full bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-3 text-center"
            >
              Continue Shopping
            </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  {/* Item Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}

                  {/* Item Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#c8a97e] transition-colors">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                        {item.description}
                      </p>
                    )}
                    <p className="text-lg font-bold text-[#c8a97e]">
                      ${item.price}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:bg-red-50 rounded-lg p-2 h-fit transition-all duration-300 hover:scale-110"
                    title="Remove item"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal:</span>
              <span className="text-2xl font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Item Count */}
            <p className="text-sm text-gray-500 mb-4 text-center">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in cart
            </p>

            {/* Checkout Button */}
            <Link
              to="/contact"
              onClick={toggleCart}
              className="block w-full bg-gradient-to-r from-[#c8a97e] to-[#b8976e] text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-3 text-center"
            >
              Proceed to Checkout
            </Link>

            {/* Continue Shopping */}
            <Link
              to="/menu"
              onClick={toggleCart}
              className="block w-full border-2 border-[#c8a97e] text-[#c8a97e] py-3 rounded-full font-semibold hover:bg-[#c8a97e] hover:text-white transition-all duration-300 text-center"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}