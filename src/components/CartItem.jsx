import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="flex gap-4 border rounded-lg shadow-lg p-3 w-80">
      <img src={item.image} alt={item.name} className="object-contain h-24" />
      <div className="flex flex-col justify-between w-52">
        <h3>{item.name}</h3>
        <p className="font-semibold">${item.price}</p>
        <div className="flex justify-between">
          <input
            type="text"
            value={item.quantity}
            onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
            className="border rounded-lg px-2 py-1 w-16"
          />
          <button onClick={() => onRemoveFromCart(item)}>
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
