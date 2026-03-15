"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Package } from "lucide-react";

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
          (p) => p.category === activeFilter || (p.tags || []).includes(activeFilter)
        );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=500&fit=crop"
          alt="Industrial manufacturing"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-950/75" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-brand-300 text-[13px] font-semibold uppercase tracking-wider mb-3">
            Our product range
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Products
          </h1>
          <p className="mt-4 text-brand-200/70 text-[16px] max-w-xl leading-relaxed">
            Premium oils, lubricants, coolants, greases, and industrial
            products &mdash; manufactured for performance and reliability.
          </p>
        </div>
      </section>

      {/* Filter pills + Product grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-[13px] font-medium rounded-full border transition-all duration-150 ${
                  activeFilter === cat
                    ? "bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-600/25"
                    : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-[13px] text-slate-400 mb-6">
            Showing {filtered.length} product{filtered.length !== 1 && "s"}
          </p>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-3 border-brand-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <div
                    key={product._id || product.name}
                    className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200"
                  >
                    {product.image ? (
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-600 text-white text-[11px] font-semibold rounded-md shadow-sm">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="h-48 bg-slate-100 flex items-center justify-center">
                        <Package className="w-12 h-12 text-slate-300" />
                        {product.badge && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-600 text-white text-[11px] font-semibold rounded-md shadow-sm">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
                          <Package className="w-4 h-4" />
                        </div>
                        <span className="text-[11.5px] font-medium text-slate-400 uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-semibold text-slate-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[12px] text-slate-400 mb-2">{product.spec}</p>
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
