import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Scale,
  Droplets,
  Truck,
  Banknote,
  Wrench,
  Clock3,
  Cog,
  ShieldCheck,
  FileText,
  Lock,
  Landmark,
  BadgeCheck,
  Stamp,
  BookOpen,
  ScrollText,
  Settings,
  Waves,
  Snowflake,
  CircleDot,
  Plane,
  Ship,
  TruckIcon,
  Package,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    id: "automobiles",
    title: "Automobiles",
    icon: Car,
    accent: "bg-sky-50 text-sky-600",
    accentBorder: "border-sky-100",
    description:
      "Comprehensive automobile solutions including car sales, expert servicing, vintage car restoration, spare parts, and custom modifications.",
    features: [
      { icon: Car, name: "Cars Sale & Service", desc: "Buy quality pre-owned and new vehicles with full-service support" },
      { icon: Clock3, name: "Vintage Cars & Spare Parts", desc: "Specialized expertise in classic and vintage automobile restoration" },
      { icon: Cog, name: "Car Modifications", desc: "Custom modifications to enhance performance and aesthetics" },
      { icon: Wrench, name: "Car Service & Maintenance", desc: "Regular maintenance, repair and comprehensive servicing" },
    ],
  },
  {
    id: "legal",
    title: "Bluestreak Legal",
    icon: Scale,
    accent: "bg-violet-50 text-violet-600",
    accentBorder: "border-violet-100",
    description:
      "Expert legal consultancy spanning civil, criminal, and corporate law, with dedicated IP protection and estate planning services.",
    features: [
      { icon: Scale, name: "Civil, Criminal & Corporate", desc: "Full-spectrum legal representation across all major practice areas" },
      { icon: FileText, name: "Contract Management", desc: "Drafting, review, and management of all types of legal contracts" },
      { icon: Lock, name: "Data Safeguards", desc: "Protecting your business data with robust legal frameworks" },
      { icon: Landmark, name: "Estate & Succession Planning", desc: "Comprehensive estate planning and succession advisory services" },
      { icon: ShieldCheck, name: "Trusteeship Services", desc: "Professional trusteeship and fiduciary management" },
      { icon: Stamp, name: "Trademark & Patent", desc: "Intellectual property registration, protection and enforcement" },
      { icon: BookOpen, name: "Copyrights", desc: "Copyright registration, licensing, and infringement defense" },
      { icon: ScrollText, name: "Legal Documentation", desc: "Comprehensive legal documentation and compliance support" },
    ],
  },
  {
    id: "lubricants",
    title: "Lubricants & Oils",
    icon: Droplets,
    accent: "bg-amber-50 text-amber-600",
    accentBorder: "border-amber-100",
    description:
      "Manufacturing premium oils for all car and heavy transport needs, with options ranging from semi-synthetic to fully synthetic formulations.",
    features: [
      { icon: Droplets, name: "Engine Oil", desc: "Semi-synthetic and fully synthetic engine oils for all vehicle types" },
      { icon: Settings, name: "Gear Oil", desc: "High-performance gear oils for smooth transmission operation" },
      { icon: CircleDot, name: "Brake Oil", desc: "DOT-certified brake fluids for reliable stopping power" },
      { icon: Snowflake, name: "Antifreeze Radiator Coolant", desc: "Available in Blue, Green, Pink, and Red variants" },
      { icon: Waves, name: "Hydraulic Oil", desc: "Industrial and automotive hydraulic fluids" },
      { icon: BadgeCheck, name: "Grease", desc: "Multi-purpose and specialty greases for all applications" },
    ],
  },
  {
    id: "transport",
    title: "Transport & Cargo",
    icon: Truck,
    accent: "bg-emerald-50 text-emerald-600",
    accentBorder: "border-emerald-100",
    description:
      "Reliable transport and cargo services across India via air, water, and road, with a growing fleet and competitive rental options.",
    features: [
      { icon: Plane, name: "Air Freight", desc: "Fast and reliable air shipment services across the country" },
      { icon: Ship, name: "Water Transport", desc: "Cost-effective shipping solutions via waterways" },
      { icon: TruckIcon, name: "Road Transport", desc: "Nationwide road logistics with a growing modern fleet" },
      { icon: Package, name: "Rentals", desc: "Flexible vehicle rental options for transport needs" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&h=500&fit=crop"
          alt="Industrial services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-[13px] font-semibold uppercase tracking-wider mb-3">
            What we offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Explore our diverse range of services across automobiles, legal,
            lubricants, transport, and financial solutions.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 md:py-24 ${idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-center gap-3.5 mb-3">
              <div className={`w-10 h-10 ${section.accent} rounded-lg flex items-center justify-center`}>
                <section.icon className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-[1.75rem] font-bold text-slate-900 tracking-tight">
                {section.title}
              </h2>
            </div>
            <p className="text-slate-500 text-[15px] mb-12 max-w-2xl leading-relaxed">
              {section.description}
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {section.features.map((feat) => (
                <div
                  key={feat.name}
                  className={`rounded-xl p-5 bg-white border ${section.accentBorder} hover:shadow-md hover:shadow-slate-100 transition-all duration-200`}
                >
                  <div className={`w-9 h-9 ${section.accent} rounded-lg flex items-center justify-center mb-3.5`}>
                    <feat.icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-slate-900 mb-1">
                    {feat.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Loans CTA */}
      <section className="py-24 bg-brand-950">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mx-auto mb-5">
            <Banknote className="w-6 h-6 text-brand-300" />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Loans &amp; Financial Services
          </h2>
          <p className="mt-3 text-brand-200/70 text-[15px] leading-relaxed">
            Quick and secure loans against gold, vehicles, and valuable assets.
            Fast approvals with competitive interest rates.
          </p>
          <Link
            href="/loans"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-brand-700 text-[14px] font-semibold rounded-lg hover:bg-brand-50 transition-colors"
          >
            Explore Loan Options
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
