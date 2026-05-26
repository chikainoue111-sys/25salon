import { siteConfig } from "@/lib/site";
import { GlassCard, PageHeader, PrimaryButton } from "@/components/ui";

type MenuRow = {
  name: string;
  desc: string;
  priceNote: string; // 後で "¥6,600" に差し替え
  timeNote: string;  // 後で "60分" に差し替え
  tag?: string;      // "人気" とか
};

const menu = {
  nail: [
    {
      name: "ハンドジェル",
      desc: "ワンカラー／グラデ／フレンチ／定額デザイン等（詳細は予約ページ）",
      priceNote: "要確認",
      timeNote: "要確認",
      tag: "人気",
    },
    {
      name: "フットジェル",
      desc: "ワンカラー／親指アート等（詳細は予約ページ）",
      priceNote: "要確認",
      timeNote: "要確認",
    },
    {
      name: "オフ／ケア",
      desc: "付替オ��・オフのみ・甘皮ケア・整爪など",
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
      tag: "人気",
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
      desc: "リフト・食欲ケア・リラックス等（内容に合わせて）",
      priceNote: "要確認",
      timeNote: "要確認",
    },
  ] satisfies MenuRow[],
} as const;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-neutral-700">
      {children}
    </span>
  );
}

function Section({ title, rows }: { title: string; rows: MenuRow[] }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="section-title text-lg font-semibold text-neutral-900">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-accent-400/70 via-accent-400/10 to-transparent" />
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/60 bg-white/55 backdrop-blur">
        <div className="grid grid-cols-[1fr_92px_92px] bg-white/50 text-[11px] font-semibold tracking-[0.12em] text-neutral-600">
          <div className="px-4 py-3">内容</div>
          <div className="px-4 py-3 text-right">目安</div>
          <div className="px-4 py-3 text-right">時間</div>
        </div>

        {rows.map((r, idx) => (
          <div
            key={r.name}
            className={[
              "grid grid-cols-[1fr_92px_92px] bg-white/70",
              idx !== 0 ? "border-t border-white/60" : "",
            ].join(" ")}
          >
            <div className="px-4 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-neutral-900">{r.name}</p>
                {r.tag ? (
                  <span className="rounded-full bg-accent-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-800">
                    {r.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-xs leading-6 text-neutral-600">{r.desc}</p>
            </div>

            <div className="px-4 py-4 text-right">
              <Badge>{r.priceNote}</Badge>
            </div>
            <div className="px-4 py-4 text-right">
              <Badge>{r.timeNote}</Badge>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Menu"
        title="メニュー"
        description="料金・所要時間の最新情報はホットペッパーに掲載しています。こちらはメニュー一覧として見やすく整理しています。"
        actions={
          <PrimaryButton href={siteConfig.reservationUrl}>
            ホットペッパーで料金を見る／予約する
          </PrimaryButton>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Section title="Nail（ジェルネイル）" rows={[...menu.nail]} />
        <Section title="Facial（フェイシャル）" rows={[...menu.facial]} />
        <Section title="Body（ボディケア）" rows={[...menu.body]} />
        <Section title="耳ツボ" rows={[...menu.ear]} />
      </div>
    </div>
  );
}