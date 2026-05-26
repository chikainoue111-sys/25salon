"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string };

export default function HeroSlider({
  slides,
  autoMs = 5500,
}: {
  slides: Slide[];
  autoMs?: number;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % safeSlides.length), autoMs);
    return () => clearInterval(t);
  }, [autoMs, safeSlides.length]);

  const current = safeSlides[i] ?? safeSlides[0];

  return (
    <div className="relative overflow-hidden rounded-[28px]">
      {/* image */}
      <div className="relative aspect-[4/5] w-full md:aspect-[16/8]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
        {/* overlay (文字が読みやすいように) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
      </div>

      {/* dots */}
      {safeSlides.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {safeSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={[
                "h-2 w-2 rounded-full border border-white/60",
                idx === i ? "bg-white" : "bg-white/30",
              ].join(" ")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}