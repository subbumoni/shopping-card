import React, { useState } from "react";
import data from "../assets/products.json";
import { Prod } from "./Prod";

export const Home = ({cart,setCart}) => {
  const [products] = useState(data);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Prod key={product.id} product=
          {product } cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};
