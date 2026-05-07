import { siteConfig } from "@/lib/site";

export default function CouponsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold md:text-3xl">クーポン</h1>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <p className="text-sm leading-7 text-neutral-700 md:text-base">
          クーポンはホットペッパービューティーに掲載しています。
          最新の内容はこちらからご確認ください。
        </p>

        <a
          href={siteConfig.reservationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          ホットペッパーでクーポンを見る／予約する
        </a>
      </div>
    </div>
  );
}