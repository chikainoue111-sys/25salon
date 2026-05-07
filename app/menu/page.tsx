import { siteConfig } from "@/lib/site";

type MenuRow = {
  name: string;
  desc: string;
  priceNote: string; // 料金が確定したら "¥6,600" みたいに変える
  timeNote: string;  // "60分" など
};

const menu = {
  nail: [
    {
      name: "ハンドジェル",
      desc: "ワンカラー／グラデ／フレンチ／定額デザイン等（詳細は予約ページ）",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "フットジェル",
      desc: "ワンカラー／親指アート等（詳細は予約ページ）",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "オフ／ケア",
      desc: "付替オフ・オフのみ・甘皮ケア・整爪など",
      priceNote: "要確認",
      timeNote: "要確認",
    },
  ] satisfies MenuRow[],
  facial: [
    {
      name: "毛穴洗浄",
      desc: "黒ずみ・詰まり・ざらつきが気になる方へ",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "ハーブピーリング",
      desc: "肌質改善・透明感・なめらかさを目指すケア",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "たるみケア",
      desc: "むくみ・フェイスラインのもたつきが気になる方へ",
      priceNote: "要確認",
      timeNote: "要確認",
    },
  ] satisfies MenuRow[],
  body: [
    {
      name: "よもぎ蒸し",
      desc: "冷え・巡り・リラックスを整える温活メニュー",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "脱毛",
      desc: "部位別（都度払い）など、詳細は予約ページ",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "痩身",
      desc: "内容・機器は予約ページまたは事前相談でご案内",
      priceNote: "要確認",
      timeNote: "要確認",
    },
  ] satisfies MenuRow[],
  ear: [
    {
      name: "耳ツボ",
      desc: "リフト・食欲ケア・��ラックス等（内容に合わせて）",
      priceNote: "要確認",
      timeNote: "要確認",
    },
  ] satisfies MenuRow[],
} as const;

function Section({
  title,
  rows,
}: {
  title: string;
  rows: MenuRow[];
}) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur p-6">
      <h2 className="section-title text-lg font-semibold">{title}</h2>

      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
        <div className="grid grid-cols-[1fr_90px_90px] bg-neutral-50 text-xs font-medium text-neutral-600">
          <div className="px-4 py-3">内容</div>
          <div className="px-4 py-3 text-right">目安</div>
          <div className="px-4 py-3 text-right">時間</div>
        </div>

        {rows.map((r, idx) => (
          <div
            key={r.name}
            className={[
              "grid grid-cols-[1fr_90px_90px] bg-white",
              idx !== 0 ? "border-t border-neutral-200" : "",
            ].join(" ")}
          >
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-neutral-900">{r.name}</p>
              <p className="mt-1 text-xs leading-6 text-neutral-600">
                {r.desc}
              </p>
            </div>
            <div className="px-4 py-3 text-right text-sm text-neutral-800">
              {r.priceNote}
            </div>
            <div className="px-4 py-3 text-right text-sm text-neutral-800">
              {r.timeNote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="section-title text-2xl font-semibold md:text-3xl">
          メニュー
        </h1>
        <p className="text-sm leading-7 text-neutral-700 md:text-base">
          料金・所要時間の最新情報はホットペッパーに掲載しています。
          このページは「メニュー一覧」として見やすく整理しています。
        </p>

        <a
          href={siteConfig.reservationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          ホットペッパーで料金を見る／予約する
        </a>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Section title="Nail（ジェルネイル）" rows={[...menu.nail]} />
        <Section title="Facial（フェイシャル）" rows={[...menu.facial]} />
        <Section title="Body（ボディケア）" rows={[...menu.body]} />
        <Section title="耳ツボ" rows={[...menu.ear]} />
      </div>
    </div>
  );
}