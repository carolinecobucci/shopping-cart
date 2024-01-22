import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOutButton = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    if (cartItems.length > 0) {
      toast.success("Purchase completed successfully!");
      navigate("/thank-you", { state: { cartItems } });
    } else {
      toast.error("Your cart is empty!");
    }
  };

  return (
    <button
      onClick={handleCheckOut}
      className="flex gap-2 border rounded-lg px-3 py-1 font-semibold text-green-900 bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-700 hover:text-green-400"
    >
      Checkout
    </button>
  );
};

export default CheckOutButton;
