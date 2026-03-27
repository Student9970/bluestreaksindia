"use client";

import { useEffect, useState } from "react";
import { Mail, Search, ChevronDown, ChevronUp } from "lucide-react";

const subjectLabels = {
  general: "General Inquiry",
  automobiles: "Automobiles",
  legal: "Legal Services",
  lubricants: "Lubricants & Oils",
  transport: "Transport & Cargo",
  "sell-car": "Sell a Car",
  dealership: "Partnership",
  careers: "Careers",
};

export default function AdminContact() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetch("/api/admin/contacts")
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
      d.email?.toLowerCase().includes(search.toLowerCase()) ||
      d.subject?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Mail className="w-6 h-6 text-brand-600" />
          Contact Messages
        </h1>
        <p className="text-[13px] text-slate-500 mt-1">
          View all contact form submissions
        </p>
      </div>

      <div className="mb-5">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or subject..."
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
                  Name
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Message
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
                    No contact messages found
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-[13px] font-semibold text-slate-900">
                      {item.name}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-600">
                      {item.email}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-600">
                      {item.phone || <span className="text-slate-300">&mdash;</span>}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-block px-2.5 py-1 bg-violet-50 text-violet-700 text-[12px] font-medium rounded-md">
                        {subjectLabels[item.subject] || item.subject}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-400">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === item._id ? null : item._id
                          )
                        }
                        className="flex items-center gap-1 text-[12px] text-brand-600 hover:text-brand-700 font-medium"
                      >
                        {expandedId === item._id ? "Hide" : "View"}
                        {expandedId === item._id ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                      {expandedId === item._id && (
                        <div className="mt-2 p-3 bg-slate-50 rounded-lg text-[12.5px] text-slate-600 leading-relaxed max-w-xs">
                          {item.message}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[12px] text-slate-400 mt-3">
        Showing {filtered.length} of {data.length} messages
      </p>
    </div>
  );
}
