import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col border rounded-lg shadow-lg p-3 w-56 h-80">
      <img src={product.image} alt={product.name} className="object-contain h-48" />
      <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
      <p className="text-sm font-bold mt-2">${product.price}</p>
      <div className="flex justify-between mt-3 gap-3">
        <select
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border rounded-lg text-sm px-2 py-1"
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="flex gap-2 border rounded-lg text-sm px-3 py-1 text-green-900 bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-green-400"
        >
          <IoCartOutline size={20} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
