import { siteConfig } from "@/lib/site";

export default function MobileReservationBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-white/40 bg-white/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <a
            href={siteConfig.reservationUrl}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto flex-1 rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white shadow-lg shadow-black/10 hover:bg-neutral-800"
          >
            予約（Hotpepper）
          </a>
        </div>
      </div>
    </div>
  );
}