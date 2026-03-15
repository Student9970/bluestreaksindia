"use client";

import { useEffect, useState } from "react";
import {
  Package,
  Handshake,
  Banknote,
  Mail,
  Users,
  TrendingUp,
} from "lucide-react";

const statCards = [
  {
    key: "products",
    label: "Products",
    icon: Package,
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    key: "dealerships",
    label: "Dealership Enquiries",
    icon: Handshake,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    key: "finances",
    label: "Finance Applications",
    icon: Banknote,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    key: "contacts",
    label: "Contact Messages",
    icon: Mail,
    color: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    key: "users",
    label: "Registered Users",
    icon: Users,
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const visibleCards = statCards.filter(
    (c) => stats[c.key] !== undefined
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-brand-600" />
          Dashboard
        </h1>
        <p className="text-[14px] text-slate-500 mt-1">
          Overview of your business data
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-6 animate-pulse"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-lg mb-3" />
              <div className="w-16 h-7 bg-slate-100 rounded mb-2" />
              <div className="w-24 h-4 bg-slate-100 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {visibleCards.map((card) => (
            <div
              key={card.key}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:shadow-slate-100 transition-all duration-200"
            >
              <div
                className={`w-11 h-11 ${card.color} border rounded-lg flex items-center justify-center mb-4`}
              >
                <card.icon className="w-5 h-5" />
              </div>
              <p className="text-3xl font-bold text-slate-900">
                {stats[card.key]}
              </p>
              <p className="text-[13px] text-slate-500 mt-1">{card.label}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && visibleCards.length === 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <p className="text-slate-400 text-[15px]">
            No data available for your role.
          </p>
        </div>
      )}
    </div>
  );
}
