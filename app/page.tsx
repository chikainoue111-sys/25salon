"use client";

import { useEffect, useState } from "react";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import BottomTabs from "@/components/BottomTabs";
import SectionTitle from "@/components/SectionTitle";
import MediaBlock from "@/components/MediaBlock";
import { siteConfig } from "@/lib/site";

const slides: Slide[] = [
  {
    sp: "/hero/sp-01.jpg",
    pc: "/hero/pc-01.jpg",
    alt: "25salon ヒーロー 1",
    position: "50% 50%",
  },
  { sp: "/hero/sp-02.jpg", pc: "/hero/pc-02.jpg", alt: "25salon ヒーロー 2" },
  { sp: "/hero/sp-03.jpg", pc: "/hero/pc-03.jpg", alt: "25salon ヒーロー 3" },
];

function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpointPx]);

  return isMobile;
}

function Price({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-right text-sm font-medium tracking-wide text-neutral-700">
      {children}
    </p>
  );
}

/** ヒーロー内だけ用：横長にならないボタン */
function HeroPrimaryButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "group relative isolate inline-flex items-center justify-center",
        "rounded-full px-5 py-3 text-sm font-semibold",
        "text-white ring-1 ring-white/15 shadow-lg shadow-black/25",
        "transform-gpu transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.99]",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(180deg, rgba(var(--accent),0.95) 0%, rgba(var(--accent),0.78) 55%, rgba(var(--accent),0.92) 100%)",
      }}
    >
      <span
        className={[
          "pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0",
          "transition-opacity duration-300 ease-out",
          "group-hover:opacity-100",
        ].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.00) 100%)",
        }}
      />
      ご予約はこちら
    </a>
  );
}

function HeroSecondaryButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        "text-white/92 hover:text-white",
        "ring-1 ring-white/30 bg-white/10",
        "backdrop-blur-sm",
      ].join(" ")}
      style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
    >
      メニュー／料金
    </a>
  );
}

function OutlineButton({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const common =
    "inline-flex w-full items-center justify-center rounded-full border border-neutral-900/35 bg-white/25 px-6 py-4 text-sm font-semibold text-neutral-900 backdrop-blur hover:bg-white/40 md:w-auto";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={common}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={common}>
      {children}
    </a>
  );
}

