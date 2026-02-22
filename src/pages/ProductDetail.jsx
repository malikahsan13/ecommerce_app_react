import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/products";
import { ChevronLeft, Tag } from "lucide-react";
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
            <h2>
              <Tag />
              <span></span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
