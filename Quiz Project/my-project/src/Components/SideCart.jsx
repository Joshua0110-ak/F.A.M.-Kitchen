import React, { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";
import { FaTrash, FaShoppingBag, FaCartArrowDown, FaPlus, FaMinus, FaEraser, FaCheckCircle } from "react-icons/fa";

export default function SideCart() {
  const { cartItems, isOpen, toggleCart, removeFromCart, addToCart, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleWhatsAppOrder = () => {
    // Your verified Nigerian number (International format)
    const phoneNumber = "2349134347904"; 
    
    // Formats the list: "• 2x Grilled Beef"
    const itemsList = cartItems
      .map((item) => `• ${(item.quantity || 1)}x ${item.name || item.title}`)
      .join("\n");

    const totalPrice = cartItems.reduce((sum, item) => {
      const p = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) : item.price;
      return sum + (p * (item.quantity || 1));
    }, 0);

    const message = `Hello F.A.M. Kitchen! I'd like to place an order:\n\n${itemsList}\n\n*Total: $${totalPrice.toFixed(2)}*\n\nPlease confirm my order!`;
    
    const wpUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    // Show success message animation
    setShowSuccess(true);
    
    // Open WhatsApp
    window.open(wpUrl, "_blank");

    // Hide success message after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  const totalPriceDisplay = cartItems.reduce((sum, item) => {
    const p = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) : item.price;
    return sum + (p * (item.quantity || 1));
  }, 0);

  return (
    <>
      {/* 1. Success Notification Toast */}
      {showSuccess && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[10001] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-[#25D366] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-bold border-2 border-white">
            <FaCheckCircle />
            Order sent to WhatsApp!
          </div>
        </div>
      )}

      {/* 2. Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300" 
          onClick={toggleCart} 
        />
      )}

      {/* 3. Cart Panel */}
      <div className={`fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white shadow-2xl z-[9999] transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="p-6 bg-[#c8a97e] text-white flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <FaCartArrowDown className="text-2xl" />
            <div>
              <h2 className="text-xl font-bold leading-none">Your Order</h2>
              <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1 font-semibold">F.A.M. Kitchen</p>
            </div>
          </div>
          <button onClick={toggleCart} className="text-4xl font-extralight hover:rotate-90 transition-transform p-2">&times;</button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-300">
              <FaShoppingBag size={60} className="mb-4 opacity-10" />
              <p className="text-lg font-medium">Your basket is empty</p>
              <button onClick={toggleCart} className="mt-4 text-[#c8a97e] font-bold border-b-2 border-[#c8a97e]">Browse Menu</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#c8a97e]/30 transition-colors">
                <img src={item.image} className="w-20 h-20 object-cover rounded-xl shadow-inner" alt={item.name} />
                
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-base mb-1">{item.name || item.title}</h4>
                  <p className="text-[#c8a97e] font-black text-lg">${item.price}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    {/* Qty Selector */}
                    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-3 py-1">
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="font-black text-gray-700 min-w-[15px] text-center text-sm">
                        {item.quantity || 1}
                      </span>
                      <button 
                        onClick={() => addToCart(item)} 
                        className="text-[#c8a97e] hover:scale-125 transition-transform p-1"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-15px_30px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={clearCart} 
                className="flex items-center gap-2 text-[10px] text-red-400 hover:text-red-600 font-bold uppercase tracking-tighter transition-colors"
              >
                <FaEraser /> Clear Cart
              </button>
              <div className="text-right">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Total:</p>
                <p className="text-3xl font-black text-gray-900">
                  ${totalPriceDisplay.toFixed(2)}
                </p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#e8a97e] text-white py-4 rounded-2xl font-black text-lg hover:bg-[#e1ae67] transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(37,211,102,0.2)] active:scale-95 group"
            >
              Order via WhatsApp
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}