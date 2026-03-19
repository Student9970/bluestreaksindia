import Image from "next/image";
import {
  Target,
  Eye,
  Clock,
  Users,
  Briefcase,
  MapPin,
  Car,
  Scale,
  Droplets,
  Truck,
  Banknote,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "1000+", label: "Projects Completed", icon: Briefcase },
  { value: "200+", label: "Dealership Network", icon: MapPin },
];

const verticals = [
  {
    name: "Automobiles",
    desc: "Car sales, service, vintage cars, modifications & spare parts",
    icon: Car,
    gradient: "from-sky-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
  },
  {
    name: "Legal Services",
    desc: "Civil, criminal, corporate law, IP protection & estate planning",
    icon: Scale,
    gradient: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
  },
  {
    name: "Lubricants & Oils",
    desc: "Premium engine oils, gear oils, coolants & industrial lubricants",
    icon: Droplets,
    gradient: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  },
  {
    name: "Transport & Cargo",
    desc: "Pan-India logistics via air, water & road with fleet rentals",
    icon: Truck,
    gradient: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    name: "Sell a Car",
    desc: "Sell your car with best price, quick process and hassle-free paperwork",
    icon: Banknote,
    gradient: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop"
          alt="Modern office building"
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
              Our Company
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Discover the story behind Bluestreak Group and our commitment to
            excellence across multiple industries.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Story + Image + Stats */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Building Excellence Since Day One
              </h2>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
              </div>
              <div className="space-y-5 text-[15px] text-slate-600 leading-[1.85]">
                <p>
                  Bluestreak Group India Pvt. Ltd. is a diversified conglomerate
                  with a strong presence across automobiles, legal services, oil
                  manufacturing, transport &amp; cargo, and financial services.
                  Based in India, we have grown from a single-service startup to
                  a multi-vertical enterprise trusted by hundreds of clients and
                  partners nationwide.
                </p>
                <p>
                  Our journey has been defined by a relentless pursuit of
                  quality, innovation, and customer satisfaction. From
                  manufacturing premium lubricants to restoring vintage
                  automobiles, from providing expert legal counsel to delivering
                  cargo across the country &mdash; we bring the same commitment
                  to excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&h=500&fit=crop"
                  alt="Bluestreak Group headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-[15px] text-slate-600 leading-[1.85] max-w-3xl mb-16">
            With offices across major cities in India, we serve a growing
            network of dealers, clients, and partners who trust us for our
            integrity, expertise, and reliable service delivery.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="premium-card rounded-2xl border border-slate-200/80 bg-white p-6 text-center hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-linear-to-br from-brand-600 to-brand-800 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[12px] text-slate-500 mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with images */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Mission &amp; Vision
            </h2>
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <div className="h-px w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <div className="h-px w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="premium-card bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=350&fit=crop"
                  alt="Team brainstorming session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/30 to-transparent" />
              </div>
              <div className="p-8 -mt-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-linear-to-br from-brand-600 to-brand-800 rounded-xl flex items-center justify-center shadow-md">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Our Mission
                  </h2>
                </div>
                <p className="text-[15px] text-slate-600 leading-[1.85]">
                  To deliver high-quality products and services across automobiles,
                  legal consultancy, lubricant manufacturing, transport &amp;
                  cargo, and financial services &mdash; empowering businesses and
                  individuals with solutions they can trust.
                </p>
              </div>
            </div>
            <div className="premium-card bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=350&fit=crop"
                  alt="Strategic planning and growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/30 to-transparent" />
              </div>
              <div className="p-8 -mt-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-linear-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Our Vision
                  </h2>
                </div>
                <p className="text-[15px] text-slate-600 leading-[1.85]">
                  To be India&apos;s most trusted multi-industry conglomerate,
                  recognized for excellence in every vertical we operate in,
                  setting benchmarks for quality, transparency, and
                  customer-first approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image divider */}
      <section className="relative h-64 md:h-80">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=500&fit=crop"
          alt="Modern business district skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold tracking-tight text-center px-6">
            A Conglomerate Built on Trust &amp; Innovation
          </p>
        </div>
      </section>

      {/* Verticals with images */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Business Verticals
            </h2>
            <div className="flex items-center gap-2.5 mt-4">
              <div className="h-px flex-1 max-w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <div className="h-px flex-1 max-w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
            </div>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed">
              A diversified portfolio spanning five key industries, each backed
              by expert teams and proven processes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="premium-card group rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-3 left-3 w-9 h-9 bg-linear-to-br ${v.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                    <v.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-slate-900 mb-1">
                    {v.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&h=600&fit=crop"
          alt="Indian city skyline"
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
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-gold-400/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-widest">
              Our Presence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
            Across India, Close to You
          </h2>
          <p className="text-[15px] text-brand-200/60 leading-[1.85]">
            Bluestreak Group India Pvt. Ltd. operates from multiple offices
            across India, ensuring we are always close to our clients and
            partners. Our headquarters in Mumbai serves as the hub for all our
            operations, with regional offices enabling us to deliver prompt
            service across the country.
          </p>
        </div>
      </section>
    </>
  );
}
