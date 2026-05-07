// （ファイル全部貼るけど、変更多いのは src だけ）
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/salon", label: "サロン紹介" },
  { href: "/menu", label: "メニュー" },
  { href: "/coupons", label: "クーポン" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.JPG"
            alt={`${siteConfig.name} ロゴ`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-neutral-200 bg-white object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-neutral-900">
              {siteConfig.name}
            </p>
            <p className="text-xs text-neutral-500">{siteConfig.area}</p>
          </div>
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

      <div className="border-t border-neutral-200/60 bg-white/60 md:hidden">
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