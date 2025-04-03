import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center w-full max-w-screen-xl px-6 py-4">
        
        {/* Brand Name */}
        <h1 className="text-[#396C03] font-bold text-2xl">FoodTime</h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-[#3F3F3F] font-medium">
          <Link href="/" className="hover:text-[#396C03] transition duration-300">Home</Link>
          <Link href="/blog" className="hover:text-[#396C03] transition duration-300">Blog</Link>
          <Link href="/about" className="hover:text-[#396C03] transition duration-300">About Us</Link>
          
          {/* Language Selector */}
          <select 
            name="language" 
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 bg-white focus:border-[#396C03] focus:outline-none transition duration-300"
          >
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="SN">SN</option>
          </select>
        </div>

        {/* Login & Cart */}
        <div className="flex gap-5 items-center">
          <Link
            href="/login"
            className="bg-[#396C03] text-white font-medium rounded-full py-2 px-6 transition duration-300 hover:bg-[#2e5202] active:scale-95 shadow-md"
          >
            Login
          </Link>
          <Link
            href="/cart"
            className="bg-[#396C03] rounded-full p-3 flex items-center justify-center transition duration-300 hover:bg-[#2e5202] active:scale-95 shadow-md"
          >
            <FaShoppingCart className="text-white text-lg" />
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
