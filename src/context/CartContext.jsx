import { createContext, useContext, useState } from "react";

const CartContext = createContext();
import { initialProducts } from "../data/products";
import React from "react";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;

  const addToCart = (product) => {};

  return (
    <CartContext.Provider value={{ products }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
