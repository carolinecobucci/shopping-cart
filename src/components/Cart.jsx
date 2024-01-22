import CartItem from "./CartItem";
import CheckOutButton from "./CheckOutButton";

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col justify-center items-center w-full mb-20">
      <h1 className="text-2xl mt-3 mb-6">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={onUpdateCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
          <div className="flex flex-col gap-3 items-end mt-3 w-80">
            <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <CheckOutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
