"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/** Dark blue pill — use on the steel-blue panel */
export const splitCtaBtnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white bg-[#1a4d72] shadow-md hover:bg-[#143d5c] transition-colors w-fit shrink-0";

/** Outlined secondary on the blue panel */
export const splitCtaBtnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white border-2 border-white/45 hover:bg-white/10 transition-colors w-fit shrink-0";

/**
 * Split banner: image ~58% left (desaturated / cool), solid steel-blue panel ~42% right.
 *
 * Pass `primaryAction` / `secondaryAction` so `Link` runs inside this client boundary
 * (avoid passing Link nodes from Server Components — breaks navigation).
 */
export default function SplitCtaBanner({
  imageSrc,
  imageAlt = "",
  badgeLabel,
  title,
  body,
  /** @deprecated prefer primaryAction — only for unusual markup */
  actions,
  primaryAction,
  secondaryAction,
  priority = false,
  compact = false,
}) {
  const minH = compact
    ? "min-h-[200px] md:min-h-[260px]"
    : "min-h-[240px] md:min-h-[320px] lg:min-h-[360px]";

  const showBuiltInActions =
    primaryAction?.href || secondaryAction?.href;
  const actionRow = showBuiltInActions ? (
    <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
      {primaryAction?.href ? (
        <Link
          href={primaryAction.href}
          className={`group ${splitCtaBtnPrimary}`}
        >
          {primaryAction.label}
          {primaryAction.showArrow !== false ? (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
          ) : null}
        </Link>
      ) : null}
      {secondaryAction?.href ? (
        <Link href={secondaryAction.href} className={splitCtaBtnSecondary}>
          {secondaryAction.label}
        </Link>
      ) : null}
    </div>
  ) : actions ? (
    <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">{actions}</div>
  ) : null;

  return (
    <section className="w-full overflow-hidden">
      <div className={`flex flex-col md:flex-row ${minH}`}>
        <div
          className={`relative w-full md:w-[58%] ${compact ? "min-h-[180px] md:min-h-0" : "min-h-[220px] md:min-h-0"} md:flex-1`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover object-center grayscale contrast-[1.08] brightness-[0.88] hue-rotate-[2deg]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
        <div className="w-full md:w-[42%] md:max-w-[520px] flex flex-col justify-center bg-[#8FB3C9] px-8 py-10 md:px-10 md:py-12 lg:pl-14 lg:pr-12 shrink-0 min-w-0">
          {badgeLabel ? (
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="text-[11px] font-semibold text-white uppercase tracking-widest">
                {badgeLabel}
              </span>
            </div>
          ) : null}
          <div className="text-left text-white space-y-4 min-w-0">
            {title}
            {body}
          </div>
          {actionRow}
        </div>
      </div>
    </section>
  );
}
