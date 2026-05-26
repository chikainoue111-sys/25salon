"use client";

import { siteConfig } from "@/lib/site";

const tabs = [
  { href: "#about", label: "サロン" },
  { href: "#menu", label: "メニュー" },
  { href: "RESERVE", label: "予約" },
  { href: "#top", label: "TOP" },
] as const;

export default function BottomTabs() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/85 backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-6xl grid-cols-4">
        {tabs.map((t) => {
          const isReserve = t.href === "RESERVE";
          return (
            <li key={t.label}>
              {isReserve ? (
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-2 py-3 text-center text-[12px] font-semibold text-neutral-900 active:bg-neutral-100"
                >
                  {t.label}
                </a>
              ) : (
                <a
                  href={t.href}
                  className="block px-2 py-3 text-center text-[12px] font-medium text-neutral-800 active:bg-neutral-100"
                >
                  {t.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}