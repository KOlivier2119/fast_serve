import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-white shadow-md">
      <nav className="flex justify-between items-center w-full max-w-7xl px-6 py-4">
        <h1 className="text-[#396C03] font-semibold text-2xl">FoodTime</h1>

        <div className="flex gap-6 text-[#3F3F3F] font-medium">
          <Link href="/" className="hover:text-[#396C03] transition duration-300">Home</Link>
          <Link href="/blog" className="hover:text-[#396C03] transition-colors duration-300">Blog</Link>
          <Link href="/about" className="hover:text-[#396C03] transition-colors duration-300">About Us</Link>
          <select name="language" className="border rounded-md px-3 py-1 focus:outline-none">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="SN">SN</option>
          </select>
        </div>

        <div className="flex gap-5 items-center">
          <Link
            href="/login"
            className="bg-[#396C03] text-white font-medium rounded-full py-2 px-6 transition duration-300 hover:bg-[#2e5202] active:scale-95"
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
