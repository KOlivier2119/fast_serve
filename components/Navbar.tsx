"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="flex justify-center bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center w-full max-w-screen-xl px-4 md:px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-[#396C03] font-bold text-xl md:text-2xl italic">
            FastServe
          </h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#396C03] p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-8 text-[#3F3F3F] font-medium">
          <Link
            href="/"
            className="hover:text-[#396C03] transition duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#396C03] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#396C03] transition duration-300 relative group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#396C03] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="hover:text-[#396C03] transition duration-300 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#396C03] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Language Selector */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[#396C03] transition duration-300">
              <FaGlobe className="text-[#396C03]" />
              <select
                name="language"
                className="appearance-none bg-transparent border-none focus:outline-none cursor-pointer pr-5"
                aria-label="Select language"
              >
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="SN">SN</option>
              </select>
            </div>
          </div>
        </div>

        {/* Login & Cart - Desktop */}
        <div className="hidden md:flex gap-5 items-center">
          <Link
            href="/login"
            className="bg-[#396C03] text-white font-medium rounded-full py-2 px-6 transition duration-300 hover:bg-[#2e5202] active:scale-95 shadow-md"
          >
            Login
          </Link>
          <Link
            href="/cart"
            className="relative bg-[#396C03] rounded-full p-3 flex items-center justify-center transition duration-300 hover:bg-[#2e5202] active:scale-95 shadow-md group"
            aria-label="Shopping cart"
          >
            <FaShoppingCart className="text-white text-lg group-hover:scale-110 transition-transform duration-200" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col pt-20 px-6 pb-6 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-[#396C03]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>

            <div className="flex flex-col gap-6 text-[#3F3F3F] font-medium text-lg">
              <Link
                href="/"
                className="hover:text-[#396C03] transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#396C03] transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:text-[#396C03] transition duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Language Selector - Mobile */}
              <div className="py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-[#396C03]" />
                  <select
                    name="language"
                    className="appearance-none bg-transparent border-none focus:outline-none w-full"
                    aria-label="Select language"
                  >
                    <option value="EN">English</option>
                    <option value="FR">French</option>
                    <option value="SN">Spanish</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Login & Cart - Mobile */}
            <div className="mt-auto flex flex-col gap-4">
              <Link
                href="/login"
                className="bg-[#396C03] text-white font-medium rounded-full py-3 px-6 transition duration-300 hover:bg-[#2e5202] active:scale-95 shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/cart"
                className="flex items-center justify-center gap-2 border border-[#396C03] text-[#396C03] rounded-full py-3 px-6 transition duration-300 hover:bg-gray-50 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart className="text-lg" />
                <span>View Cart</span>
                {cartItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-1">
                    {cartItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
