import { useEffect, useState } from "react";
import logo from "@/assets/roomkult-logo.jpg.asset.json";

const LINES = [
  "SIGNAL ACQUIRED",
  "NIGHT VISION ON",
  "WELCOME TO THE KULT",
];

export function LogoIntro() {
  const [phase, setPhase] = useState<"idle" | "run" | "out" | "done">("idle");
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("rk-intro") === "1") {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("rk-intro", "1");
    setPhase("run");
    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setLine(1), 900),
      window.setTimeout(() => setLine(2), 1500),
      window.setTimeout(() => setPhase("out"), 2200),
      window.setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 3000),
    ];
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done" || phase === "idle") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background ${
        phase === "out" ? "intro-shutter" : ""
      }`}
    >
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="scanlines sweep absolute inset-0" />

      <div className="relative flex flex-col items-center">
        <div className="intro-mark relative">
          <span className="intro-ring absolute -inset-6 rounded-full border border-primary/40" />
          <span className="intro-ring intro-ring-2 absolute -inset-12 rounded-full border border-primary/20" />
          <img
            src={logo.url}
            alt=""
            className="relative h-28 w-28 rounded-full object-cover ring-1 ring-primary/70 ring-glow sm:h-36 sm:w-36"
          />
          <img
            src={logo.url}
            alt=""
            className="intro-ghost absolute inset-0 h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
          />
        </div>

        <h2
          className="glitch-title mt-10 font-display text-2xl font-bold tracking-[0.42em] text-foreground sm:text-4xl"
          data-text="ROOMKULT"
        >
          ROOMKULT
        </h2>

        <div className="mt-6 h-4 overflow-hidden">
          <p key={line} className="intro-line text-[0.65rem] tracking-[0.5em] text-toxic">
            {LINES[line]}
          </p>
        </div>

        <div className="mt-8 h-px w-56 overflow-hidden bg-border">
          <span className="intro-bar block h-full w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
