import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, LogIn, MoveRight, UserPlus } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroRoom from "@/assets/art/gas-station.jpg";
import logo from "@/assets/roomkult-logo.jpg.asset.json";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enter ROOMKULT — Sign In or Browse as Guest" },
      {
        name: "description",
        content: "Enter ROOMKULT with an account or browse the underground decor collection as a guest.",
      },
      { property: "og:title", content: "Enter ROOMKULT" },
      {
        property: "og:description",
        content: "Sign in, create an account, or enter the ROOMKULT collection as a guest.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessPage,
});

type Mode = "login" | "signup";

function AccessPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const switchMode = (nextMode: Mode) => {
    setMode(nextMode);
    setError("");
    setMessage("");
  };

  const handleEmailAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const result =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/home` },
          });

    setLoading(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }

    if (mode === "signup" && !result.data.session) {
      setMessage("ACCESS LINK SENT — CHECK YOUR INBOX TO COMPLETE ENTRY.");
      return;
    }

    await navigate({ to: "/home" });
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError("");
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/home`,
      extraParams: { prompt: "select_account" },
    });
    if (result.error) {
      setError(result.error.message);
      setLoading(false);
      return;
    }
    if (!result.redirected) await navigate({ to: "/home" });
  };

  return (
    <main className="page-grain relative min-h-screen overflow-hidden bg-background">
      <img
        src={heroRoom}
        alt="Neon-lit ROOMKULT world at night"
        className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
      />
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
      <div className="access-vignette absolute inset-0" aria-hidden />
      <div className="scanlines sweep absolute inset-0" aria-hidden />

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="access-reveal max-w-2xl pt-8 lg:pt-0">
          <div className="flex items-center gap-4">
            <img
              src={logo.url}
              alt="ROOMKULT logo"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-toxic/70 ring-glow"
            />
            <span className="font-display text-lg font-bold tracking-[0.28em] text-foreground">
              ROOM<span className="text-toxic">KULT</span>
            </span>
          </div>

          <p className="mt-16 text-[10px] font-semibold tracking-[0.5em] text-toxic sm:text-xs">
            / PRIVATE FREQUENCY 001
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.9] sm:text-7xl lg:text-8xl">
            CROSS THE
            <br />
            <span className="glitch-title text-primary" data-text="THRESHOLD.">
              THRESHOLD.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your walls are waiting. Sign in to keep your finds close, or move through the
            collection unseen.
          </p>

          <div className="mt-12 hidden items-center gap-4 text-[10px] tracking-[0.3em] text-muted-foreground lg:flex">
            <span className="h-px w-16 bg-toxic/70" />
            NIGHT VISION / ALWAYS ON
          </div>
        </div>

        <div className="access-reveal-delayed border border-border/80 bg-background/85 p-5 shadow-[var(--glow-soft)] backdrop-blur-xl sm:p-8">
          <div className="flex border-b border-border" role="tablist" aria-label="Account access">
            {(["login", "signup"] as const).map((tab) => (
              <Button
                key={tab}
                type="button"
                variant="ghost"
                role="tab"
                aria-selected={mode === tab}
                onClick={() => switchMode(tab)}
                className={`relative h-12 flex-1 rounded-none bg-transparent text-[11px] font-bold tracking-[0.3em] hover:bg-secondary ${
                  mode === tab ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {tab === "login" ? <LogIn /> : <UserPlus />}
                {tab === "login" ? "SIGN IN" : "SIGN UP"}
                {mode === tab && <span className="absolute inset-x-0 bottom-0 h-px bg-toxic" />}
              </Button>
            ))}
          </div>

          <div className="py-7">
            <p className="text-[10px] tracking-[0.35em] text-toxic">
              {mode === "login" ? "RETURNING MEMBER" : "NEW INITIATE"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              {mode === "login" ? "ENTER YOUR FREQUENCY" : "JOIN THE INNER CIRCLE"}
            </h2>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.28em] text-muted-foreground">
                EMAIL
              </span>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                placeholder="you@thevoid.com"
                className="h-12 rounded-none border-border bg-card/70 px-4 focus-visible:ring-toxic"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.28em] text-muted-foreground">
                PASSWORD
              </span>
              <span className="relative block">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  minLength={6}
                  required
                  placeholder="••••••••"
                  className="h-12 rounded-none border-border bg-card/70 px-4 pr-12 focus-visible:ring-toxic"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
              </span>
            </label>

            {error && (
              <p role="alert" className="border-l-2 border-destructive pl-3 text-xs text-destructive">
                {error}
              </p>
            )}
            {message && (
              <p role="status" className="border-l-2 border-toxic pl-3 text-xs text-toxic">
                {message}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-none text-xs font-bold tracking-[0.3em]"
            >
              {loading ? "CONNECTING..." : mode === "login" ? "ENTER ROOMKULT" : "CREATE ACCESS"}
              {!loading && <MoveRight />}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-[9px] tracking-[0.25em] text-muted-foreground">OR CONNECT WITH</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={handleGoogleAuth}
            className="h-12 w-full rounded-none text-xs font-bold tracking-[0.22em]"
          >
            <span className="font-display text-base">G</span>
            GOOGLE
          </Button>

          <div className="mt-6 border-t border-border pt-6 text-center">
            <Button asChild variant="ghost" className="group h-auto rounded-none px-3 py-2 text-[10px] tracking-[0.28em] text-muted-foreground hover:text-foreground">
              <Link to="/home">
                CONTINUE AS GUEST
                <MoveRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}