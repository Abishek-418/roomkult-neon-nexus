import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { Marquee } from "@/components/site/Marquee";
import { DropCountdown } from "@/components/site/DropCountdown";
import { categories, products } from "@/data/products";
import heroRoom from "@/assets/hero-room.jpg";
import logo from "@/assets/roomkult-logo.jpg.asset.json";
import posterMore1 from "@/assets/poster-more-1.jpg";
import posterMore2 from "@/assets/poster-more-2.jpg";
import decorMirror from "@/assets/decor-mirror.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROOMKULT — Edgy Alt Posters & Room Decor" },
      {
        name: "description",
        content:
          "ROOMKULT makes underground posters, mirrors and rugs for rooms that refuse to be normal. Toxic green, pitch black, zero rules.",
      },
      { property: "og:title", content: "ROOMKULT — Edgy Alt Posters & Room Decor" },
      {
        property: "og:description",
        content: "Underground wall art and interior artifacts for GenZ rooms. Join the kult.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="scanlines relative overflow-hidden">
          <img
            src={heroRoom}
            alt="Dark room lit by neon green light with alternative posters on the wall"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-fade)" }}
            aria-hidden
          />
          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6">
            <p className="text-xs tracking-[0.5em] text-primary">EST. UNDERGROUND</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              YOUR ROOM
              <br />
              IS A <span className="text-primary text-glow">CULT</span>
              <br />
              OF ONE.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Posters, mirrors and rugs pulled from the late-night internet. Loud walls for people
              who never wanted the beige version.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="border border-primary bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.3em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary hover:shadow-[var(--glow-hard)]"
              >
                ENTER THE SHOP
              </Link>
              <Link
                to="/contact"
                className="border border-border px-7 py-3.5 text-xs font-bold tracking-[0.3em] text-foreground transition-all hover:border-primary hover:text-primary"
              >
                TALK TO US
              </Link>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-border/60 bg-primary/10 py-3">
          <div className="flex whitespace-nowrap text-[11px] font-bold tracking-[0.45em] text-primary">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="px-6">
                FREE SHIPPING OVER ₹999 ✕ NEW DROPS EVERY FRIDAY ✕ JOIN THE KULT
              </span>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-primary">/ CATEGORIES</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">PICK YOUR POISON</h2>
            </div>
            <Link to="/shop" className="hidden text-xs tracking-[0.25em] text-muted-foreground hover:text-primary sm:block">
              VIEW ALL →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Link
                key={c.id}
                to="/shop"
                className={`group relative overflow-hidden border border-border/70 ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={c.image}
                  alt={`${c.label} posters`}
                  loading="lazy"
                  className="h-64 w-full object-cover opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                  <h3 className="font-display text-2xl font-bold tracking-wide text-foreground group-hover:text-primary">
                    {c.label.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <p className="text-xs tracking-[0.4em] text-primary">/ DROP 01</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              FRESH OFF THE <span className="text-primary text-glow">PRESS</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/shop"
                className="inline-block border border-primary px-9 py-3.5 text-xs font-bold tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                SEE EVERYTHING
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
