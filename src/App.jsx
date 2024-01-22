import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYouPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart items to localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        toast.info(`${product.name} quantity updated!`);
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleUpdateCart = (product, quantity) => {
    toast.info(`${product.name} quantity updated!`);
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: +quantity } : item
      );
    });
  };

  const handleRemoveFromCart = (product) => {
    toast.error(`${product.name} was removed from cart!`);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  const handleCheckOut = () => {
    if (cartItems.length > 0) {
      toast.success("Purchase completed successfully!");
      setCartItems([]);
    } else {
      toast.error("Your cart is empty!");
    }
  };

  return (
    <div>
      <nav className="flex justify-between my-3 px-48 max-sm:px-8">
        <Link to="/" className="font-semibold text-lg">
          Catalog
        </Link>
        <Link to="/cart">
          <IoCartOutline size={25} />
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog onAddToCart={handleAddCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onUpdateCart={handleUpdateCart}
              onRemoveFromCart={handleRemoveFromCart}
              setCartItems={setCartItems}
              onCheckOut={handleCheckOut}
            />
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}

export default App;
