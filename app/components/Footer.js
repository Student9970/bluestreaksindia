import Image from "next/image";
import Link from "next/link";
import { LOCAL } from "@/lib/site-images";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partnership", href: "/partnership" },
  { name: "Sell a Car", href: "/loans" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Automobiles", href: "/services#automobiles" },
  { name: "Legal Services", href: "/services#legal" },
  { name: "Lubricants & Oils", href: "/services#lubricants" },
  { name: "Transport & Cargo", href: "/services#transport" },
  { name: "Sell a Car", href: "/loans" },
  { name: "Trustee Services", href: "/services#legal" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950">
      {/* Gold accent line */}
      <div className="h-[3px] bg-linear-to-r from-brand-600 via-gold-400 to-brand-600" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4 mb-5">
              <div className="bg-white rounded-lg px-5 py-3.5 w-fit shadow-sm">
                <Image
                  src={LOCAL.logo}
                  alt="Bluestreak"
                  width={300}
                  height={80}
                  className="h-12 sm:h-14 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-white tracking-tight leading-tight">
                  Bluestreak Group
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase leading-tight">
                  India Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[13.5px] leading-relaxed max-w-xs">
              A diversified business group delivering premium solutions across
              automobiles, lubricants, legal advisory, transport &amp; cargo,
              and financial services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11.5px] font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-[11.5px] font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Our Businesses
            </h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[11.5px] font-semibold text-gold-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400">
                  info@bluestreakindia.com
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400">
                  Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-slate-500">
            &copy; {new Date().getFullYear()} Bluestreak India Private Limited.
            All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
