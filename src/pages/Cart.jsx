import React from "react";
import {useCart} from "../context/CartContext"
import {Link} from "react-router-dom"
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react"

const Cart = () => {
  const { cart, cartTotol } = useCart()
  return <>
    <div className="container mx-auto px-4 md:px-8 pt-8">
      <div className="flex items-center mb-10">
        <Link to={"/"} className="flex items-center text-gray-400 hover:text-orange-400 transition-duration-150 font-semibold text-lg">
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to Store</span>
        </Link>
      </div>
    </div>
  </>;
};

export default Cart;
