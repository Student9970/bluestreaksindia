"use client";

import { useEffect } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

/**
 * Modal confirmation after form submit (replaces browser alert).
 * @param {{ open: boolean; onClose: () => void; title?: string; message: string; variant?: "success" | "error" }} props
 */
export default function FormMessageDialog({
  open,
  onClose,
  title,
  message,
  variant = "success",
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const isError = variant === "error";
  const heading =
    title ?? (isError ? "Something went wrong" : "Thank you");

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Dismiss"
      />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="form-message-title"
        aria-describedby="form-message-desc"
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200/80 p-6 sm:p-8 text-center"
      >
        <div
          className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
            isError
              ? "bg-red-50 text-red-600"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {isError ? (
            <AlertCircle className="h-7 w-7" strokeWidth={2} />
          ) : (
            <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
          )}
        </div>
        <h2
          id="form-message-title"
          className="text-lg font-bold text-slate-900 tracking-tight"
        >
          {heading}
        </h2>
        <p
          id="form-message-desc"
          className="mt-3 text-[14px] text-slate-600 leading-relaxed"
        >
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full h-11 rounded-xl bg-brand-950 text-white text-[14px] font-bold hover:bg-brand-800 transition-colors shadow-lg shadow-brand-950/15"
        >
          OK
        </button>
      </div>
    </div>
  );
}
