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
        <p className="text-xs font-medium tracking-[0.18em] text-neutral-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="section-title text-2xl font-semibold leading-tight text-neutral-900 md:text-4xl">
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

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)]",
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
      className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 hover:bg-neutral-800"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-neutral-300/80 bg-white/60 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur hover:bg-white/80"
    >
      {children}
    </a>
  );
}