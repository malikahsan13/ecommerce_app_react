import { createContext, useContext, useState } from "react";

const CartContext = createContext();
import { initialProducts } from "../data/products";
import React from "react";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if(existingItem){
        return prevCart.map((item) => item.id === product.id ? {...item, quantity:item.quantity + 1} : item)
      } else {
        return {...prevCart, {...product, quantity:1}}
      }
    })
  };

  return (
    <CartContext.Provider value={{ products }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
