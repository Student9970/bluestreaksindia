"use client";

import Image from "next/image";
import { useState } from "react";
import { SITE_IMG } from "@/lib/site-images";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 98765 43211"],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@bluestreaksindia.com", "support@bluestreaksindia.com"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Bluestreak Group", "Mumbai, Maharashtra, India"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon \u2013 Sat: 9 AM \u2013 6 PM", "Sunday: Closed"],
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
          src={SITE_IMG.clientConsultation(1400, 500)}
          alt="Client consultation"
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
              Reach Out
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Have questions or need assistance? Reach out and our team will
            respond promptly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Info cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="premium-card rounded-2xl border border-slate-200/80 bg-white p-6 text-center hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-linear-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">
                  {info.title}
                </h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-[13px] text-slate-500">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Office Info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Office info + images */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={SITE_IMG.brandOffice(700, 400)}
                  alt="Bluestreak India Auto office"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-5 flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-linear-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  Our Office
                </h2>
                <div className="space-y-4 text-[14px] text-slate-600">
                  <p>
                    <span className="font-bold text-slate-800">
                      Bluestreak Group India Pvt. Ltd.
                    </span>
                    <br />
                    Mumbai, Maharashtra, India
                  </p>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                    +91 98765 43210
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                    info@bluestreaksindia.com
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={SITE_IMG.diverseTeam(400, 300)}
                    alt="Professional team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={SITE_IMG.boardroomDiscussion(400, 300)}
                    alt="Executive support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-linear-to-br from-brand-50 to-brand-100/50 border border-brand-100 p-6">
                <h3 className="text-[15px] font-bold text-brand-900 mb-2">
                  Careers at Bluestreak Group
                </h3>
                <p className="text-[13px] text-brand-800/70 mb-3">
                  Interested in joining our team? Send your resume at:
                </p>
                <a
                  href="mailto:careers@bluestreaksindia.com"
                  className="text-brand-700 text-[13px] font-semibold hover:underline"
                >
                  careers@bluestreaksindia.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
                Send a Message
              </p>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-5">
                Contact Form
              </h2>
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-7 sm:p-9">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    <div>
                      <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-11 px-4 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      >
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="automobiles">Automobiles</option>
                        <option value="legal">Legal Services</option>
                        <option value="lubricants">Lubricants &amp; Oils</option>
                        <option value="transport">Transport &amp; Cargo</option>
                        <option value="sell-car">Sell a Car</option>
                        <option value="dealership">Dealership Partnership</option>
                        <option value="careers">Careers</option>
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
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 resize-none placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 h-12 bg-brand-950 text-white text-[14px] font-bold rounded-xl hover:bg-brand-800 transition-all duration-200 shadow-lg shadow-brand-950/20 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image divider */}
      <section className="relative h-56 md:h-64">
        <Image
          src={SITE_IMG.heroSkyline(1400, 400)}
          alt="Business district"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-bold tracking-tight text-center px-6">
            We&apos;re Here to Help You Succeed
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-gold-500 text-[12px] font-bold uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-[2rem] font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <div className="h-px w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <div className="h-px w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
            </div>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed">
              Find quick answers to the most common queries about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                q: "What services do you offer?",
                a: "We offer automobiles, legal services, lubricant manufacturing, transport & cargo, and loan services across India.",
              },
              {
                q: "How can I become a dealer?",
                a: "Visit our Dealership page or contact us directly. We'll guide you through the partnership process.",
              },
              {
                q: "What are your working hours?",
                a: "We operate Monday through Saturday, 9:00 AM to 6:00 PM. Closed on Sundays.",
              },
              {
                q: "Do you offer pan-India delivery?",
                a: "Yes, we have a robust logistics network for delivering products and services across all major Indian cities.",
              },
              {
                q: "How can I sell my car to Bluestreak Group?",
                a: "Visit our Sell a Car page, fill in your and your car's details, and our team will contact you with a valuation and next steps for a hassle-free sale.",
              },
              {
                q: "How can I get a quote for lubricants?",
                a: "Send us your requirements through the contact form or call us directly for bulk pricing and custom orders.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="premium-card bg-white rounded-2xl border border-slate-200/80 p-7 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-[15px] font-bold text-slate-900 mb-2.5">
                  {faq.q}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
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
