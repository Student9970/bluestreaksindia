import Image from "next/image";
import Link from "next/link";
import SplitCtaBanner from "../components/SplitCtaBanner";
import { SITE_IMG } from "@/lib/site-images";
import { toHeadingCase, toParagraphCase } from "@/lib/headingCase";
import { Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Bluestreak Foundation",
  description:
    "Bluestreak Foundation channels a share of group earnings into social causes — old-age homes, orphanages, and community support across India.",
};

const commitments = [
  "We believe in giving back to society and supporting the communities we serve.",
  "A percentage of our earnings is dedicated to social causes and sustained charitable work.",
  "We support charitable activities including old-age home maintenance and improvements to standards of living for those in need.",
  "We contribute through orphanage gifts, donations, and initiatives that create a meaningful impact.",
];

export default function FoundationPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src={SITE_IMG.charitableImpact(1400, 500)}
          alt="Community and social impact"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-950/85 via-brand-950/75 to-brand-950/90" />
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
              Social responsibility
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {toHeadingCase("Bluestreak Foundation")}
          </h1>
          <p className="mt-4 text-brand-200/90 text-[16px] max-w-2xl leading-relaxed">
            {toParagraphCase(
              "Community and philanthropy are part of how we operate — not separate from our business, but integral to the trust we aim to earn every day.",
            )}
          </p>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <p className="text-gold-500 text-[12px] font-bold tracking-widest">
                  {toHeadingCase("Our commitment")}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                {toHeadingCase("Giving back, with purpose")}
              </h2>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-r from-gold-400 to-gold-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <div className="h-px flex-1 max-w-[50px] bg-linear-to-l from-gold-400 to-gold-200" />
              </div>
              <ul className="space-y-5">
                {commitments.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] text-slate-600 leading-[1.85]"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="premium-card rounded-2xl border border-slate-200/80 bg-slate-50 p-8 lg:p-10">
              <p className="text-[14px] text-slate-600 leading-[1.85] mb-4">
                <strong className="text-slate-800">Bluestreak Foundation</strong>{" "}
                is our initiative for corporate philanthropy and community
                programmes. It is distinct from{" "}
                <Link
                  href="/services#trustees"
                  className="font-semibold text-brand-700 hover:text-brand-800 underline underline-offset-2"
                >
                  Bluestreak Trustees
                </Link>
                , which provides professional fiduciary and trust administration
                services to clients.
              </p>
              <p className="text-[14px] text-slate-500 leading-[1.85]">
                {toParagraphCase(
                  "If you would like to connect with us regarding partnerships or outreach, please reach out through our contact channels.",
                )}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[14px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Contact us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SplitCtaBanner
        imageSrc={SITE_IMG.teamCollaboration(1600, 900)}
        imageAlt="Working together for communities"
        badgeLabel="Learn more"
        title={
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {toHeadingCase("Explore the wider Bluestreak Group")}
          </h2>
        }
        body={
          <p className="text-[15px] leading-[1.85] text-white/90">
            {toParagraphCase(
              "From automobiles and lubricants to legal advisory and fiduciary services — discover how we serve clients and communities across India.",
            )}
          </p>
        }
        primaryAction={{ href: "/about", label: "About us" }}
        secondaryAction={{ href: "/services", label: "Our services" }}
      />
    </>
  );
}
