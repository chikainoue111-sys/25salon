export default function SalonPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold md:text-3xl">サロン紹介</h1>
      <p className="text-sm leading-7 text-neutral-700 md:text-base">
        大阪府守口市・大日エリアの住宅地にある隠れ家トータルサロンです。
        年齢やお悩みに合わせて、ネイル・肌・体のケアを丁寧にご提案します。
      </p>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-lg font-semibold">サロンの特徴</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-700">
          <li>完全予約制で落ち着いて通える</li>
          <li>ネイル／フェイシャル／ボディまで一箇所でケア</li>
          <li>お悩みや目的に合わせてメニューをご提案</li>
        </ul>
      </div>
    </div>
  );
}