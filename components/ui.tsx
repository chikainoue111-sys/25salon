import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.22em] text-neutral-600">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="section-title text-3xl font-semibold leading-[1.15] text-neutral-900 md:text-5xl">
        {title}
      </h1>

      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
          {description}
        </p>
      ) : null}

      {actions ? <div className="pt-1">{actions}</div> : null}
    </header>
  );
}

export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "rounded-[28px] border border-white/70 bg-white/55 backdrop-blur-xl",
        "shadow-[0_24px_60px_-45px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

export function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "rounded-[22px] border border-white/70 bg-white/45 backdrop-blur",
        "shadow-[0_18px_50px_-40px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium",
        "bg-neutral-900 text-white shadow-lg shadow-black/10 hover:bg-neutral-800",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium",
        "border border-neutral-200/80 bg-white/35 text-neutral-900 backdrop-blur hover:bg-white/60",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export function AccentRule() {
  return (
    <div className="mt-3 h-px w-24 bg-gradient-to-r from-[rgb(var(--accent))]/70 via-[rgb(var(--accent))]/20 to-transparent" />
  );
}