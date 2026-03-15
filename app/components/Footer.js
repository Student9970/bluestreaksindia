import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Become a Dealer", href: "/dealership" },
  { name: "Finance", href: "/loans" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Automobiles", href: "/services#automobiles" },
  { name: "Legal Services", href: "/services#legal" },
  { name: "Lubricants & Oils", href: "/services#lubricants" },
  { name: "Transport & Cargo", href: "/services#transport" },
  { name: "Loans & Finance", href: "/loans" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand — widest */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-xs tracking-tight">BS</span>
              </div>
              <span className="text-[15px] font-bold text-white tracking-tight">
                Blue Streaks India
              </span>
            </div>
            <p className="text-slate-400 text-[13.5px] leading-relaxed max-w-xs">
              Your trusted partner for premium lubricants, automobile services,
              legal consultancy, transport &amp; cargo, and financial solutions
              across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11.5px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
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
            <h3 className="text-[11.5px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Services
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
            <h3 className="text-[11.5px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-[13.5px] text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-[13.5px] text-slate-400">info@bluestreaksindia.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-[13.5px] text-slate-400">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span className="text-[13.5px] text-slate-400">Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-slate-500">
            &copy; {new Date().getFullYear()} Blue Streaks India. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
