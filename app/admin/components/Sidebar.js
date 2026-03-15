"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Handshake,
  Banknote,
  Mail,
  Users,
  LogOut,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { PERSONAS, getPersonaAccess } from "@/utils/personas";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard, key: "dashboard" },
  { name: "Products", href: "/admin/products", icon: Package, key: "products" },
  { name: "Dealership", href: "/admin/dealership", icon: Handshake, key: "dealership" },
  { name: "Finance", href: "/admin/finance", icon: Banknote, key: "finance" },
  { name: "Contact Us", href: "/admin/contact", icon: Mail, key: "contact" },
  { name: "Users", href: "/admin/users", icon: Users, key: "users" },
];

export default function Sidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const accessibleSections = getPersonaAccess(user.persona);
  const filteredNav = navItems.filter((item) =>
    accessibleSections.includes(item.key)
  );

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const isActive = (href) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Shield className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <span className="text-[15px] font-bold text-white block leading-tight">
              Blue Streaks
            </span>
            <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
              Admin Panel
            </span>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {filteredNav.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition-colors ${
              isActive(item.href)
                ? "bg-brand-600 text-white shadow-sm shadow-brand-600/25"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <item.icon className="w-[18px] h-[18px]" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="px-3 mb-3">
          <p className="text-[13px] font-semibold text-white truncate">
            {user.name}
          </p>
          <p className="text-[11px] text-slate-500 truncate">
            {PERSONAS[user.persona]}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 w-full transition-colors"
        >
          <LogOut className="w-[18px] h-[18px]" />
          Log Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 bg-slate-900 shrink-0 min-h-screen sticky top-0">
        {sidebarContent}
      </aside>
    </>
  );
}
