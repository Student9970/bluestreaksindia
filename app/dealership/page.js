"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Handshake,
  TrendingUp,
  ShieldCheck,
  HeadphonesIcon,
  Package,
  Award,
  Users,
  MapPin,
  Phone,
  Send,
  Check,
  ClipboardList,
  PhoneCall,
  FileSignature,
  Rocket,
  Sparkles,
} from "lucide-react";

const whyPartner = [
  { icon: TrendingUp, name: "High Profit Margins", desc: "Attractive dealer margins on our complete product range" },
  { icon: ShieldCheck, name: "Quality Assurance", desc: "All products meet international quality and safety standards" },
  { icon: HeadphonesIcon, name: "Dedicated Support", desc: "Round-the-clock dealer support and training programs" },
  { icon: Package, name: "Inventory Support", desc: "Flexible inventory management with just-in-time delivery" },
  { icon: Award, name: "Brand Recognition", desc: "Leverage the trusted Bluestreak Group brand in your market" },
  { icon: Users, name: "Transparent Dealings", desc: "Clear, honest business practices with complete transparency" },
];

const benefits = [
  "Quality Assurance on all products",
  "Quantity Assortment for every order size",
  "Competitive pricing & dealer margins",
  "Flexible credit terms for partners",
  "Marketing support & brand collateral",
  "Dedicated account management",
  "Regular training & product updates",
  "Pan-India logistics support",
];

const steps = [
  {
    step: 1,
    title: "Fill the Form",
    desc: "Submit your details through our dealership enquiry form below.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Verification Call",
    desc: "Our team reviews your application and schedules a verification call.",
    icon: PhoneCall,
  },
  {
    step: 3,
    title: "Agreement Signing",
    desc: "Once approved, we finalize terms and sign the partnership agreement.",
    icon: FileSignature,
  },
  {
    step: 4,
    title: "Start Selling",
    desc: "Get your inventory, marketing materials, and start growing your business.",
    icon: Rocket,
  },
];

export default function DealerPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    currentLocation: "",
    investmentCapacity: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/dealership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you for your interest! We will contact you shortly.");
        setFormData({
          companyName: "",
          contactPerson: "",
          phone: "",
          email: "",
          currentLocation: "",
          investmentCapacity: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=500&fit=crop"
          alt="Business partnership handshake"
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
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[12px] font-semibold text-gold-300 uppercase tracking-widest">
                Partner With Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Become Our Dealership Partner
            </h1>
            <p className="mt-4 text-brand-200/70 text-[16px] leading-relaxed">
              Join us for a profitable partnership. Expand your business with
              Bluestreak Group&apos;s trusted products and services.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Why Partner — with image */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                Partnership Benefits
              </p>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Why Partner with Us
              </h2>
              <div className="flex items-center gap-2.5 mt-4 mb-6">
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Our dealer partners enjoy exceptional margins, dedicated support,
                and the backing of a trusted brand. We invest in your success
                with training, marketing materials, and flexible inventory
                management.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&h=450&fit=crop"
                alt="Business partnership meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartner.map((item) => (
              <div
                key={item.name}
                className="premium-card flex items-start gap-4 p-6 rounded-2xl border border-slate-200/80 bg-white hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-linear-to-br from-brand-600 to-brand-800 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image banner */}
      <section className="relative h-56 md:h-72">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=400&fit=crop"
          alt="Dealership showroom"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold tracking-tight text-center px-6">
            Join 200+ Dealers Across India
          </p>
        </div>
      </section>

      {/* How to Become a Dealer */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              How to Become a Dealer
            </h2>
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <div className="h-px w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <div className="h-px w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
            </div>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed">
              Simple 4-step process to start your dealership journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((item) => (
              <div
                key={item.step}
                className="premium-card relative bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-950 text-white rounded-full flex items-center justify-center text-[15px] font-bold mx-auto mb-4 shadow-lg shadow-brand-950/25">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-brand-100 to-brand-50 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Form */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — benefits + image */}
            <div className="lg:col-span-2">
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&h=400&fit=crop"
                  alt="Successful business partnership"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                What You Get
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
                Benefits We Offer
              </h2>

              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3.5">
                    <span className="w-6 h-6 bg-brand-950 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] text-slate-700 font-medium">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/50 border border-brand-100 p-6">
                <h3 className="text-[15px] font-bold text-brand-900 mb-3">
                  Immediate Enquiries
                </h3>
                <div className="space-y-2.5 text-[13px] text-brand-800/70">
                  <p className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-600" />
                    +91 98765 43210
                  </p>
                  <p className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-7 sm:p-9">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-7">
                  Dealership Enquiry Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your company name" required />
                    <Field label="Contact Person" name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Full name" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                    <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Location" name="currentLocation" value={formData.currentLocation} onChange={handleChange} placeholder="City, State" required />
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                        Investment Capacity
                      </label>
                      <select
                        name="investmentCapacity"
                        value={formData.investmentCapacity}
                        onChange={handleChange}
                        required
                        className="w-full h-11 px-4 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      >
                        <option value="">Select range</option>
                        <option value="below-5l">Below &#8377;5 Lakhs</option>
                        <option value="5l-10l">&#8377;5 &ndash; 10 Lakhs</option>
                        <option value="10l-25l">&#8377;10 &ndash; 25 Lakhs</option>
                        <option value="25l-50l">&#8377;25 &ndash; 50 Lakhs</option>
                        <option value="above-50l">Above &#8377;50 Lakhs</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 h-12 bg-brand-950 text-white text-[14px] font-bold rounded-xl hover:bg-brand-800 transition-all duration-200 shadow-lg shadow-brand-950/20 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-slate-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full h-11 px-4 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
      />
    </div>
  );
}
