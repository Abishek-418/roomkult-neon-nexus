import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "@/assets/roomkult-logo.jpg.asset.json";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="ROOMKULT logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-primary/60 ring-glow"
          />
          <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
            ROOM<span className="text-primary text-glow">KULT</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="glitch-hover text-xs font-semibold tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-primary/50 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> CART (0)
          </button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold tracking-[0.25em] text-muted-foreground hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}