import { useEffect, useState } from "react";

function nextFriday() {
  const now = new Date();
  const d = new Date(now);
  d.setHours(20, 0, 0, 0);
  const delta = (5 - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + delta);
  if (d.getTime() <= now.getTime()) d.setDate(d.getDate() + 7);
  return d;
}

export function DropCountdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = nextFriday().getTime();
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.floor((left ?? 0) / 1000);
  const units = [
    { label: "DAYS", v: Math.floor(s / 86400) },
    { label: "HRS", v: Math.floor((s % 86400) / 3600) },
    { label: "MIN", v: Math.floor((s % 3600) / 60) },
    { label: "SEC", v: s % 60 },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="min-w-[70px] border border-primary/40 bg-background/70 px-4 py-3 text-center backdrop-blur-sm sm:min-w-[86px]"
        >
          <div className="font-display text-2xl font-bold tabular-nums text-primary sm:text-4xl">
            {left === null ? "--" : String(u.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[9px] tracking-[0.3em] text-muted-foreground">{u.label}</div>
        </div>
      ))}
    </div>
  );
}