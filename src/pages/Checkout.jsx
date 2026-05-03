import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Package, MagPin } from "lucide-react";

const Checkout = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    state: "",
    city: "",
    zip: "",
  });

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Finalize Order{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col=span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center cpsace-x-3 border-b border-bray-700 pb-4">
              <MagPin className="w-7 h-7 text-orange-500" />
              <span>Shopping Information</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
