"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Car,
  Scale,
  Droplets,
  Truck,
  Banknote,
} from "lucide-react";

const serviceLinks = [
  { name: "Automobiles", href: "/services#automobiles", icon: Car },
  { name: "Legal Services", href: "/services#legal", icon: Scale },
  { name: "Lubricants & Oils", href: "/services#lubricants", icon: Droplets },
  { name: "Transport & Cargo", href: "/services#transport", icon: Truck },
  { name: "Loans", href: "/loans", icon: Banknote },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Products", href: "/products" },
  { name: "Dealership", href: "/dealership" },
  { name: "Finance", href: "/loans" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center shadow-sm shadow-brand-600/25">
              <span className="text-white font-extrabold text-sm tracking-tight">BS</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                Blue Streaks India
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] text-slate-600 hover:text-brand-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-150"
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-1.5">
                      <div className="w-52 bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-100 py-1.5">
                        {serviceLinks.map((sLink) => (
                          <Link
                            key={sLink.name}
                            href={sLink.href}
                            className="flex items-center gap-2.5 px-3.5 py-2 mx-1.5 text-[13px] text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors duration-150"
                          >
                            <sLink.icon className="w-3.5 h-3.5 text-slate-400" />
                            {sLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-[13.5px] text-slate-600 hover:text-brand-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-150"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-3 px-4.5 py-2 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors duration-150 shadow-sm shadow-brand-600/25"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-5 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-[14px] text-slate-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg font-medium transition-colors"
                  onClick={() => {
                    if (!link.hasDropdown) setMobileOpen(false);
                  }}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-3 mb-1 space-y-0.5 border-l-2 border-slate-100 pl-3">
                    {serviceLinks.map((sLink) => (
                      <Link
                        key={sLink.name}
                        href={sLink.href}
                        className="flex items-center gap-2 px-3 py-2 text-[13px] text-slate-500 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <sLink.icon className="w-3.5 h-3.5" />
                        {sLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block text-center py-2.5 bg-brand-600 text-white text-[13.5px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
