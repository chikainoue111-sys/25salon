import { siteConfig } from "@/lib/site";
import { GlassCard, PageHeader, PrimaryButton, SecondaryButton } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <GlassCard className="p-7 md:p-12">
        <PageHeader
          eyebrow={`${siteConfig.area}｜完全予約制`}
          title="ネイルも肌も体も。静かに整う、隠れ家トータルサロン"
          description="ジェルネイル（ハンド・フット）／毛穴洗浄／ハーブピーリング／たるみケア／よもぎ蒸し／脱毛／痩身／耳ツボまで。目的や悩みに合わせて、無理のないメニューをご提案します。"
          actions={
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={siteConfig.reservationUrl}>
                ホットペッパーで予約する
              </PrimaryButton>
              <SecondaryButton href="/menu">メニューを見る</SecondaryButton>
            </div>
          }
        />
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "完全予約制のプライベート空間",
            desc: "周りを気にせず、ゆったりと自分のペースで過ごせます。",
          },
          {
            title: "トータルで整える提案",
            desc: "ネイル×フェイシャル×ボディ。目的に合わせて組み合わせもOK。",
          },
          {
            title: "守口・大日エリア",
            desc: "住宅地の隠れ家サロン。詳細はご予約確定後のご案内も可能です。",
          },
        ].map((x) => (
          <GlassCard key={x.title} className="p-6">
            <h2 className="section-title text-lg font-semibold text-neutral-900">
              {x.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-neutral-700">{x.desc}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-6 md:p-8">
        <h2 className="section-title text-lg font-semibold text-neutral-900">
          はじめての方へ
        </h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { t: "① 予約", d: "ホットペッパーからメニューを選んで予約" },
            { t: "② 来店", d: "カウンセリングで悩みや目的を相談" },
            { t: "③ 施術", d: "丁寧に施術。次回の提案もOK" },
          ].map((s) => (
            <li
              key={s.t}
              className="rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur"
            >
              <p className="text-sm font-semibold text-neutral-900">{s.t}</p>
              <p className="mt-1 text-sm text-neutral-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </GlassCard>
    </div>
  );
}