import Image from "next/image";
import Link from "next/link";
import SplitCtaBanner from "./components/SplitCtaBanner";
import { SITE_IMG } from "@/lib/site-images";
import { toHeadingCase, toParagraphCase } from "@/lib/headingCase";
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  ShieldCheck,
  Car,
  Droplets,
  Truck,
  CircleDollarSign,
  Scale,
  Landmark,
  ChevronRight,
  Sparkles,
  Factory,
  HeartHandshake,
} from "lucide-react";

const FACTORY_HERO = "/assets/images/bl_factory_1.PNG";
const FACTORY_SECTION = "/assets/images/bl_factory_2.PNG";

const divisions = [
  {
    name: "Bluestreak Automobiles",
    subtitle: "Sales | Service | Spares",
    icon: Car,
    image: SITE_IMG.showroom(600, 400),
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
    image: SITE_IMG.lubricantStudio(600, 400),
    href: "/products",
    points: ["Engine Oil", "Radiator Coolants", "Gear Oil"],
    footnote:
      "Wide Range of Engine Oils to Suit all Automotive and Heavy Vehicle Requirements",
  },
  {
    name: "Bluestreak Transports & Logistics",
    subtitle: "Cargo | Shipping | Hospitality",
    icon: Truck,
    image: SITE_IMG.portLogistics(600, 400),
    href: "/services#transport",
    points: [
      "Freight & Cargo",
      "Shipping & Export Logistics",
      "Hospitality & Travel",
    ],
  },
  {
    name: "Bluestreak Finance",
    subtitle: "Consultation | Advisory | Loans | Funding Assistance",
    icon: CircleDollarSign,
    image: SITE_IMG.strategyPlanning(600, 400),
    href: "/contact",
    points: [
      "Consultation",
      "Advisory",
      "Loans",
      "Funding Assistance",
    ],
  },
  {
    name: "Bluestreak Legal",
    subtitle: "Civil | Criminal | Corporate Law",
    icon: Scale,
    image: SITE_IMG.legalCounsel(600, 400),
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
    image: SITE_IMG.financeMarkets(600, 400),
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
          src={FACTORY_HERO}
          alt="Bluestreak Group manufacturing and operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-950/42 via-brand-950/32 to-brand-950/50" />

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
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/50 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-gold-300 filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.9))]" />
            <span className="text-[12px] font-semibold text-gold-200 uppercase tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_12px_rgba(0,0,0,0.65)]">
              Bluestreak India Private Limited
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-white [text-shadow:0_0_1px_rgba(0,0,0,0.9),0_1px_0_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.55)]">
              Bluestreak
            </span>
            <span className="block gold-shimmer">Group</span>
          </h1>

          {/* Gold divider */}
          <div className="animate-fade-in-up-delay-2 mx-auto mt-6 mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-linear-to-r from-transparent to-gold-400/60" />
            <span className="w-2 h-2 rounded-full bg-gold-400/60" />
            <span className="w-12 h-px bg-linear-to-l from-transparent to-gold-400/60" />
          </div>

          <p className="animate-fade-in-up-delay-2 text-xl sm:text-2xl text-white font-medium italic tracking-wide [text-shadow:0_0_1px_rgba(0,0,0,0.9),0_1px_3px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.65)]">
            {toParagraphCase(
              "Building Businesses. Creating Global Value.",
            )}
          </p>

          <p className="animate-fade-in-up-delay-3 mt-6 text-[15px] text-white leading-relaxed max-w-2xl mx-auto font-medium [text-shadow:0_0_1px_rgba(0,0,0,0.85),0_1px_2px_rgba(0,0,0,0.9),0_2px_20px_rgba(0,0,0,0.6)]">
            {toParagraphCase(
              "A diversified business group operating across automobiles, lubricants, logistics, finance, legal advisory and fiduciary services.",
            )}
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
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/80 text-white text-[14px] font-semibold rounded-lg hover:border-white transition-all duration-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_0_12px_rgba(0,0,0,0.55)]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* ── Our Business Divisions ── */}
      <section id="divisions" className="py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-brand-600 text-[12px] font-bold tracking-[0.2em] mb-3">
              {toParagraphCase("What we do")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {toHeadingCase("Our business divisions")}
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
            </div>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed">
              {toParagraphCase(
                "A diversified portfolio of businesses delivering excellence across multiple industries.",
              )}
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
                      <span className="text-[11px] font-semibold text-gold-300 tracking-widest">
                        {toHeadingCase(div.subtitle)}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold text-white leading-snug">
                      {toHeadingCase(div.name)}
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
                        {toParagraphCase(point)}
                      </li>
                    ))}
                  </ul>
                  {div.footnote && (
                    <p className="mt-4 pt-3 border-t border-slate-100 text-[12px] text-slate-400 italic leading-relaxed">
                      {toParagraphCase(div.footnote)}
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

      {/* ── Bluestreak Foundation teaser ── */}
      <section className="py-20 bg-linear-to-b from-emerald-50/80 to-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="premium-card rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-lg shadow-slate-200/30">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 min-h-[200px] md:min-h-0">
                <Image
                  src={SITE_IMG.charitableImpact(800, 560)}
                  alt="Community support and social impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-white/90 hidden md:block" />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-widest mb-4">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Bluestreak Foundation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {toHeadingCase("Giving back to society")}
                </h2>
                <p className="mt-4 text-slate-600 text-[15px] leading-relaxed">
                  {toParagraphCase(
                    "We dedicate a portion of our earnings to social causes — from old-age homes and living standards to orphanages and charitable outreach across the communities we serve.",
                  )}
                </p>
                <Link
                  href="/foundation"
                  className="inline-flex items-center gap-2 mt-6 text-[14px] font-semibold text-brand-700 hover:text-brand-800 w-fit"
                >
                  Learn more about the Foundation
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Bluestreak Group ── */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-600 text-[12px] font-bold tracking-[0.2em] mb-3">
              {toParagraphCase("Our promise")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {toHeadingCase("Why choose Bluestreak Group?")}
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
                  {toHeadingCase(item.name)}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {toParagraphCase(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing & scale ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-4/3 lg:aspect-auto lg:h-[min(420px,52vw)] max-h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40 border border-slate-200/80 ring-1 ring-black/5">
              <Image
                src={FACTORY_SECTION}
                alt="Bluestreak facility and production infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-[11px] font-bold uppercase tracking-widest mb-5">
                <Factory className="w-3.5 h-3.5" />
                Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {toHeadingCase("Built for quality at scale")}
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
                <span className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="w-8 h-[2px] bg-brand-600 rounded-full" />
              </div>
              <p className="mt-6 text-slate-600 text-[15px] leading-relaxed">
                {toParagraphCase(
                  "Our plants and facilities reflect the same discipline we bring to every vertical: modern processes, rigorous standards, and the capacity to serve partners and customers across India.",
                )}
              </p>
              <p className="mt-4 text-slate-500 text-[14px] leading-relaxed">
                {toParagraphCase(
                  "From lubricants to logistics and beyond, we invest in physical infrastructure so your business can rely on consistent supply, safety, and service.",
                )}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[14px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Discuss your requirements
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <SplitCtaBanner
        imageSrc={SITE_IMG.heroSkyline(1600, 900)}
        imageAlt="Infrastructure and scale"
        badgeLabel="Partner With Us"
        title={
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Build Something{" "}
            <span className="gold-shimmer">Great?</span>
          </h2>
        }
        body={
          <p className="text-[15px] leading-relaxed text-white/90">
            {toParagraphCase(
              "Whether you need automobile services, finance and advisory, legal counsel, lubricants, or logistics — Bluestreak Group has you covered.",
            )}
          </p>
        }
        primaryAction={{
          href: "/partnership",
          label: "Become a Partner",
        }}
        secondaryAction={{
          href: "/contact",
          label: "Get in Touch",
        }}
      />
    </>
  );
}
