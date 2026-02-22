import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/products";
import { ChevronLeft, Tag, Zap, ShoppingCart } from "lucide-react";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = initialProducts.find((p) => p.id == id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link to={"/"}>
          <button className="flex items-center cursor-pointer text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg">
            <ChevronLeft />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tigher">
                {product.name}
              </h1>
            </div>
            <p className="text-3xl font-extrabold text-orange-400 mb-4">
              Rs. {product.price.toFixed(2)}
            </p>
            <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-orange-900/50 pb-2 flex items-center space-x-2">
              <Tag className="w-5 h-5 text-orange-500" />
              <span>Product Overview</span>
            </h2>
            <p className="text-gray=500 text-lg leading-relaxed mb-3">
              {product.description}
            </p>
            <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border-gray-700">
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5-h-5 text-orange-500" />
                <span>High Quality, Professional Grade Material</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5-h-5 text-orange-500" />
                <span>Comprehensive 1-Year Manufacturer Warrenty</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5-h-5 text-orange-500" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>

            <div className="mt-5 space-y-5 flex justify-center items-center flex-col">
              <button className="w-full py-3 bg-orange-600 rounded-full text-white font-bold rounnded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pint-600/50 tracking-wider">
                <ShoppingCart className="w-6 h-6" /> ADD TO CART
              </button>
              <Link
                to={"/"}
                className="w-full py-3 border-2 cursor-pointer rounded-full border-orange-600 text-orange-400 hover:bg-orange-700 transition duration-30 flex items-center justify-center space-x-2 transform hober:ring-4 hover:ring-pink-600/50 uppercase tracking-wider hover:text-white"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
