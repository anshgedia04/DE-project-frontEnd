import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../services/auth_Services/authservice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const {token} = useSelector((state) => state.auth);

  // if(token !== null){
  //   setIsLoggedIn(true);
  // }
  return (
    <nav className="bg-darkblue shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        
        {/* Logo Section */}
        <NavLink to="/" className="h-full">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.7Xyb8SalgYcraNsr-NAR1wHaEK&pid=Api&P=0&h=180"
            alt="Logo"
            className="h-full max-h-20 object-cover"
          />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-white font-medium">
          <NavLink
            to="/"
            className="hover:text-green-500 transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/contactus"
            className="hover:text-green-500 transition-all duration-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/aboutus"
            className="hover:text-green-500 transition-all duration-300"
          >
            About Us
          </NavLink>
        </div>

        {/* Cart & Auth Section */}
        <div className="flex items-center space-x-6">
          
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-white hover:text-green-500 transition-all" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-500 text-xs w-5 h-5 flex justify-center items-center rounded-full text-darkblue font-bold animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* Authentication Buttons */}
          { token == null &&
            (<div className="flex space-x-4">
              <NavLink to="/login">
                <button className="bg-green-500 text-white px-4 py-2.5 rounded-full hover:bg-green-600 transition-all text-sm">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-green-500 hover:border-green-500 transition-all text-sm">
                  Signup
                </button>
              </NavLink>
            </div>)
          }


            { token !== null &&
              <button
              onClick={() => logout(navigate , dispatch)}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
            >
              Logout
            </button>
            }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
