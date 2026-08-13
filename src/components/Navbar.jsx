import { FaChartBar } from "react-icons/fa";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "New Arrival", path: "/new-arrival" },
    { name: "Shop", path: "/shop" },
    { name: "About us", path: "/about-us" },
    { name: "Contact us", path: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <FaChartBar className="text-2xl text-blue-600" />
          <span className="text-2xl font-bold">RankPilot</span>
        </NavLink>

        {/* Navigation + Search */}
        <div className="hidden md:flex items-center gap-8">

          <nav className="flex items-center gap-8">

            <NavLink
              to="/home"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/new-arrival"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              New Arrival
            </NavLink>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <NavLink
  to="/shop"
  className="font-medium text-gray-700 hover:text-blue-600"
>
  Shop
</NavLink>

              {shopOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">

                  <NavLink
                    to="/shop/all"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    All Products
                  </NavLink>

                  <NavLink
                    to="/shop/men"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    Men
                  </NavLink>

                  <NavLink
                    to="/shop/women"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    Women
                  </NavLink>

                  <NavLink
                    to="/shop/accessories"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    Accessories
                  </NavLink>

                </div>
              )}
            </div>

            <NavLink
              to="/about-us"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact-us"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </NavLink>

          </nav>

          {/* Search Bar */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search Products ..."
              className="w-60 pl-11 pr-4 py-2 placeholder:text-sm rounded-full border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 hover:text-blue-600 transition"
          >
            <FiShoppingBag className="text-2xl" />

            {/* Cart Badge */}
            <span className="absolute -top-2 left-3 bg-pink-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>

            <span className="font-medium">₹0</span>
          </Link>

          {/* User */}
          <Link
            to="/login"
            className="hover:text-blue-600 transition"
          >
            <FiUser className="text-3xl" />
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;