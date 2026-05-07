import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-12">
        <p className="text-sm text-neutral-600">
          {siteConfig.area}｜���全予約制
        </p>
        <h1 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
          住宅地にひっそり。
          <br className="hidden md:block" />
          ネイルも肌も体も整う、隠れ家トータルサロン
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
          ジェルネイル（ハンド・フット）／毛穴洗浄／ハーブピーリング／たるみケア／
          よもぎ蒸し／脱毛／痩身／耳ツボまで。目的に合わせて、無理のないメニューをご提案します。
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.reservationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            ホットペッパーで予約する
          </a>
          <a
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            メニューを見る
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "落ち着ける空間",
            desc: "完全予約制のプライベート空間で、周りを気にせずリラックス。",
          },
          {
            title: "トータルで提案",
            desc: "ネイル×フェイシャル×ボディを目的に合わせて組み合わせ。",
          },
          {
            title: "守口・大日エリア",
            desc: "大日駅から少し離れた住宅地。詳細はご予約確定後のご案内も可能。",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-sm font-semibold text-neutral-900">{x.title}</p>
            <p className="mt-2 text-sm leading-7 text-neutral-700">{x.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}