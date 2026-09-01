import { useEffect, useState, type FormEvent } from "react";
import { Eye, EyeOff, LogIn, MoveRight, UserPlus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/roomkult-logo.jpg.asset.json";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup";

export function AccessGate() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("rk-access") === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dismiss = () => {
    if (typeof window !== "undefined") sessionStorage.setItem("rk-access", "1");
    setOpen(false);
  };

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
            options: { emailRedirectTo: `${window.location.origin}/` },
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

    dismiss();
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError("");
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/`,
      extraParams: { prompt: "select_account" },
    });
    if (result.error) {
      setError(result.error.message);
      setLoading(false);
      return;
    }
    if (!result.redirected) dismiss();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enter ROOMKULT"
      className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8"
    >
      <button
        type="button"
        aria-label="Continue as guest"
        onClick={dismiss}
        className="absolute inset-0 cursor-default bg-background/90 backdrop-blur-md"
      />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="access-reveal relative max-h-full w-full max-w-md overflow-y-auto border border-border/80 bg-background/95 p-5 shadow-[var(--glow-soft)] sm:p-7">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={dismiss}
          aria-label="Close and continue as guest"
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
        >
          <X />
        </Button>

        <div className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="ROOMKULT logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-toxic/70 ring-glow"
          />
          <span className="font-display text-sm font-bold tracking-[0.28em] text-foreground">
            ROOM<span className="text-toxic">KULT</span>
          </span>
        </div>

        <p className="mt-5 text-[10px] font-semibold tracking-[0.45em] text-toxic">
          / PRIVATE FREQUENCY 001
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold leading-tight">
          CROSS THE <span className="text-primary">THRESHOLD.</span>
        </h2>

        <div className="mt-6 flex border-b border-border" role="tablist" aria-label="Account access">
          {(["login", "signup"] as const).map((tab) => (
            <Button
              key={tab}
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={mode === tab}
              onClick={() => switchMode(tab)}
              className={`relative h-11 flex-1 rounded-none bg-transparent text-[11px] font-bold tracking-[0.3em] hover:bg-secondary ${
                mode === tab ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {tab === "login" ? <LogIn /> : <UserPlus />}
              {tab === "login" ? "SIGN IN" : "SIGN UP"}
              {mode === tab && <span className="absolute inset-x-0 bottom-0 h-px bg-toxic" />}
            </Button>
          ))}
        </div>

        <form onSubmit={handleEmailAuth} className="mt-6 space-y-4">
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
              className="h-11 rounded-none border-border bg-card/70 px-4 focus-visible:ring-toxic"
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
                className="h-11 rounded-none border-border bg-card/70 px-4 pr-12 focus-visible:ring-toxic"
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
            className="h-11 w-full rounded-none text-xs font-bold tracking-[0.3em]"
          >
            {loading ? "CONNECTING..." : mode === "login" ? "ENTER ROOMKULT" : "CREATE ACCESS"}
            {!loading && <MoveRight />}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[9px] tracking-[0.25em] text-muted-foreground">OR CONNECT WITH</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Button
          type="button"
          variant="outline"
          disabled={loading}
          onClick={handleGoogleAuth}
          className="h-11 w-full rounded-none text-xs font-bold tracking-[0.22em]"
        >
          <span className="font-display text-base">G</span>
          GOOGLE
        </Button>

        <div className="mt-5 border-t border-border pt-5 text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={dismiss}
            className="group h-auto rounded-none px-3 py-2 text-[10px] tracking-[0.28em] text-muted-foreground hover:text-foreground"
          >
            CONTINUE AS GUEST
            <MoveRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
