"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type Slide = {
  sp: string;
  pc: string;
  alt: string;
  position?: string;
};

type Phase = "hold" | "fade";

export default function HeroSlider({
  slides,
  holdMs = 5333,
  fadeMs = 2800,
  overlay = 0.38,
}: {
  slides: Slide[];
  holdMs?: number;
  fadeMs?: number;
  overlay?: number;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  const [active, setActive] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [mix, setMix] = useState(0); // 0..1

  const rafRef = useRef<number | null>(null);
  const phaseRef = useRef<Phase>("hold");
  const tRef = useRef<number>(0);

  const clearRaf = () => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  useEffect(() => {
    clearRaf();
    if (safeSlides.length <= 1) return;

    // start fresh
    phaseRef.current = "hold";
    setNext(null);
    setMix(0);
    tRef.current = performance.now();

    const step = (now: number) => {
      const dt = now - tRef.current;

      if (phaseRef.current === "hold") {
        if (dt >= holdMs) {
          // begin fade
          const to = (active + 1) % safeSlides.length;
          setNext(to);
          phaseRef.current = "fade";
          tRef.current = now;
        }
      } else {
        // fade
        const p = Math.min(1, dt / fadeMs);
        setMix(p);

        if (p >= 1) {
          // commit to next
          setActive((prev) => (prev + 1) % safeSlides.length);
          setNext(null);
          setMix(0);
          phaseRef.current = "hold";
          tRef.current = now;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => clearRaf();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeSlides.length, holdMs, fadeMs, active]);

  // 画面が非表示→再表示のときに復帰しやすくする
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible") {
        // 時刻基準をリセット（dtが暴れないように）
        tRef.current = performance.now();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const a = safeSlides[active];
  const b = next === null ? null : safeSlides[next];

  const posA = a?.position ?? "50% 35%";
  const posB = b?.position ?? "50% 35%";

  return (
    <div className="relative overflow-hidden">
      <div className="relative aspect-[4/5] w-full md:aspect-[16/8]">
        {/* base */}
        <Image
          src={a.sp}
          alt={a.alt}
          fill
          priority
          className="object-cover md:hidden"
          style={{ objectPosition: posA }}
          sizes="100vw"
        />
        <Image
          src={a.pc}
          alt={a.alt}
          fill
          priority
          className="hidden object-cover md:block"
          style={{ objectPosition: posA }}
          sizes="1100px"
        />

        {/* next (opacity = mix) */}
        {b ? (
          <>
            <Image
              src={b.sp}
              alt={b.alt}
              fill
              className="object-cover md:hidden"
              sizes="100vw"
              style={{
                objectPosition: posB,
                opacity: mix,
                willChange: "opacity",
              }}
            />
            <Image
              src={b.pc}
              alt={b.alt}
              fill
              className="hidden object-cover md:block"
              sizes="1100px"
              style={{
                objectPosition: posB,
                opacity: mix,
                willChange: "opacity",
              }}
            />
          </>
        ) : null}

        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${overlay})` }}
        />
      </div>

      {/* ドットは完全に撤去 */}
    </div>
  );
}