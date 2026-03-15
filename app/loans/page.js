"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Coins,
  Bike,
  Car,
  Landmark,
  Clock,
  FileCheck,
  Banknote,
  Send,
  Check,
  Percent,
} from "lucide-react";

const loanTypes = [
  {
    name: "Gold Loan",
    icon: Coins,
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    desc: "Get instant loans against your gold jewelry and ornaments with minimal documentation and quick disbursement.",
    features: ["Instant approval", "Minimal documentation", "Low interest rates"],
  },
  {
    name: "Bike Loan",
    icon: Bike,
    accent: "bg-sky-50 text-sky-600 border-sky-100",
    desc: "Finance your dream two-wheeler with flexible EMI options and competitive interest rates.",
    features: ["Flexible EMIs", "Quick processing", "New & used bikes"],
  },
  {
    name: "Car Loan",
    icon: Car,
    accent: "bg-violet-50 text-violet-600 border-violet-100",
    desc: "Drive home your dream car with easy financing for both new and pre-owned vehicles.",
    features: ["Up to 90% financing", "Long tenure options", "New & used cars"],
  },
  {
    name: "Asset Loan",
    icon: Landmark,
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    desc: "Leverage your valuable assets to get quick loans with attractive interest rates and terms.",
    features: ["Multiple asset types", "High loan value", "Flexible repayment"],
  },
];

const highlights = [
  { icon: Clock, name: "Fast Approvals", desc: "Loan approved within hours" },
  { icon: Percent, name: "Low Interest", desc: "Competitive rates across all types" },
  { icon: FileCheck, name: "Easy Documentation", desc: "Minimal paperwork required" },
  { icon: Banknote, name: "Quick Disbursement", desc: "Funds transferred swiftly" },
];

export default function LoansPage() {
  const [formData, setFormData] = useState({
    name: "", phone: "", loanType: "", assetType: "", loanAmount: "", district: "", state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you! Our team will contact you shortly with loan details.");
        setFormData({ name: "", phone: "", loanType: "", assetType: "", loanAmount: "", district: "", state: "" });
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
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=500&fit=crop"
          alt="Finance and banking"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-brand-300 text-[13px] font-semibold uppercase tracking-wider mb-3">
              Financial services
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Quick &amp; Secure Loans for Your Needs
            </h1>
            <p className="mt-4 text-brand-200/70 text-[16px] leading-relaxed">
              Get loans against gold, vehicles &amp; valuable assets with fast
              approvals and competitive interest rates.
            </p>
          </div>
        </div>
      </section>

      {/* Loan type cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loanTypes.map((loan) => (
              <div
                key={loan.name}
                className={`rounded-xl border p-5 ${loan.accent} bg-white hover:shadow-md hover:shadow-slate-100 transition-all duration-200`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <loan.icon className="w-5 h-5" />
                  <h3 className="text-[15px] font-semibold">{loan.name}</h3>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                  {loan.desc}
                </p>
                <ul className="space-y-1.5">
                  {loan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12.5px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-brand-50 border-y border-brand-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h) => (
              <div key={h.name} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white text-brand-600 rounded-lg flex items-center justify-center shrink-0 border border-brand-100">
                  <h.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[13px] font-semibold text-slate-900">{h.name}</h4>
                  <p className="text-[12px] text-slate-500">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-24 bg-slate-50/70">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Apply now
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Get a Loan Today!
            </h2>
            <p className="mt-2 text-[15px] text-slate-500">
              Fill in your details and our team will get back to you with the
              best loan options.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-100 p-7 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Loan Type</label>
                  <select name="loanType" value={formData.loanType} onChange={handleChange} required className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow">
                    <option value="">Select loan type</option>
                    <option value="gold">Gold Loan</option>
                    <option value="bike">Bike Loan</option>
                    <option value="car">Car Loan</option>
                    <option value="asset">Asset Loan</option>
                  </select>
                </div>
                <Field label="Asset Type" name="assetType" value={formData.assetType} onChange={handleChange} placeholder="e.g. Gold Jewelry, Car" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label="Loan Amount (&#8377;)" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="e.g. 5,00,000" required />
                <Field label="District" name="district" value={formData.district} onChange={handleChange} placeholder="Your district" />
                <Field label="State" name="state" value={formData.state} onChange={handleChange} placeholder="Your state" />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 h-11 bg-brand-600 text-white text-[14px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25">
                <Send className="w-4 h-4" />
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-700 mb-1.5">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow" />
    </div>
  );
}
