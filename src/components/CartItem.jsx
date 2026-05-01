import React from "react";
import { useCart } from "../context/CartContext";
import { X } from 'lucide-react'

const CartItem = ({item}) => {
  const {addToCart, removeFromCart} = useCart()
  const increaseQ = () => addToCart(item)
  const decreaseQ = () => removeFromCart(item.id)
  
  return <div className="flex flex-col items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50">
    <div className="flex items-center space-x-4 w-full sm:w-auto">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700" />
      <div>
        <h3 className="text-xl font-bold text-white line-clamp-1">{item.name}</h3>
      </div>
      <p>{item.price.tofixed(2)}</p>
    </div>

  </div>;
};

export default CartItem;
