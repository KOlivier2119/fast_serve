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
import { NAV_LINKS } from "@/lib/navigation";
import AuthNav from "./AuthNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#396C03]">
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <Link href="/" aria-label="FastServe home">
            <Logo size={36} showWordmark={true} variant="onGreen" />
          </Link>

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

          <AuthNav variant="desktop" />

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

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Logo size={32} showWordmark={true} variant="default" />
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={16} color="currentColor" strokeWidth={2} />
            </button>
          </div>

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

          <div className="px-4 py-6 border-t border-gray-100">
            <AuthNav variant="mobile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
