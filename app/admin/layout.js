"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setUser(data.user);
        } else {
          router.push("/admin/login");
        }
        setLoading(false);
      })
      .catch(() => {
        router.push("/admin/login");
        setLoading(false);
      });
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return children;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-brand-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-[13px] text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar user={user} />
      <main className="flex-1 min-w-0">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
