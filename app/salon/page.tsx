import { PageHeader, SoftCard } from "@/components/ui";

export default function SalonPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="サロン紹介"
        description="大阪府守口市・大日エリアの住宅地にある隠れ家トータルサロン。年齢やお悩みに合わせて、ネイル・肌・体のケアを丁寧にご提案します。"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <SoftCard className="p-6">
          <h2 className="section-title text-lg font-semibold">特徴</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-700">
            <li>完全予約制で落ち着いて通える</li>
            <li>ネイル／フェイシャル／ボディまで一箇所でケア</li>
            <li>目的に合わせてメニューをご提案</li>
          </ul>
        </SoftCard>

        <SoftCard className="p-6">
          <h2 className="section-title text-lg font-semibold">お願い</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-700">
            <li>当日は時間に余裕をもってご来店ください</li>
            <li>遅刻・キャンセルは早めにご連絡ください</li>
            <li>住所詳細はご予約確定後のご案内も可能です</li>
          </ul>
        </SoftCard>
      </div>
    </div>
  );
}