import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Package, MagPin } from "lucide-react";

const Checkout = () => {
  const [deliverDetails, setDeliveryDetails] = useState({
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10"></div>
      </div>
    </>
  );
};

export default Checkout;
