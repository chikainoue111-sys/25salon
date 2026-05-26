import Image from "next/image";

export default function MediaBlock({
  src,
  alt,
  priority,
}: {
  src?: string; // 例: "/gallery/01.jpg"
  alt?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/35 backdrop-blur">
        <div className="aspect-[4/3] w-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-neutral-200/30" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-full border border-neutral-900/10 bg-white/40 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-neutral-700">
            IMAGE
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[28px]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
    </div>
  );
}