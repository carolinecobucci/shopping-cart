// import { useState, useEffect } from "react";
import productsData from "../data/products_mock.json";
import Product from "./Product";

const Catalog = ({ onAddToCart }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-20">
      <h1 className="text-2xl mt-3 mb-6">Products</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 w-3/5">
        {productsData.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
