import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const addToCart = (item) => {
    setCartItems((prev) => {
      // Check if item already exists in cart
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        // Increase quantity of existing item
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      // Add new item with quantity 1
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === id);
      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity by 1
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      // If quantity is 1, remove completely
      return prev.filter((i) => i.id !== id);
    });
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);