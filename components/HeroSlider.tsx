"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  sp: string; // 例: "/hero/sp-01.jpg"
  pc: string; // 例: "/hero/pc-01.jpg"
  alt: string;
  position?: string; // 例: "50% 35%"（coverの切れ方を調整）
};

export default function HeroSlider({
  slides,
  autoMs = 3800, // 1枚長すぎ対策（短め）
  fadeMs = 1400, // ふわーっと（長め）
}: {
  slides: Slide[];
  autoMs?: number;
  fadeMs?: number;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  const [active, setActive] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);

  const startFadeTo = (toIndex: number) => {
    if (safeSlides.length <= 1) return;
    if (toIndex === active) return;
    if (fading) return;

    setNext(toIndex);
    requestAnimationFrame(() => setFading(true));

    if (fadeRef.current) window.clearTimeout(fadeRef.current);
    fadeRef.current = window.setTimeout(() => {
      setActive(toIndex);
      setNext(null);
      setFading(false);
    }, fadeMs);
  };

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    timerRef.current = window.setInterval(() => {
      const to = (active + 1) % safeSlides.length;
      startFadeTo(to);
    }, autoMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
    };
  }, [active, autoMs, safeSlides.length]);

  const a = safeSlides[active];
  const b = next === null ? null : safeSlides[next];

  // デフォルトは少し上寄せ（顔やロゴが切れにくい）
  const objectPosition = a?.position ?? "50% 35%";
  const nextPosition = b?.position ?? "50% 35%";

  return (
    <div className="relative overflow-hidden">
      <div className="relative aspect-[4/5] w-full md:aspect-[16/8]">
        {/* base: SP */}
        <Image
          src={a.sp}
          alt={a.alt}
          fill
          priority
          className="object-cover md:hidden"
          style={{ objectPosition }}
          sizes="100vw"
        />
        {/* base: PC */}
        <Image
          src={a.pc}
          alt={a.alt}
          fill
          priority
          className="hidden object-cover md:block"
          style={{ objectPosition }}
          sizes="1100px"
        />

        {/* next layer (cross-fade): SP/PC */}
        {b ? (
          <>
            <Image
              src={b.sp}
              alt={b.alt}
              fill
              className={[
                "object-cover transition-opacity ease-in-out md:hidden",
                fading ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{
                objectPosition: nextPosition,
                transitionDuration: `${fadeMs}ms`,
              }}
              sizes="100vw"
            />
            <Image
              src={b.pc}
              alt={b.alt}
              fill
              className={[
                "hidden object-cover transition-opacity ease-in-out md:block",
                fading ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{
                objectPosition: nextPosition,
                transitionDuration: `${fadeMs}ms`,
              }}
              sizes="1100px"
            />
          </>
        ) : null}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/10" />
      </div>

      {/* dots */}
      {safeSlides.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {safeSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`slide ${idx + 1}`}
              onClick={() => startFadeTo(idx)}
              className={[
                "h-2 w-2 rounded-full border border-white/60 transition",
                idx === active && next === null
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/45",
              ].join(" ")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}