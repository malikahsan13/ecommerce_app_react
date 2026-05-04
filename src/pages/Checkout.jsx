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
            <form action="" className="space-y-6">
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {key == "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key == "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-500"
                  />
                </div>
              ))}

              <div className="pt-6">
                <button type="submit" className="w-full py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items_center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider" />
                <Zap className="w-6 h-6" />
                <span>Proceed Securely</span>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
