"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = { src: string; alt: string; position?: string };

export default function HeroSlider({
  slides,
  autoMs = 5500,
  fadeMs = 700,
}: {
  slides: Slide[];
  autoMs?: number;
  fadeMs?: number;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  const [active, setActive] = useState(0); // 表示中
  const [next, setNext] = useState<number | null>(null); // フェードで上に乗せる
  const [fading, setFading] = useState(false);

  const timerRef = useRef<number | null>(null);
  const fadeRef = useRef<number | null>(null);

  const startFadeTo = (toIndex: number) => {
    if (safeSlides.length <= 1) return;
    if (toIndex === active) return;
    if (fading) return;

    setNext(toIndex);
    // 次の画像を乗せた状態で opacity を上げる
    requestAnimationFrame(() => {
      setFading(true);
    });

    // fade完了後にactiveへ反映
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
    // active を監視して、次のインターバルを作り直す（ズレ防止）
  }, [active, autoMs, safeSlides.length]);

  const activeSlide = safeSlides[active];
  const nextSlide = next === null ? null : safeSlides[next];

  const activePos = activeSlide?.position ?? "50% 35%";
  const nextPos = nextSlide?.position ?? "50% 35%";

  return (
    <div className="relative overflow-hidden">
      <div className="relative aspect-[4/5] w-full md:aspect-[16/8]">
        {/* base */}
        <Image
          src={activeSlide.src}
          alt={activeSlide.alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: activePos }}
          sizes="(max-width: 768px) 100vw, 1100px"
        />

        {/* cross fade layer */}
        {nextSlide ? (
          <Image
            src={nextSlide.src}
            alt={nextSlide.alt}
            fill
            className={[
              "object-cover transition-opacity",
              fading ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              objectPosition: nextPos,
              transitionDuration: `${fadeMs}ms`,
            }}
            sizes="(max-width: 768px) 100vw, 1100px"
          />
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
                idx === active && next === null ? "bg-white" : "bg-white/30 hover:bg-white/45",
              ].join(" ")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}