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
} from "lucide-react";

const whyPartner = [
  { icon: TrendingUp, name: "High Profit Margins", desc: "Attractive dealer margins on our complete product range" },
  { icon: ShieldCheck, name: "Quality Assurance", desc: "All products meet international quality and safety standards" },
  { icon: HeadphonesIcon, name: "Dedicated Support", desc: "Round-the-clock dealer support and training programs" },
  { icon: Package, name: "Inventory Support", desc: "Flexible inventory management with just-in-time delivery" },
  { icon: Award, name: "Brand Recognition", desc: "Leverage the trusted Blue Streaks India brand in your market" },
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
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=500&fit=crop"
          alt="Business partnership handshake"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <Handshake className="w-8 h-8 text-brand-300 mb-4" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Become Our Dealership Partner
            </h1>
            <p className="mt-4 text-brand-200/70 text-[16px] leading-relaxed">
              Join us for a profitable partnership. Expand your business with
              Blue Streaks India&apos;s trusted products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Partnership benefits
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Why Partner with Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPartner.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:shadow-md hover:shadow-slate-100 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-slate-900 mb-0.5">
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

      {/* How to Become a Dealer */}
      <section className="py-24 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Get started
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              How to Become a Dealer
            </h2>
            <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
              Simple 4-step process to start your dealership journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
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
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-xl border border-slate-100 p-6 text-center hover:shadow-lg hover:shadow-slate-100 hover:border-slate-200 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center text-[15px] font-bold mx-auto mb-4 shadow-sm shadow-brand-600/25">
                  {item.step}
                </div>
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">
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
            {/* Left — benefits */}
            <div className="lg:col-span-2">
              <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
                What you get
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
                Benefits We Offer
              </h2>

              <ul className="space-y-3.5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl bg-brand-50 border border-brand-100 p-5">
                <h3 className="text-[14px] font-semibold text-brand-900 mb-2">
                  Immediate enquiries
                </h3>
                <div className="space-y-2 text-[13px] text-brand-800/70">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    +91 98765 43210
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-100 p-7 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
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
                      <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                        Investment Capacity
                      </label>
                      <select
                        name="investmentCapacity"
                        value={formData.investmentCapacity}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
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
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 h-11 bg-brand-600 text-white text-[14px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25"
                  >
                    <Send className="w-4 h-4" />
                    Submit Enquiry
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
      <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
      />
    </div>
  );
}