function ScrollIndicator({
  href,
  label = "VIEW MORE",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      // 位置：もっと下（スマホUIと被りにくいギリギリ）
      className="group absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full px-6 py-4"
    >
      {/* label：見やすさ最優先で小さいプレートを敷く */}
      <span
        className={[
          "mx-auto inline-flex items-center justify-center",
          "rounded-full px-3 py-1.5",
          "text-[11px] font-semibold tracking-[0.26em]",
          "text-[rgb(var(--accent))]",
          "bg-black/18",
          "backdrop-blur-sm",
          "shadow-[0_10px_26px_-18px_rgba(0,0,0,0.75)]",
        ].join(" ")}
      >
        {label}
      </span>

      {/* line */}
      <span
        className="mx-auto mt-2 block h-8 w-px rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.00), rgba(var(--accent),0.78), rgba(255,255,255,0.00))",
        }}
      />

      {/* chevron */}
      <span
        className="mx-auto mt-2 block h-5 w-5"
        style={{ animation: "floatYSoft 1.9s ease-in-out infinite" }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path
            d="M6.5 9.5l5.5 5.5 5.5-5.5"
            stroke="rgb(var(--accent))"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function HomePage() {
  const isMobile = useIsMobile();

  // 早すぎ → 倍（ゆっくり）
  const holdMs = 10666;
  const fadeMs = 5600;

  return (
    <div id="top" className="space-y-14 pb-24 md:pb-10">
      {/* HERO */}
      <section className="mx-auto max-w-6xl">
        <div
          className={[
            "overflow-hidden rounded-[28px] border border-white/60 bg-white/20",
            "md:backdrop-blur-xl",
            "shadow-[0_30px_70px_-55px_rgba(0,0,0,0.75)]",
          ].join(" ")}
        >
          <div className="relative">
            <HeroSlider slides={slides} holdMs={holdMs} fadeMs={fadeMs} overlay={0.38} />

            {/* 読みやすさ用ベール（弱め） */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(760px 460px at 12% 18%, rgba(0,0,0,0.30), rgba(0,0,0,0.12) 42%, rgba(0,0,0,0.00) 64%)",
              }}
            />

            <div className="absolute inset-x-0 top-0 p-5 md:p-10">
              {/* スマホで1行に収める：文字小さく＋nowrap＋溢れは省略 */}
              <p
                className={[
                  "max-w-full",
                  "text-[11px] font-medium tracking-[0.18em] text-white/90",
                  "whitespace-nowrap overflow-hidden text-ellipsis",
                ].join(" ")}
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
                title={`${siteConfig.area}｜完全予約制`}
              >
                {siteConfig.area}｜完全予約制
              </p>

              <h1
                className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-white md:text-6xl"
                style={{ textShadow: "0 12px 30px rgba(0,0,0,0.55)" }}
              >
                25salon
              </h1>

              <div className="mt-3" />

              <p
                className="mt-3 max-w-xl text-sm leading-7 text-white/95 md:text-base"
                style={{ textShadow: "0 2px 14px rgba(0,0,0,0.55)" }}
              >
                静かに整う、プライベートトータルサロン。
              </p>

              {/* ボタン：短く、左端で横並び（狭い時は折り返し） */}
              <div className="mt-5 flex flex-wrap items-center justify-start gap-3">
                <HeroPrimaryButton href={siteConfig.reservationUrl} />
                <HeroSecondaryButton href="#menu" />
              </div>
            </div>

            <ScrollIndicator href="#about" label={isMobile ? "VIEW MORE" : "VIEW MORE"} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="space-y-8">
        <SectionTitle id="about" title="about us" subtitle="サロンについて" />

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:items-center">
          <MediaBlock src={undefined} alt="サロン写真（後から差し替え）" />

          <div className="rounded-[28px] border border-white/60 bg-white/35 p-6 backdrop-blur-xl shadow-[0_18px_50px_-40px_rgba(0,0,0,0.6)] md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">
              心と身体を整える
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-800 md:text-base">
              ネイル／フェイシャル／ボディまで。目的や悩みに合わせて、
              無理のないメニューをご提案します。
              <br />
              静かな空間で、ゆったりと自分のペースでお過ごしください。
            </p>

            <div className="mt-6">
              <OutlineButton href="/salon">もっと見る</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="space-y-8">
        <SectionTitle id="menu" title="menu" subtitle="メニュー" />

        <div className="mx-auto max-w-6xl space-y-10">
          {[
            {
              title: "美肌 — aesthetic",
              desc:
                "毛穴ケアから角質除去、さらに美容液導入まで。肌管理メニューをご用意しています。",
              price: "— ¥7,000〜",
              img: undefined,
            },
            {
              title: "脱毛 — removal",
              desc:
                "痛みの少ない最新機器を導入。毛穴レスでなめらかな肌に仕上げます。",
              price: "— ¥1,300〜",
              img: undefined,
            },
            {
              title: "よもぎ蒸し — mugwort",
              desc:
                "冷え・巡り・リラックスに。温活として続けやすいメニューです。",
              price: "— ¥3,500〜",
              img: undefined,
            },
          ].map((m) => (
            <div key={m.title} className="space-y-5">
              <MediaBlock src={m.img} alt={m.title} />

              <div className="px-1">
                <h3 className="font-serif text-2xl font-semibold text-neutral-900 md:text-3xl">
                  {m.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-800 md:text-base">
                  {m.desc}
                </p>

                <div className="mt-4">
                  <Price>{m.price}</Price>
                </div>

                <div className="mt-5">
                  <OutlineButton href="/menu">詳しく見る</OutlineButton>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4 text-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-none bg-neutral-900/10 px-10 py-5 text-sm font-semibold tracking-[0.18em] text-neutral-900 hover:bg-neutral-900/15"
            >
              メニュー＆料金一覧
            </a>
          </div>
        </div>
      </section>

      {/* INFORMATION */}
      <section className="space-y-8">
        <SectionTitle id="info" title="information" subtitle="店舗情報" />

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:items-start">
          <MediaBlock src={undefined} alt="外観写真（後から差し替え）" />

          <div className="rounded-[28px] border border-white/60 bg-white/35 p-6 backdrop-blur-xl shadow-[0_18px_50px_-40px_rgba(0,0,0,0.6)] md:p-8">
            <div className="space-y-3 text-sm leading-7 text-neutral-800 md:text-base">
              <p className="font-semibold">住所</p>
              <p>大阪府守口市（詳細はご予約確定後にご案内）</p>

              <p className="pt-2 font-semibold">営業時間</p>
              <p>10:00〜18:00（最終受付 17:30）</p>

              <p className="pt-2 font-semibold">アクセス</p>
              <p>大日・守口エリア（駅から徒歩圏）</p>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-neutral-800"
              >
                予約（Hotpepper）
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900/35 bg-white/25 px-6 py-4 text-sm font-semibold text-neutral-900 backdrop-blur hover:bg-white/40"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <MediaBlock src={undefined} alt="Google Map（後から埋め込み）" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="space-y-8">
        <SectionTitle title="contact" subtitle="お問い合わせ" />

        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-center text-lg font-semibold text-neutral-900">
            お問い合わせ・ご予約は、お気軽にご連絡ください
          </p>

          <div className="grid gap-3">
            <OutlineButton href={siteConfig.reservationUrl} external>
              ホットペッパーで予約する
            </OutlineButton>

            <OutlineButton href={siteConfig.reservationUrl} external>
              LINEで予約する（後で差し替え）
            </OutlineButton>
          </div>

          <div className="pt-4 text-center">
            <a
              href="/cancel"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:underline"
            >
              <span className="text-xl leading-none">›</span>
              キャンセルについてはこちら
            </a>
          </div>
        </div>
      </section>

      <BottomTabs />
    </div>
  );
}