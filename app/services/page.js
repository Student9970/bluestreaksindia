import Image from "next/image";
import SplitCtaBanner from "../components/SplitCtaBanner";
import { SITE_IMG } from "@/lib/site-images";
import {
  Scale,
  Droplets,
  ShieldCheck,
  Landmark,
  Stamp,
  Settings,
  Snowflake,
  CircleDot,
  Sparkles,
  Gavel,
  Building2,
  Gem,
  TrendingUp,
  Globe,
  Receipt,
  HandCoins,
  Users,
} from "lucide-react";

const sections = [
  {
    id: "legal",
    title: "Bluestreak Legal",
    gradient: "from-violet-500 to-purple-600",
    image: SITE_IMG.legalCounsel(800, 500),
    imageAlt: "Legal consultation office",
    description:
      "Expert legal consultancy spanning civil, criminal, and corporate law, with dedicated IP protection, estate planning, asset protection, and generational wealth structuring.",
    features: [
      {
        icon: Gavel,
        name: "Civil & Criminal",
        desc: "Full-spectrum civil and criminal legal representation and litigation support",
        image: SITE_IMG.civilJustice(400, 280),
      },
      {
        icon: Building2,
        name: "Corporate Law",
        desc: "Comprehensive corporate legal advisory, compliance, and governance services",
        image: SITE_IMG.heroSkyline(400, 280),
      },
      {
        icon: Landmark,
        name: "Estate & Succession Planning",
        desc: "Strategic estate planning and seamless succession advisory for families and businesses",
        image: SITE_IMG.estateKeys(400, 280),
      },
      {
        icon: ShieldCheck,
        name: "Asset Ring Fencing",
        desc: "Robust legal structures to protect and isolate your valuable assets from risks",
        image: SITE_IMG.wealthAdvisory(400, 280),
      },
      {
        icon: Gem,
        name: "Structuring Generational Wealth",
        desc: "Tailored frameworks to preserve and grow wealth across multiple generations",
        image: SITE_IMG.wealthPreservation(400, 280),
      },
      {
        icon: Stamp,
        name: "Trademark & Patent",
        desc: "Intellectual property registration, enforcement, and strategic IP portfolio management",
        image: SITE_IMG.ipInnovation(400, 280),
      },
    ],
  },
  {
    id: "trustees",
    title: "Bluestreak Trustees",
    gradient: "from-emerald-500 to-teal-600",
    image: SITE_IMG.financeMarkets(800, 500),
    imageAlt: "Professional fiduciary services",
    description:
      "Professional fiduciary services — acting as trustee and administrator for private, business, and charitable trusts, with cross-border advisory and taxation expertise.",
    features: [
      {
        icon: HandCoins,
        name: "Fiduciary Services",
        desc: "Professional management of assets held in trust with the highest standards of care and diligence",
        image: SITE_IMG.signingAgreement(400, 280),
      },
      {
        icon: Users,
        name: "Private Trust",
        desc: "Acting as trustee and administrator for private family trusts to safeguard personal wealth",
        image: SITE_IMG.boardroomDiscussion(400, 280),
      },
      {
        icon: Building2,
        name: "Business Trust",
        desc: "Trustee services for business trusts ensuring governance, compliance, and asset protection",
        image: SITE_IMG.fiduciaryTrust(400, 280),
      },
      {
        icon: Scale,
        name: "Charitable Trust",
        desc: "Administration and stewardship of charitable trusts aligned with philanthropic objectives",
        image: SITE_IMG.charitableImpact(400, 280),
      },
      {
        icon: Globe,
        name: "Cross Border Advisory",
        desc: "Expert advisory on multi-jurisdictional trust structures and international asset management",
        image: SITE_IMG.globalNetwork(400, 280),
      },
      {
        icon: Receipt,
        name: "Taxation",
        desc: "Strategic tax planning and compliance for trusts across domestic and international jurisdictions",
        image: SITE_IMG.wealthAdvisory(400, 280),
      },
    ],
  },
  {
    id: "lubricants",
    title: "Bluestreak Lubricants",
    gradient: "from-amber-500 to-orange-600",
    image: SITE_IMG.lubricantStudio(800, 500),
    imageAlt: "Industrial lubricant manufacturing",
    description:
      "Wide range of premium engine oils, radiator coolants, gear oils, and brake fluids — formulated to suit all automotive and heavy vehicle requirements.",
    features: [
      {
        icon: Droplets,
        name: "Engine Oil",
        desc: "Semi-synthetic and fully synthetic engine oils for cars, bikes, trucks, and heavy machinery",
        image: SITE_IMG.engineDetail(400, 280),
      },
      {
        icon: Snowflake,
        name: "Radiator Coolants",
        desc: "Antifreeze coolants available in Blue, Green, Pink, and Red variants for all vehicle types",
        image: SITE_IMG.heroManufacturing(400, 280),
      },
      {
        icon: Settings,
        name: "Gear Oil",
        desc: "High-performance gear oils engineered for smooth transmission and long-lasting protection",
        image: SITE_IMG.gearMechanism(400, 280),
      },
      {
        icon: CircleDot,
        name: "Brake Oil",
        desc: "DOT-certified brake fluids for reliable stopping power across all driving conditions",
        image: SITE_IMG.brakeStopping(400, 280),
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src={SITE_IMG.brandFacility(1400, 500)}
          alt="Bluestreak manufacturing facility"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-950/20 via-brand-950/30 to-brand-950/40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[12px] font-semibold text-gold-300 uppercase tracking-widest">
              What We Offer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight shadow-md">
            Our Services
          </h1>
          <p className="mt-4 text-brand-200 text-shadow-md text-[16px] max-w-xl leading-relaxed">
            Legal expertise, judiciary trust management, and premium lubricant
            manufacturing &mdash; three pillars of the Bluestreak Group.
          </p>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Service overview strip */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group relative h-48 rounded-2xl overflow-hidden"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-white text-[16px] font-bold tracking-wide">
                    {s.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 ${idx % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Header with image */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${idx % 2 === 1 ? "" : ""}`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                  {idx === 0
                    ? "Legal Services"
                    : idx === 1
                      ? "Fiduciary Services"
                      : "Manufacturing"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
                <div className="flex items-center gap-2.5 mt-4 mb-6">
                  <div className="h-px flex-1 max-w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <div className="h-px flex-1 max-w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div
                className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Sub-service cards with images */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${section.features.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-5`}
            >
              {section.features.map((feat) => (
                <div
                  key={feat.name}
                  className="premium-card group rounded-2xl bg-white border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={feat.image}
                      alt={feat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    <div
                      className={`absolute bottom-3 left-3 w-9 h-9 bg-linear-to-br ${section.gradient} rounded-lg flex items-center justify-center shadow-md`}
                    >
                      <feat.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[14px] font-bold text-slate-900 mb-1.5">
                      {feat.name}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <SplitCtaBanner
        imageSrc={SITE_IMG.strategyPlanning(1600, 900)}
        imageAlt="Executive consultation"
        badgeLabel="Get In Touch"
        title={
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Work with Us?
          </h2>
        }
        body={
          <p className="text-[15px] leading-relaxed text-white/90">
            Whether you need legal counsel, trust management, or premium
            lubricants &mdash; our team is ready to help. Reach out today.
          </p>
        }
        primaryAction={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
