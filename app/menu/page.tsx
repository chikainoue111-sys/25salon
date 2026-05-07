const sections = [
  {
    title: "Nail（ジェルネイル）",
    items: ["ハンドジェル", "フットジェル", "付替オフ／オフのみ", "ネイルケア"],
  },
  {
    title: "Facial（フェイシャル）",
    items: ["毛穴洗浄", "ハーブピーリング", "たるみケア"],
  },
  {
    title: "Body（ボディケア）",
    items: ["よもぎ蒸し", "脱毛", "痩身"],
  },
  {
    title: "耳ツボ",
    items: ["耳ツボジュエリー／耳ツボケア（内容に合わせて記載）"],
  },
] as const;

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold md:text-3xl">メニュー</h1>
      <p className="text-sm leading-7 text-neutral-700 md:text-base">
        詳しい料金・所要時間は、ホットペッパーのメニューをご確認ください（またはこのページに追記してOK）。
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}