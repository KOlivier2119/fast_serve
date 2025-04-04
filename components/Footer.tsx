import type React from "react"
import Link from "next/link"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-br from-[#396C03] to-[#2A5001] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#396C03] font-bold text-xl">
                F
              </div>
              <h2 className="text-2xl font-bold">
                Fast<span className="text-[#FF8B00]">Serve</span>
              </h2>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed">
              FastServe is a modern food delivery application designed to provide users with a seamless and convenient
              way to order their favorite meals from local restaurants. Whether you're craving fast food, gourmet
              cuisine, or healthy options, FastServe connects you with a variety of eateries to satisfy your hunger in
              just a few taps.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#FF8B00]" />
                </div>
                <span>123 Delivery Street, Foodville, FD 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-[#FF8B00]" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#FF8B00]" />
                </div>
                <span>support@fastserve.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-1 bg-[#FF8B00] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/browse">Browse FastServe</FooterLink>
              <FooterLink href="/restaurants">Browse Restaurants</FooterLink>
              <FooterLink href="/register">Registration</FooterLink>
              <FooterLink href="/delivery">Delivery Areas</FooterLink>
              <FooterLink href="/faq">FAQs</FooterLink>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              About
              <span className="absolute left-0 bottom-0 w-1/2 h-1 bg-[#FF8B00] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/mission">Our Mission</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute left-0 bottom-0 w-1/2 h-1 bg-[#FF8B00] rounded-full"></span>
            </h3>
            <p className="text-gray-200 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>

            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF8B00] text-white placeholder:text-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FF8B00] hover:bg-[#E07A00] rounded-r-lg px-4 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FastServe. All rights reserved. Designed by KWIZERA Olivier
          </p>
          <div className="flex gap-4 text-sm text-gray-300">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper component for footer links
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="hover:text-[#FF8B00] transition-colors duration-200 flex items-center group">
        <span className="w-0 h-0.5 bg-[#FF8B00] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
        {children}
      </Link>
    </li>
  )
}

// Helper component for social media links
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <Link
      href={href}
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF8B00] transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

export default Footer

