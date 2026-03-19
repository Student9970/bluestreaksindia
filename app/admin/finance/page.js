"use client";

import { useEffect, useState } from "react";
import { Car, Search } from "lucide-react";

export default function AdminFinance() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/admin/finance")
      .then((res) => res.json())
      .then((result) => {
        setData(Array.isArray(result) ? result : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = data.filter(
    (d) =>
      d.name?.toLowerCase().includes(search.toLowerCase()) ||
      d.phone?.toLowerCase().includes(search.toLowerCase()) ||
      d.carMake?.toLowerCase().includes(search.toLowerCase()) ||
      d.carModel?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Car className="w-6 h-6 text-brand-600" />
          Sell Car Enquiries
        </h1>
        <p className="text-[13px] text-slate-500 mt-1">
          View all sell-a-car submissions
        </p>
      </div>

      <div className="mb-5">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, or car..."
            className="w-full h-10 pl-9 pr-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Car
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Year / KM
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Expected Price
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-[14px] text-slate-400"
                  >
                    No sell car enquiries found
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-[12px] text-slate-500">{item.phone}</p>
                      {item.email && (
                        <p className="text-[12px] text-slate-400">{item.email}</p>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-medium text-slate-900">
                        {item.carMake} {item.carModel}
                      </p>
                      {item.variant && (
                        <p className="text-[12px] text-slate-500">{item.variant}</p>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-600">
                      {[item.year, item.kmDriven ? `${item.kmDriven} km` : ""]
                        .filter(Boolean)
                        .join(" / ") || "—"}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] font-medium text-slate-900">
                      {item.expectedPrice
                        ? `₹${item.expectedPrice}`
                        : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-600">
                      {[item.city, item.state].filter(Boolean).join(", ") || (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-400">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[12px] text-slate-400 mt-3">
        Showing {filtered.length} of {data.length} enquiries
      </p>
    </div>
  );
}
