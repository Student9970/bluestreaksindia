import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Settings,
  Waves,
  Snowflake,
  CircleDot,
  Zap,
  Factory,
  HardHat,
  Gauge,
  Fuel,
  ShieldCheck,
  Users,
  Layers,
  HeadphonesIcon,
  Car,
  Scale,
  Truck,
  Banknote,
  ArrowRight,
  ChevronRight,
  Bike,
  IndianRupee,
  Calendar,
  MapPin,
} from "lucide-react";

const serviceCategories = [
  {
    name: "Automobiles",
    desc: "Cars sale, service, vintage cars, spare parts & modifications",
    icon: Car,
    href: "/services#automobiles",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    name: "Legal Services",
    desc: "Civil, criminal & corporate legal matters, IP protection, estate planning",
    icon: Scale,
    href: "/services#legal",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    name: "Lubricants & Oils",
    desc: "Engine oil, gear oil, brake oil, coolants & industrial lubricants",
    icon: Droplets,
    href: "/services#lubricants",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    name: "Transport & Cargo",
    desc: "All-India shipment via air, water & road with growing fleet",
    icon: Truck,
    href: "/services#transport",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Loans & Finance",
    desc: "Gold, bike, car & asset loans with quick approvals",
    icon: Banknote,
    href: "/loans",
    accent: "bg-rose-50 text-rose-600",
  },
];

const vehiclesForSale = [
  {
    name: "Hyundai Creta SX",
    type: "Car",
    year: 2023,
    spec: "1.5L Diesel, 22,000 km, Single Owner",
    price: "₹14.5 Lakh",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=260&fit=crop",
    tag: "Popular",
  },
  {
    name: "Maruti Suzuki Swift ZXi",
    type: "Car",
    year: 2022,
    spec: "1.2L Petrol, 30,000 km, Single Owner",
    price: "₹7.2 Lakh",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=260&fit=crop",
    tag: null,
  },
  {
    name: "Royal Enfield Classic 350",
    type: "Bike",
    year: 2023,
    spec: "350cc, 15,000 km, 2022 Model",
    price: "₹2.1 Lakh",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=260&fit=crop",
    tag: "New Arrival",
  },
  {
    name: "Honda City V CVT",
    type: "Car",
    year: 2024,
    spec: "1.5L Petrol, 8,500 km, Excellent Condition",
    price: "₹12.8 Lakh",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=260&fit=crop",
    tag: null,
  },
  {
    name: "KTM Duke 390",
    type: "Bike",
    year: 2023,
    spec: "373cc, 6,200 km, ABS, First Owner",
    price: "₹3.1 Lakh",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=260&fit=crop",
    tag: "Best Seller",
  },
  {
    name: "Tata Nexon EV Max",
    type: "Car",
    year: 2024,
    spec: "EV, 12,000 km, Full charge range 437 km",
    price: "₹18.7 Lakh",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=260&fit=crop",
    tag: "Electric",
  },
];

const products = [
  { name: "Engine Oil", icon: Droplets },
  { name: "Gear Oil", icon: Settings },
  { name: "Hydraulic Oil", icon: Waves },
  { name: "Coolant", icon: Snowflake },
  { name: "Grease", icon: CircleDot },
  { name: "Generator Oil", icon: Zap },
  { name: "Industrial Oil", icon: Factory },
  { name: "Road Bitumen", icon: HardHat },
  { name: "Auto Lubricants", icon: Gauge },
  { name: "Fuel Additives", icon: Fuel },
];

