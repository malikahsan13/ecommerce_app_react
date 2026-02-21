import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product.image);
  return (
    <>
      <div
        className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full 
      transition duration-500 transform border border-gray-800
      hover:scale-[1.03] hover:shadow-orange-900/40"
      >
        <Link
          to={"/product"}
          className="relative cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
          />
          <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-tr-xl shadoe-lg">
            Rs. {product.price.toFixed(2)}
          </div>
        </Link>
        <div className="p5 flex flex-col grow">
          <Link to={"/product"}>
            <h3 className="text-xl font-bold text-white mb-2 cursor-pointer text-orange-400 transition duration-200 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-200 text-sm mb-4 line-clamp-3">
              {product.description}
            </p>
            <div>
              <span>{product.category}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
