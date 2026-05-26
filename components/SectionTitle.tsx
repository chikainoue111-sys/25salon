export default function SectionTitle({
  id,
  title,
  subtitle,
}: {
  id?: string;
  title: string; // e.g. "about us"
  subtitle?: string; // e.g. "サロンについて"
}) {
  return (
    <div id={id} className="scroll-mt-28 text-center">
      <div className="mx-auto h-10 w-px bg-neutral-900/50" />
      <h2 className="mt-4 font-serif text-4xl font-semibold tracking-wide text-neutral-900 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm tracking-[0.18em] text-neutral-700">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}