import Image from "next/image";
import Link from "next/link";
import { LOCAL } from "@/lib/site-images";
import {
  Phone,
  Headset,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { toHeadingCase, toParagraphCase } from "@/lib/headingCase";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Foundation", href: "/foundation" },
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
                  Bluestreak
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase leading-tight">
                  India Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[13.5px] leading-relaxed max-w-xs">
              {toParagraphCase(
                "A diversified business group delivering premium solutions across automobiles, lubricants, legal advisory, transport and cargo, and financial services across India.",
              )}
            </p>
            <p className="text-slate-500 text-[12.5px] leading-relaxed max-w-xs mt-3">
              Through{" "}
              <Link
                href="/foundation"
                className="text-gold-400/90 hover:text-gold-300 transition-colors"
              >
                Bluestreak Foundation
              </Link>
              {", "}
              {toParagraphCase(
                "we channel part of our earnings into social causes and community support.",
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11.5px] font-semibold text-gold-400 tracking-wider mb-4">
              {toHeadingCase("Company")}
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
            <h3 className="text-[11.5px] font-semibold text-gold-400 tracking-wider mb-4">
              {toHeadingCase("Our businesses")}
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
            <h3 className="text-[11.5px] font-semibold text-gold-400 tracking-wider mb-4">
              {toHeadingCase("Contact")}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400 leading-relaxed">
                  +91 95721 13880
                  <br />
                  +91 90499 53517
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Headset className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400 leading-relaxed">
                  <span className="block text-[11px] font-semibold tracking-wider text-gold-500/90 mb-0.5">
                    {toHeadingCase("Grievances & Hotline")}
                  </span>
                  +91 95351 72871
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
                  {toParagraphCase(
                    "Lower Parel Mumbai, Maharashtra, India",
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-gold-400/70 shrink-0" />
                <span className="text-[13.5px] text-slate-400">
                  {toParagraphCase(
                    "Mon – Sat: 9:00 AM – 6:00 PM",
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-slate-500">
            &copy; {new Date().getFullYear()}{" "}
            {toParagraphCase(
              "Bluestreak India Private Limited. All rights reserved.",
            )}
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              {toHeadingCase("Privacy policy")}
            </a>
            <a
              href="#"
              className="text-[12.5px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              {toHeadingCase("Terms of service")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
