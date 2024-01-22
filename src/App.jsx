import { Routes, Route, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  return (
    <div>
      <nav className="flex justify-between my-3 px-48">
        <Link to="/" className="font-semibold">
          Catálogo
        </Link>
        <Link to="/cart">
          <IoCartOutline size={25} />
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
