import { useLocation, useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col justify-center items-center m-auto border rounded-lg shadow-lg p-3 w-64 mt-20">
      <h1 className="text-2xl text-green-600 text-center mb-4">Purchase completed successfully!</h1>
      <ul className="flex flex-col items-center">
        {items.map((item) => (
          <li key={item.id} className="font-semibold">
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p className="font-bold text-lg mt-3">Total: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={() => navigate("/")}
        className="flex gap-2 border rounded-lg px-3 py-1 font-semibold text-green-900 bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-green-400 mt-8"
      >
        Back to catalog
      </button>
    </div>
  );
};

export default ThankYouPage;
