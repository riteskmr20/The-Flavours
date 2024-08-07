import Logo from "./Img/Logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const data = useContext(UserContext);

  {/* Subscribing to the store using selector */}
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo-container">
          <Link to="/">
            <img
              className="w-24 cursor-pointer transition-transform transform hover:scale-110"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            <li className="flex items-center space-x-2">
              
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link>
            </li>
            <li className="">
              <Link to="/cart" className="hover:text-yellow-500 transition-colors">Cart ({cartItems.length})</Link>
            </li>
          </ul>
          <button
            className="ml-6 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
