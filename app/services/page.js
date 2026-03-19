import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Droplets,
  ShieldCheck,
  Landmark,
  Stamp,
  Settings,
  Snowflake,
  CircleDot,
  ArrowRight,
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
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    imageAlt: "Legal consultation office",
    description:
      "Expert legal consultancy spanning civil, criminal, and corporate law, with dedicated IP protection, estate planning, asset protection, and generational wealth structuring.",
    features: [
      {
        icon: Gavel,
        name: "Civil & Criminal",
        desc: "Full-spectrum civil and criminal legal representation and litigation support",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=280&fit=crop",
      },
      {
        icon: Building2,
        name: "Corporate Law",
        desc: "Comprehensive corporate legal advisory, compliance, and governance services",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop",
      },
      {
        icon: Landmark,
        name: "Estate & Succession Planning",
        desc: "Strategic estate planning and seamless succession advisory for families and businesses",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=280&fit=crop",
      },
      {
        icon: ShieldCheck,
        name: "Asset Ring Fencing",
        desc: "Robust legal structures to protect and isolate your valuable assets from risks",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=280&fit=crop",
      },
      {
        icon: Gem,
        name: "Structuring Generational Wealth",
        desc: "Tailored frameworks to preserve and grow wealth across multiple generations",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=400&h=280&fit=crop",
      },
      {
        icon: Stamp,
        name: "Trademark & Patent",
        desc: "Intellectual property registration, enforcement, and strategic IP portfolio management",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=280&fit=crop",
      },
    ],
  },
  {
    id: "trustees",
    title: "Bluestreak Trustees",
    gradient: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=500&fit=crop",
    imageAlt: "Professional fiduciary services",
    description:
      "Professional fiduciary services — acting as trustee and administrator for private, business, and charitable trusts, with cross-border advisory and taxation expertise.",
    features: [
      {
        icon: HandCoins,
        name: "Fiduciary Services",
        desc: "Professional management of assets held in trust with the highest standards of care and diligence",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=280&fit=crop",
      },
      {
        icon: Users,
        name: "Private Trust",
        desc: "Acting as trustee and administrator for private family trusts to safeguard personal wealth",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=280&fit=crop",
      },
      {
        icon: Building2,
        name: "Business Trust",
        desc: "Trustee services for business trusts ensuring governance, compliance, and asset protection",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop",
      },
      {
        icon: Scale,
        name: "Charitable Trust",
        desc: "Administration and stewardship of charitable trusts aligned with philanthropic objectives",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=280&fit=crop",
      },
      {
        icon: Globe,
        name: "Cross Border Advisory",
        desc: "Expert advisory on multi-jurisdictional trust structures and international asset management",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=280&fit=crop",
      },
      {
        icon: Receipt,
        name: "Taxation",
        desc: "Strategic tax planning and compliance for trusts across domestic and international jurisdictions",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=280&fit=crop",
      },
    ],
  },
  {
    id: "lubricants",
    title: "Bluestreak Lubricants",
    gradient: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    imageAlt: "Industrial lubricant manufacturing",
    description:
      "Wide range of premium engine oils, radiator coolants, gear oils, and brake fluids — formulated to suit all automotive and heavy vehicle requirements.",
    features: [
      {
        icon: Droplets,
        name: "Engine Oil",
        desc: "Semi-synthetic and fully synthetic engine oils for cars, bikes, trucks, and heavy machinery",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=280&fit=crop",
      },
      {
        icon: Snowflake,
        name: "Radiator Coolants",
        desc: "Antifreeze coolants available in Blue, Green, Pink, and Red variants for all vehicle types",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=280&fit=crop",
      },
      {
        icon: Settings,
        name: "Gear Oil",
        desc: "High-performance gear oils engineered for smooth transmission and long-lasting protection",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400&h=280&fit=crop",
      },
      {
        icon: CircleDot,
        name: "Brake Oil",
        desc: "DOT-certified brake fluids for reliable stopping power across all driving conditions",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=280&fit=crop",
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
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&h=500&fit=crop"
          alt="Professional services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-950/80 via-brand-950/70 to-brand-950/90" />
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Legal expertise, fiduciary trust management, and premium lubricant
            manufacturing &mdash; three pillars of the Bluestreak Group.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
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
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${idx % 2 === 1 ? "" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                  {idx === 0 ? "Legal Services" : idx === 1 ? "Fiduciary Services" : "Manufacturing"}
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
              <div className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
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
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${section.features.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-5`}>
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
                    <div className={`absolute bottom-3 left-3 w-9 h-9 bg-linear-to-br ${section.gradient} rounded-lg flex items-center justify-center shadow-md`}>
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
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=600&fit=crop"
          alt="Professional consultation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/85" />
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Work with Us?
          </h2>
          <p className="mt-4 text-brand-200/60 text-[15px] leading-relaxed">
            Whether you need legal counsel, trust management, or premium
            lubricants &mdash; our team is ready to help. Reach out today.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-white text-brand-800 text-[14px] font-semibold rounded-lg hover:bg-gold-50 transition-all duration-300 shadow-lg shadow-black/15"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
