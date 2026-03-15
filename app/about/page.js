import Image from "next/image";
import {
  Target,
  Eye,
  BookOpen,
  Clock,
  Users,
  Briefcase,
  MapPin,
  Car,
  Scale,
  Droplets,
  Truck,
  Banknote,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "1000+", label: "Projects Completed", icon: Briefcase },
  { value: "200+", label: "Dealership Network", icon: MapPin },
];

const verticals = [
  { name: "Automobiles", desc: "Car sales, service, vintage cars, modifications & spare parts", icon: Car, accent: "bg-sky-50 text-sky-600" },
  { name: "Legal Services", desc: "Civil, criminal, corporate law, IP protection & estate planning", icon: Scale, accent: "bg-violet-50 text-violet-600" },
  { name: "Lubricants & Oils", desc: "Premium engine oils, gear oils, coolants & industrial lubricants", icon: Droplets, accent: "bg-amber-50 text-amber-600" },
  { name: "Transport & Cargo", desc: "Pan-India logistics via air, water & road with fleet rentals", icon: Truck, accent: "bg-emerald-50 text-emerald-600" },
  { name: "Loans & Finance", desc: "Gold, vehicle & asset loans with fast approvals", icon: Banknote, accent: "bg-rose-50 text-rose-600" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=500&fit=crop"
          alt="Modern office building"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-[13px] font-semibold uppercase tracking-wider mb-3">
            Our company
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Discover the story behind Blue Streaks India and our commitment to
            excellence across multiple industries.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Story */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Our Story
                </h2>
              </div>
              <div className="space-y-4 text-[15px] text-slate-600 leading-[1.75]">
                <p>
                  Blue Streaks India is a diversified conglomerate with a strong
                  presence across automobiles, legal services, oil
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
                <p>
                  With offices across major cities in India, we serve a growing
                  network of dealers, clients, and partners who trust us for our
                  integrity, expertise, and reliable service delivery.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-100 bg-white p-6 text-center"
                  >
                    <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[12.5px] text-slate-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-100 p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Our Mission
                </h2>
              </div>
              <p className="text-[14.5px] text-slate-600 leading-[1.75]">
                To deliver high-quality products and services across automobiles,
                legal consultancy, lubricant manufacturing, transport &amp;
                cargo, and financial services &mdash; empowering businesses and
                individuals with solutions they can trust. We aim to build
                long-lasting relationships founded on integrity, innovation, and
                unmatched customer service.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-[14.5px] text-slate-600 leading-[1.75]">
                To be India&apos;s most trusted multi-industry conglomerate,
                recognized for excellence in every vertical we operate in. We
                envision expanding our footprint across the nation while
                maintaining our core values of quality, transparency, and
                customer-first approach, setting benchmarks for others to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Our expertise
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Business Verticals
            </h2>
            <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
              A diversified portfolio spanning five key industries, each backed
              by expert teams and proven processes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white"
              >
                <div className={`w-10 h-10 ${v.accent} rounded-lg flex items-center justify-center shrink-0`}>
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-slate-900 mb-0.5">
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

      {/* Offices */}
      <section className="py-24 bg-brand-50 border-y border-brand-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-6 h-6 text-brand-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
            Our Presence
          </h2>
          <p className="text-[15px] text-slate-600 leading-[1.75]">
            Blue Streaks India operates from multiple offices across India,
            ensuring we are always close to our clients and partners. Our
            headquarters in Mumbai serves as the hub for all our operations,
            with regional offices enabling us to deliver prompt service across
            the country. Our growing network of dealers and associates further
            extends our reach to every corner of the nation.
          </p>
        </div>
      </section>
    </>
  );
}