const features = [
  {
    name: "Quality Assurance",
    desc: "Every product meets the highest industry standards",
    icon: ShieldCheck,
  },
  {
    name: "Expert Team",
    desc: "Seasoned professionals across all our service verticals",
    icon: Users,
  },
  {
    name: "Wide Range",
    desc: "Comprehensive portfolio of products and services",
    icon: Layers,
  },
  {
    name: "Customer Support",
    desc: "Dedicated support team available when you need us",
    icon: HeadphonesIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px]">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&h=600&fit=crop"
          alt="Luxury car on the road"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-950/75" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-1.5 text-brand-300 text-[13px] font-medium tracking-wide mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Trusted across India since 2010
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
              Your Trusted Partner for{" "}
              <span className="text-brand-300">
                Oils, Automobiles &amp; Finance
              </span>
            </h1>
            <p className="mt-6 text-[17px] text-brand-200/80 leading-relaxed max-w-lg">
              Blue Streaks India delivers excellence across lubricants,
              automobile services, legal consultancy, transport &amp; cargo, and
              financial solutions nationwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 text-[14px] font-semibold rounded-lg hover:bg-brand-50 transition-colors shadow-lg shadow-black/10"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-[14px] font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              What we do
            </p>
            <h2 className="text-3xl sm:text-[2rem] font-bold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
              A diverse range of services to meet your business and personal
              needs across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((svc) => (
              <Link
                key={svc.name}
                href={svc.href}
                className="group relative rounded-xl p-6 border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 ${svc.accent} rounded-lg flex items-center justify-center mb-4`}
                >
                  <svc.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">
                  {svc.name}
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>
                <ChevronRight className="absolute top-6 right-5 w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cars & Bikes for Sale ── */}
      <section className="py-24 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div className="max-w-xl">
              <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
                Buy &amp; sell
              </p>
              <h2 className="text-3xl sm:text-[2rem] font-bold text-slate-900 tracking-tight">
                Cars &amp; Bikes for Sale
              </h2>
              <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
                Browse our curated selection of quality-checked cars and bikes
                available across major Indian cities.
              </p>
            </div>
            <Link
              href="/services#automobiles"
              className="inline-flex items-center gap-1.5 text-brand-600 text-[13.5px] font-semibold hover:text-brand-700 transition-colors shrink-0"
            >
              View all vehicles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vehiclesForSale.map((v) => (
              <div
                key={v.name}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {v.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-600 text-white text-[11px] font-semibold rounded-md shadow-sm">
                      {v.tag}
                    </span>
                  )}
                  <span
                    className={`absolute top-3 right-3 px-2 py-0.5 text-[11px] font-semibold rounded-md ${
                      v.type === "Bike"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-sky-50 text-sky-700"
                    }`}
                  >
                    {v.type === "Bike" ? (
                      <span className="inline-flex items-center gap-1">
                        <Bike className="w-3 h-3" /> Bike
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <Car className="w-3 h-3" /> Car
                      </span>
                    )}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-1">
                    {v.name}
                  </h3>
                  <p className="text-[12px] text-slate-400 mb-2.5">{v.spec}</p>
                  <div className="flex items-center gap-3 text-[13px] text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {v.year}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {v.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-bold text-brand-700 inline-flex items-center gap-0.5">
                      <IndianRupee className="w-4 h-4" />
                      {v.price.replace("₹", "")}
                    </span>
                    <Link
                      href="/contact"
                      className="text-[12.5px] font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition-colors"
                    >
                      Enquire <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Product range
            </p>
            <h2 className="text-3xl sm:text-[2rem] font-bold text-slate-900 tracking-tight">
              Our Products
            </h2>
            <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
              Manufacturing oil for all car and heavy transport needs &mdash;
              semi-synthetic, fully synthetic and more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {products.map((prod) => (
              <div
                key={prod.name}
                className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-xl border border-slate-100"
              >
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-3">
                  <prod.icon className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-medium text-slate-700">
                  {prod.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section className="py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {features.map((feat) => (
              <div key={feat.name} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center shrink-0 text-white shadow-sm shadow-brand-600/25">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-slate-900 mb-1">
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

      {/* ── CTA ── */}
      <section className="py-24 bg-brand-950">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-[2rem] font-bold text-white tracking-tight">
            Ready to Partner with Us?
          </h2>
          <p className="mt-4 text-brand-200/70 text-[15px] leading-relaxed">
            Whether you need automobile services, legal counsel, lubricants, or
            logistics &mdash; we&apos;ve got you covered.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/dealership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 text-[14px] font-semibold rounded-lg hover:bg-brand-50 transition-colors"
            >
              Become a Dealer
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-[14px] font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
