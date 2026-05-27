import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      className={[
        "border-t border-white/18",
        "bg-white/14",
        "backdrop-blur-md md:backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-neutral-900/90">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-neutral-700/80">
              大阪府守口市・大日エリアの住宅地にある、完全予約制の隠れ家トータルサロン。
            </p>
          </div>

          <div className="text-sm text-neutral-700/85">
            <p className="font-medium text-neutral-900/90">ご予約</p>
            <a
              href={siteConfig.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block underline underline-offset-4 hover:text-neutral-900"
            >
              ホットペッパービューティーから予約する
            </a>

            <p className="mt-4 text-xs text-neutral-600/80">
              ※住所の詳細はご予約確定後にご案内します（必要に応じて調整してください）
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-600/70">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}