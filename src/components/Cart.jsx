const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
