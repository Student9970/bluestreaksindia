"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOCAL } from "@/lib/site-images";
import {
  Menu,
  X,
  ChevronDown,
  Scale,
  ShieldCheck,
  Droplets,
} from "lucide-react";

const serviceLinks = [
  { name: "Bluestreak Legal", href: "/services#legal", icon: Scale },
  { name: "Bluestreak Trustees", href: "/services#trustees", icon: ShieldCheck },
  { name: "Bluestreak Lubricants", href: "/services#lubricants", icon: Droplets },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Products", href: "/products" },
  { name: "Partnership", href: "/partnership" },
  { name: "Sell a Car", href: "/loans" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100/80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[96px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={LOCAL.logo}
              alt="Bluestreak"
              width={320}
              height={88}
              className="h-12 sm:h-16 w-auto max-w-[260px] sm:max-w-[320px] object-contain object-left"
              priority
            />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3">
              <span className="text-[15px] font-bold text-slate-900 tracking-tight leading-tight">
                Bluestreak Group
              </span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase leading-tight">
                India Pvt. Ltd.
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
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 py-2">
                        {serviceLinks.map((sLink) => (
                          <Link
                            key={sLink.name}
                            href={sLink.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 mx-1.5 text-[13px] text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors duration-150"
                          >
                            <sLink.icon className="w-4 h-4 text-slate-400" />
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
              className="ml-4 px-5 py-2.5 bg-brand-950 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-900 transition-colors duration-200 shadow-md shadow-brand-950/20"
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
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
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
                className="block text-center py-2.5 bg-brand-950 text-white text-[13.5px] font-semibold rounded-lg hover:bg-brand-900 transition-colors shadow-md shadow-brand-950/20"
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
