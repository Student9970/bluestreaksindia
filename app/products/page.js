"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Package, Sparkles } from "lucide-react";

const categories = [
  "All Products",
  "Oils & Lubricants",
  "Coolants",
  "Greases",
  "Industrial",
  "Automotive",
  "Transport & Heavy",
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeFilter === "All Products"
      ? products
      : products.filter(
          (p) =>
            p.category === activeFilter ||
            (p.tags || []).includes(activeFilter)
        );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=500&fit=crop"
          alt="Industrial manufacturing"
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
              Our Product Range
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Products
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Premium oils, lubricants, coolants, greases, and industrial
            products &mdash; manufactured for performance and reliability.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* Filter pills + Product grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-[13px] font-semibold rounded-full border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-brand-950 text-white border-brand-950 shadow-md shadow-brand-950/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700 hover:shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-[13px] text-slate-400 mb-6">
            Showing {filtered.length} product{filtered.length !== 1 && "s"}
          </p>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-3 border-brand-950 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div
                    key={product._id || product.name}
                    className="premium-card group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {product.image ? (
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 px-3 py-1 bg-brand-950 text-white text-[11px] font-bold rounded-lg shadow-md uppercase tracking-wider">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="relative h-52 bg-slate-50 flex items-center justify-center">
                        <Package className="w-12 h-12 text-slate-200" />
                        {product.badge && (
                          <span className="absolute top-3 left-3 px-3 py-1 bg-brand-950 text-white text-[11px] font-bold rounded-lg shadow-md uppercase tracking-wider">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-gold-500 uppercase tracking-widest">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-slate-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[12px] text-slate-400 mb-2.5 font-medium">
                        {product.spec}
                      </p>
                      {product.price != null ? (
                        <p className="text-[15px] font-bold text-brand-700 mb-2">
                          &#8377;{Number(product.price).toLocaleString("en-IN")}
                        </p>
                      ) : (
                        <p className="text-[13px] text-slate-400 italic mb-2">
                          Price on request
                        </p>
                      )}
                      <p className="text-[13px] text-slate-500 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-400 text-[15px]">
                    No products found in this category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
