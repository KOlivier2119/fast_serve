"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu02Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="w-full bg-[#396C03] shadow-md">
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <Link href="/" aria-label="FastServe home">
            <Logo size={36} showWordmark={true} variant="default" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#FF8B00]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF8B00] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="text-sm font-semibold text-white/90 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-[#FF8B00] text-white hover:bg-[#E07A00] px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={18} color="white" strokeWidth={2} />
            ) : (
              <HugeiconsIcon icon={Menu02Icon} size={18} color="white" strokeWidth={2} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Logo size={32} showWordmark={true} variant="light" />
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={16} color="currentColor" strokeWidth={2} />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-[#396C03]/10 text-[#396C03]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#396C03]"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#396C03]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer footer actions */}
          <div className="px-4 py-6 border-t border-gray-100 space-y-3">
            <Link
              href="/login"
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-[#396C03] text-[#396C03] font-semibold text-sm hover:bg-[#396C03]/5 transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#396C03] text-white font-semibold text-sm hover:bg-[#2e5802] transition-colors duration-200 shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
