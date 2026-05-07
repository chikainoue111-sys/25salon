import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/salon", label: "サロン紹介" },
  { href: "/menu", label: "メニュー" },
  { href: "/coupons", label: "クーポン" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-wide text-neutral-900">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs text-neutral-500 sm:inline">
            {siteConfig.area}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-neutral-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.reservationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          ホットペッパーで予約
        </a>
      </div>

      {/* モバイル用ナビ（シンプル版） */}
      <div className="border-t border-neutral-200/60 bg-white/70 md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-4 px-2 text-xs text-neutral-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-2 text-center hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}