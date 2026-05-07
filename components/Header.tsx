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
          "absolute left-0 top-[2px] h-[2px] w-6 rounded bg-neutral-900 transition",
          open ? "translate-y-[8px] rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[10px] h-[2px] w-6 rounded bg-neutral-900 transition",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-[18px] h-[2px] w-6 rounded bg-neutral-900 transition",
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
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.JPG"
              alt={`${siteConfig.name} ロゴ`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-white/70 bg-white object-contain shadow-sm"
              priority
            />
            <div className="leading-tight">
              <p className="text-[13px] font-semibold tracking-wide text-neutral-900">
                {siteConfig.name}
              </p>
              <p className="text-[11px] text-neutral-600">{siteConfig.area}</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 sm:inline-flex"
            >
              予約（Hotpepper）
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="メニュー"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-3 py-2 shadow-sm hover:bg-white"
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
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-black/35"
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-neutral-200/70 px-5 py-4">
            <p className="text-sm font-semibold text-neutral-900">Menu</p>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 hover:bg-neutral-50"
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
                    className="block rounded-2xl border border-neutral-200 bg-white px-4 py-4 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <p className="text-xs font-semibold text-neutral-900">ご予約</p>
              <p className="mt-1 text-xs leading-6 text-neutral-600">
                ホットペッパービューティーへ移動します。
              </p>
              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800"
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