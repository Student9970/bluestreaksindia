import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  ShieldCheck,
  Car,
  Droplets,
  Truck,
  Banknote,
  Scale,
  Landmark,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const divisions = [
  {
    name: "Bluestreak Automobiles",
    subtitle: "Sales | Service | Spares",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    href: "/services#automobiles",
    points: [
      "New & Used Vehicles",
      "Vehicle Servicing",
      "Genuine Spare Parts",
    ],
  },
  {
    name: "Bluestreak Lubricants",
    subtitle: "Automotive Lubricant Solutions",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&h=400&fit=crop",
    href: "/products",
    points: ["Engine Oil", "Radiator Coolants", "Gear Oil"],
    footnote:
      "Wide Range of Engine Oils to Suit all Automotive and Heavy Vehicle Requirements",
  },
  {
    name: "Bluestreak Transports & Logistics",
    subtitle: "Cargo | Shipping | Hospitality",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    href: "/services#transport",
    points: [
      "Freight & Cargo",
      "Shipping & Export Logistics",
      "Hospitality & Travel",
    ],
  },
  {
    name: "Sell a Car",
    subtitle: "Best Price | Quick Sale | Hassle-Free",
    icon: Banknote,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    href: "/loans",
    points: [
      "Free Valuation",
      "Same-Day Inspection",
      "Transparent Paperwork",
      "Quick Payment",
    ],
  },
  {
    name: "Bluestreak Legal",
    subtitle: "Civil | Criminal | Corporate Law",
    icon: Scale,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    href: "/services#legal",
    points: [
      "Estate & Succession Planning",
      "Asset Protection",
      "Trademark & Patent",
    ],
  },
  {
    name: "Bluestreak Trustees",
    subtitle: "Fiduciary Services & Wealth Planning",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    href: "/services#legal",
    points: [
      "Private, Business & Charitable Trusts",
      "Cross Border Advisory",
      "Generational Wealth Structuring",
    ],
  },
];

const whyChoose = [
  {
    name: "Expertise & Experience",
    desc: "Decades of combined expertise across diversified business verticals, delivering proven results and industry-leading solutions.",
    icon: Award,
    accent: "from-amber-500 to-orange-600",
  },
  {
    name: "Global Reach",
    desc: "Multi-business operations across states and growing international presence, connecting markets and creating value.",
    icon: Globe,
    accent: "from-brand-500 to-brand-700",
  },
  {
    name: "Client-Centric Approach",
    desc: "Every client receives tailored solutions built on trust, transparency and a deep understanding of their unique needs.",
    icon: Users,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    name: "Integrity & Trust",
    desc: "Our commitment to ethical business practices forms the foundation of every relationship and transaction.",
    icon: ShieldCheck,
    accent: "from-violet-500 to-purple-700",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[580px] md:min-h-[660px]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=700&fit=crop"
          alt="Modern city skyline"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-950/80 via-brand-950/70 to-brand-950/90" />

        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[12px] font-semibold text-gold-300 uppercase tracking-widest">
              Bluestreak India Private Limited
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase">
            Bluestreak
            <span className="block gold-shimmer">Group</span>
          </h1>

          {/* Gold divider */}
          <div className="animate-fade-in-up-delay-2 mx-auto mt-6 mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-linear-to-r from-transparent to-gold-400/60" />
            <span className="w-2 h-2 rounded-full bg-gold-400/60" />
            <span className="w-12 h-px bg-linear-to-l from-transparent to-gold-400/60" />
          </div>

          <p className="animate-fade-in-up-delay-2 text-xl sm:text-2xl text-white/90 font-light italic tracking-wide">
            Building Businesses. Creating Global Value.
          </p>

          <p className="animate-fade-in-up-delay-3 mt-6 text-[15px] text-brand-200/70 leading-relaxed max-w-2xl mx-auto">
            A diversified business group operating across automobiles,
            lubricants, logistics, finance, legal advisory and fiduciary
            services.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#divisions"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-800 text-[14px] font-semibold rounded-lg hover:bg-gold-50 transition-all duration-300 shadow-xl shadow-black/15"
            >
              Explore Our Businesses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[14px] font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* ── Our Business Divisions ── */}
      <section id="divisions" className="py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-brand-600 text-[12px] font-bold uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Business Divisions
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
            </div>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed">
              A diversified portfolio of businesses delivering excellence across
              multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {divisions.map((div) => (
              <Link
                key={div.name}
                href={div.href}
                className="premium-card group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-brand-900/8 hover:-translate-y-1 transition-all duration-400"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-950/80 via-brand-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 bg-white/15 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                        <div.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-widest">
                        {div.subtitle}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold text-white leading-snug">
                      {div.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {div.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-[13.5px] text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {div.footnote && (
                    <p className="mt-4 pt-3 border-t border-slate-100 text-[12px] text-slate-400 italic leading-relaxed">
                      {div.footnote}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Bluestreak Group ── */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-600 text-[12px] font-bold uppercase tracking-[0.2em] mb-3">
              Our Promise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Bluestreak Group?
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${item.accent} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2.5">
                  {item.name}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-brand-950 via-brand-900 to-brand-950" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-widest">
              Partner With Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Build Something
            <span className="gold-shimmer"> Great?</span>
          </h2>
          <p className="mt-5 text-brand-200/60 text-[15px] leading-relaxed">
            Whether you need automobile services, legal counsel, lubricants, or
            logistics &mdash; Bluestreak Group has you covered.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/dealership"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-800 text-[14px] font-semibold rounded-lg hover:bg-gold-50 transition-all duration-300 shadow-lg shadow-black/15"
            >
              Become a Dealer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[14px] font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
