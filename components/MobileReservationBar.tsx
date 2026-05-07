import { siteConfig } from "@/lib/site";

export default function MobileReservationBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/80 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a
          href={siteConfig.reservationUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
        >
          ホットペッパーで予約
        </a>
      </div>
    </div>
  );
}