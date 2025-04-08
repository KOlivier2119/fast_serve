"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaGlobe,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const [position, setPosition] = React.useState("bottom");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-[#396C03] shadow-md" : "bg-[#396C03]"
      } text-white transition-all duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="rounded-full p-2 mr-3 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#396C03"
              className="w-8 h-8"
            >
              <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">FastServe</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <FaTimes size={20} className="text-[#396C03]" />
          ) : (
            <FaBars size={20} />
          )}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLink href="/" label="Home" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/about" label="About Us" />

          {/* Language Selector */}
          <div className="relative group px-3 py-2 mx-1">
            {/* Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer text-white hover:text-[#FF8B00] transition duration-200">
                  <FaGlobe className="text-[#FF8B00] text-[15px]" />
                  <span className="text-xs font-medium">EN</span>
                  <FaChevronDown className="text-[10px] opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-[150px] bg-[#fff] border border-[#888787] rounded-md shadow-lg overflow-hidden py-1"
                align="end"
                sideOffset={5}
              >
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                >
                  <DropdownMenuRadioItem
                    value="en"
                    className="px-2 py-1 text-xs text-[#333] hover:bg-[#3F3F3F] focus:bg-[#3F3F3F] cursor-pointer transition-colors"
                  >
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="fr"
                    className="px-2 py-1 text-xs text-[#333] hover:bg-[#3F3F3F] focus:bg-[#3F3F3F] cursor-pointer transition-colors"
                  >
                    Français
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="es"
                    className="px-2 py-1 text-xs text-[#333] hover:bg-[#3F3F3F] focus:bg-[#3F3F3F] cursor-pointer transition-colors"
                  >
                    Español
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-white text-[#396C03] font-medium rounded-full py-2 px-6 transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:shadow-white/30 active:scale-95 ml-2"
          >
            Login
          </Link>

          {/* Cart Button */}
          <Link
            href="/cart"
            className="relative ml-2 bg-[#FF8B00] rounded-full p-3 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:shadow-[#FF8B00]/30 active:scale-95 group"
            aria-label="Shopping cart"
          >
            <FaShoppingCart className="text-white text-lg group-hover:scale-110 transition-transform duration-200" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#FF8B00] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#FF8B00] shadow-sm">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-20 px-6 pb-6 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 text-gray-800 font-medium text-lg">
            <MobileNavLink
              href="/"
              label="Home"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/blog"
              label="Blog"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/about"
              label="About Us"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Language Selector - Mobile */}
            <div className="py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-[#396C03]" />
                  <span className="font-medium">Language</span>
                </div>
                <select
                  name="language"
                  className="appearance-none bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-[#396C03] text-sm"
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
              className="bg-[#396C03] text-white font-medium rounded-full py-3 px-6 transition-all duration-300 hover:bg-[#2A5102] active:scale-95 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center gap-2 bg-[#FF8B00] text-white rounded-full py-3 px-6 transition-all duration-300 hover:bg-[#E07A00] active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart className="text-lg" />
              <span>View Cart</span>
              {cartItems > 0 && (
                <span className="bg-white text-[#FF8B00] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border border-white ml-1">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 mx-1 font-medium text-white hover:text-[#FF8B00] transition-colors duration-300 group"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF8B00] opacity-0 group-hover:w-4/5 group-hover:opacity-100 transition-all duration-300 rounded-full"></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="relative py-3 border-b border-gray-200 flex items-center justify-between text-gray-800 hover:text-[#396C03] transition-colors duration-300"
      onClick={onClick}
    >
      <span>{label}</span>
      <span className="text-[#396C03] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        →
      </span>
    </Link>
  );
};

export default Navbar;
