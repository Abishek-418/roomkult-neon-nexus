export function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {row.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-6">
            {t}
            <span aria-hidden className="text-primary/50">
              ✕
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}