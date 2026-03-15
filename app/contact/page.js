"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Call Us", lines: ["+91 98765 43210", "+91 98765 43211"], accent: "bg-sky-50 text-sky-600" },
  { icon: Mail, title: "Email Us", lines: ["info@bluestreaksindia.com", "support@bluestreaksindia.com"], accent: "bg-emerald-50 text-emerald-600" },
  { icon: MapPin, title: "Visit Us", lines: ["Blue Streaks India", "Mumbai, Maharashtra, India"], accent: "bg-amber-50 text-amber-600" },
  { icon: Clock, title: "Working Hours", lines: ["Mon \u2013 Sat: 9 AM \u2013 6 PM", "Sunday: Closed"], accent: "bg-violet-50 text-violet-600" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
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
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&h=500&fit=crop"
          alt="Contact and communication"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-[13px] font-semibold uppercase tracking-wider mb-3">
            Reach out
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Have questions or need assistance? Reach out and our team will
            respond promptly.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="rounded-xl border border-slate-100 bg-white p-5 text-center"
              >
                <div className={`w-11 h-11 ${info.accent} rounded-lg flex items-center justify-center mx-auto mb-3.5`}>
                  <info.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[14px] font-semibold text-slate-900 mb-1.5">
                  {info.title}
                </h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-[13px] text-slate-500">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Office info + Careers + FAQ */}
            <div className="order-2 lg:order-1 space-y-5">
              {/* Office details */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-600" />
                  Our Office
                </h2>
                <div className="space-y-3.5 text-[13.5px] text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">Blue Streaks India</span><br />
                    Mumbai, Maharashtra, India
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                    +91 98765 43210
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                    info@bluestreaksindia.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                    Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM
                  </div>
                </div>
              </div>

              {/* Careers */}
              <div className="rounded-xl bg-brand-50 border border-brand-100 p-5">
                <h3 className="text-[14px] font-semibold text-brand-900 mb-1.5">
                  Careers at Blue Streaks India
                </h3>
                <p className="text-[13px] text-brand-800/70 mb-2">
                  Interested in joining our team? Send your resume at:
                </p>
                <a
                  href="mailto:careers@bluestreaksindia.com"
                  className="text-brand-700 text-[13px] font-medium hover:underline"
                >
                  careers@bluestreaksindia.com
                </a>
              </div>

            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                Contact Form
              </h2>
              <div className="bg-white rounded-2xl shadow-sm shadow-slate-200/50 border border-slate-100 p-7 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    <div>
                      <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      >
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="automobiles">Automobiles</option>
                        <option value="legal">Legal Services</option>
                        <option value="lubricants">Lubricants &amp; Oils</option>
                        <option value="transport">Transport &amp; Cargo</option>
                        <option value="loans">Loans &amp; Finance</option>
                        <option value="dealership">Dealership Partnership</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 resize-none placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 h-11 bg-brand-600 text-white text-[14px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-brand-600 text-[13px] font-semibold uppercase tracking-wider mb-2">
              Common questions
            </p>
            <h2 className="text-3xl sm:text-[2rem] font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
              Find quick answers to the most common queries about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                q: "What types of loans do you provide?",
                a: "We offer gold loans, bike loans, car loans, and asset-based loans with quick approval and competitive rates.",
              },
              {
                q: "How can I get a quote for lubricants?",
                a: "Send us your requirements through the contact form or call us directly for bulk pricing and custom orders.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:border-slate-200 hover:shadow-md hover:shadow-slate-100 transition-all duration-200"
              >
                <h3 className="text-[14.5px] font-semibold text-slate-900 mb-2">
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
      <label className="block text-[13px] font-medium text-slate-700 mb-1.5">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-shadow" />
    </div>
  );
}
