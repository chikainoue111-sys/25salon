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

function Price({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-right text-sm font-medium tracking-wide text-neutral-700">
      {children}
    </p>
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

export default function HomePage() {
  return (
    <div id="top" className="space-y-14 pb-24 md:pb-10">
      {/* HERO */}
      <section className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_30px_70px_-55px_rgba(0,0,0,0.75)]">
          <div className="relative">
            {/* overlay明るめ固定 */}
            <HeroSlider slides={slides} holdMs={5333} fadeMs={2800} overlay={0.38} />

            <div className="absolute inset-x-0 top-0 p-5 md:p-10">
              <p
                className="text-xs font-medium tracking-[0.22em] text-white/85"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
              >
                {siteConfig.area}｜完全予約制
              </p>

              <h1
                className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-white md:text-6xl"
                style={{ textShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
              >
                25salon
              </h1>

              {/* ゴールドラインは無し。余白だけ戻す */}
              <div className="mt-3" />

              <p
                className="mt-3 max-w-xl text-sm leading-7 text-white/90 md:text-base"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
              >
                静かに整う、プライベートトータルサロン。
              </p>

              {/* ヒーロー内ボタン：スマホでは非表示（フッタータブに導線あるため） */}
              <div className="mt-5 hidden sm:flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Primary：ご予約 */}
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    // layout
                    "group relative isolate inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold",
                    "min-w-[176px]",

                    // text
                    "text-white",

                    // base shadow / ring
                    "ring-1 ring-white/15 shadow-lg shadow-black/20",

                    // motion + lift
                    "transform-gpu transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:scale-[1.03] active:translate-y-0 active:scale-[0.99]",

                    // make it feel brighter on hover
                    "hover:brightness-[1.08] hover:saturate-[1.05]",
                    "hover:shadow-xl hover:shadow-black/35",
                  ].join(" ")}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(var(--accent),0.95) 0%, rgba(var(--accent),0.78) 55%, rgba(var(--accent),0.92) 100%)",
                  }}
                >
                  {/* hover時の“白い艶” */}
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

                {/* Secondary：テキストリンクにして主張を落とす */}
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/85 hover:text-white/95"
                >
                  メニュー／料金
                </a>
              </div>
            </div>
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