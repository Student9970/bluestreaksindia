"use client";

import Image from "next/image";
import { useState } from "react";
import { SITE_IMG } from "@/lib/site-images";
import { toHeadingCase, toParagraphCase } from "@/lib/headingCase";
import {
  Car,
  ShieldCheck,
  Clock,
  Banknote,
  Check,
  Send,
  Sparkles,
} from "lucide-react";

const whySellWithUs = [
  {
    icon: Banknote,
    name: "Best Price",
    desc: "We offer competitive valuations so you get the true market value for your car.",
    image: SITE_IMG.financeMarkets(400, 280),
  },
  {
    icon: Clock,
    name: "Quick Process",
    desc: "From inspection to payment, we complete the sale in the shortest possible time.",
    image: SITE_IMG.signingAgreement(400, 280),
  },
  {
    icon: ShieldCheck,
    name: "Hassle-Free",
    desc: "No haggling, no middlemen. Transparent paperwork and a smooth handover.",
    image: SITE_IMG.executiveMeeting(400, 280),
  },
];

export default function SellCarPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carMake: "",
    carModel: "",
    year: "",
    variant: "",
    kmDriven: "",
    expectedPrice: "",
    city: "",
    state: "",
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
      const res = await fetch("/api/sell-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you! Our team will contact you shortly to discuss your car.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          carMake: "",
          carModel: "",
          year: "",
          variant: "",
          kmDriven: "",
          expectedPrice: "",
          city: "",
          state: "",
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
          src={SITE_IMG.luxuryVehicle(1400, 500)}
          alt="Premium pre-owned vehicle"
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
                Sell Your Car
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {toHeadingCase("Sell your car with confidence")}
            </h1>
            <p className="mt-4 text-brand-200/70 text-[16px] leading-relaxed">
              {toParagraphCase(
                "Get the best value for your car. Quick valuation, transparent process, and hassle-free sale with Bluestreak Group.",
              )}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Why sell with us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-gold-500 text-[12px] font-bold tracking-widest mb-3">
              {toHeadingCase("Why Choose Us")}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {toHeadingCase("Why sell your car with Bluestreak Group?")}
            </h2>
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <div className="h-px w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <div className="h-px w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whySellWithUs.map((item) => (
              <div
                key={item.name}
                className="premium-card group rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 bg-brand-950 rounded-lg flex items-center justify-center shadow-md">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold text-[15px]">{item.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {toParagraphCase(item.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 hidden lg:block space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={SITE_IMG.showroom(500, 400)}
                  alt="Vehicle appraisal"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3">
                {["Free valuation", "Same-day inspection", "Quick payment"].map((text) => (
                  <li key={text} className="flex items-center gap-2.5 text-[14px] text-slate-600 font-medium">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" strokeWidth={2.5} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="text-center lg:text-left mb-8">
                <p className="text-gold-500 text-[12px] font-bold tracking-widest mb-3">
                  {toHeadingCase("Submit Your Car Details")}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {toHeadingCase("Sell a car — enquiry form")}
                </h2>
                <div className="flex items-center gap-2.5 mt-4 lg:justify-start justify-center">
                  <div className="h-px w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <div className="h-px w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
                </div>
                <p className="mt-5 text-[15px] text-slate-500">
                  {toParagraphCase(
                    "Fill in your and your car's details. We'll get back with a valuation and next steps.",
                  )}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-7 sm:p-9">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Your Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" required />
                    <Field label="Phone *" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 95721 13880" required />
                  </div>
                  <div>
                    <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" />
                  </div>
                  <div className="border-t border-slate-100 pt-5 mt-2">
                    <p className="text-[12px] font-bold text-slate-500 tracking-wider mb-4">
                      {toHeadingCase("Car Details")}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Make *" name="carMake" value={formData.carMake} onChange={handleChange} placeholder="e.g. Maruti, Hyundai" required />
                      <Field label="Model *" name="carModel" value={formData.carModel} onChange={handleChange} placeholder="e.g. Swift, i20" required />
                      <Field label="Year" name="year" value={formData.year} onChange={handleChange} placeholder="e.g. 2020" />
                      <Field label="Variant" name="variant" value={formData.variant} onChange={handleChange} placeholder="e.g. Zxi, Sportz" />
                      <Field label="KM Driven" name="kmDriven" value={formData.kmDriven} onChange={handleChange} placeholder="e.g. 25000" />
                      <Field label="Expected Price (&#8377;)" name="expectedPrice" value={formData.expectedPrice} onChange={handleChange} placeholder="e.g. 5,00,000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" />
                    <Field label="State" name="state" value={formData.state} onChange={handleChange} placeholder="Your state" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 resize-none placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      placeholder="Any other details about the car..."
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
      <label className="block text-[13px] font-semibold text-slate-700 mb-2">{label}</label>
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
