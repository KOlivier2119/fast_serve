import type React from "react"
import Link from "next/link"
import Logo from "./Logo"
import { NAV_LINKS } from "@/lib/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Facebook01Icon,
  TwitterIcon,
  InstagramIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#396C03] text-white mt-auto">
      <div className="section-inner py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size={36} showWordmark={true} variant="onGreen" />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Fast, reliable food delivery from your favorite local restaurants.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <SocialLink href="https://facebook.com" icon={<HugeiconsIcon icon={Facebook01Icon} size={18} color="white" strokeWidth={2} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<HugeiconsIcon icon={TwitterIcon} size={18} color="white" strokeWidth={2} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<HugeiconsIcon icon={InstagramIcon} size={18} color="white" strokeWidth={2} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<HugeiconsIcon icon={Linkedin01Icon} size={18} color="white" strokeWidth={2} />} label="LinkedIn" />
            </div>
            <p className="text-gray-200 text-sm">support@fastserve.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} FastServe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="text-gray-200 hover:text-[#FF8B00] transition-colors duration-200">
        {children}
      </Link>
    </li>
  )
}

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
