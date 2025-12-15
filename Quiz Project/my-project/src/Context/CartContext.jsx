import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setIsOpen(true); // open the cart when item is added
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
