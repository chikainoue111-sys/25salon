"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/salon", label: "サロン紹介" },
  { href: "/menu", label: "メニュー" },
  { href: "/coupons", label: "クーポン" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={[
          "absolute left-0 top-[2px] h-[2px] w-6 rounded transition",
          "bg-neutral-900/80",
          open ? "translate-y-[8px] rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[10px] h-[2px] w-6 rounded transition",
          "bg-neutral-900/80",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[18px] h-[2px] w-6 rounded transition",
          "bg-neutral-900/80",
          open ? "translate-y-[-8px] -rotate-45" : "",
        ].join(" ")}
      />
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50",
          // “線”じゃなく薄いガラス＋極薄シャドウで高級感
          "bg-white/14",
          "backdrop-blur-md md:backdrop-blur-lg",
          "shadow-[0_10px_30px_-28px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >
        {/* 下端のセパレータ：白線ではなくグラデ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.00), rgba(255,255,255,0.28), rgba(255,255,255,0.00))",
          }}
        />

        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.JPG"
              alt={`${siteConfig.name} ロゴ`}
              width={44}
              height={44}
              className={[
                "h-11 w-11 rounded-full object-contain",
                "bg-white/16",
                "ring-1 ring-white/20",
              ].join(" ")}
              priority
            />
            <div className="leading-tight">
              <p className="text-[13px] font-semibold tracking-wide text-neutral-900/90">
                {siteConfig.name}
              </p>
              <p className="text-[11px] text-neutral-700/80">{siteConfig.area}</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className={[
                "hidden sm:inline-flex",
                "rounded-full px-4 py-2 text-sm font-medium",
                "bg-neutral-900/80 text-white",
                "shadow-none",
                "hover:bg-neutral-900/90",
              ].join(" ")}
            >
              予約（Hotpepper）
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="メニュー"
              className={[
  "inline-flex items-center justify-center rounded-full px-2.5 py-2",
  "bg-white/08 hover:bg-white/12",
  "ring-1 ring-white/12",
  "backdrop-blur-md",
  "shadow-none",
  "outline-none focus:outline-none",
  "focus-visible:ring-2 focus-visible:ring-[rgba(var(--accent),0.35)]",
  "focus-visible:ring-offset-0",
].join(" ")}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        className={[
          "fixed inset-0 z-50 transition",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-black/35" onClick={() => setOpen(false)} />

        {/* panel */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "bg-white/78 backdrop-blur-xl",
            "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)]",
            "transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-neutral-900/10 px-5 py-4">
            <p className="text-sm font-semibold text-neutral-900/90">Menu</p>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-neutral-900/15 bg-white/40 px-3 py-2 text-xs text-neutral-700 hover:bg-white/55"
            >
              閉じる
            </button>
          </div>

          <nav className="px-5 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-2xl px-4 py-4 text-sm font-medium",
                      "border border-neutral-900/10",
                      "bg-white/45",
                      "text-neutral-900/90",
                      "shadow-none",
                      "hover:bg-white/60",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-neutral-900/10 bg-white/45 p-4">
              <p className="text-xs font-semibold text-neutral-900/90">ご予約</p>
              <p className="mt-1 text-xs leading-6 text-neutral-700/80">
                ホットペッパービューティーへ移動します。
              </p>
              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-neutral-900/85 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-900/95"
              >
                予約する
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}