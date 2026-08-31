import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { Marquee } from "@/components/site/Marquee";
import { DropCountdown } from "@/components/site/DropCountdown";
import { LogoIntro } from "@/components/site/LogoIntro";

import { categories, products } from "@/data/products";
import heroRoom from "@/assets/art/gas-station.jpg";
import logo from "@/assets/roomkult-logo.jpg.asset.json";
import posterMore1 from "@/assets/art/green-hands.jpg";
import posterMore2 from "@/assets/art/green-eyed-crowd.jpg";
import decorMirror from "@/assets/art/eyes-pattern.jpg";

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
    <div className="page-grain min-h-screen bg-background">
      <LogoIntro />
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="scanlines grain sweep relative overflow-hidden">
          <img
            src={heroRoom}
            alt="Deserted gas station glowing with eerie neon green light at night"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-fade)" }}
            aria-hidden
          />
          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6">
            <img
              src={logo.url}
              alt="ROOMKULT logo"
              className="float-slow mb-7 h-16 w-16 rounded-full object-cover ring-1 ring-primary/60 ring-glow"
            />
            <p className="flicker text-xs tracking-[0.5em] text-toxic">
              EST. UNDERGROUND — NIGHT VISION ON
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-[7.5rem]">
              YOUR ROOM
              <br />
              IS A{" "}
              <span className="glitch-title pulse-glow inline-block text-primary" data-text="CULT">
                CULT
              </span>
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
                className="border border-primary bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary hover:shadow-[var(--glow-hard)]"
              >
                ENTER THE SHOP
              </Link>
              <Link
                to="/contact"
                className="glitch-hover border border-border px-7 py-3.5 text-xs font-bold tracking-[0.3em] text-foreground transition-all hover:border-primary hover:text-primary"
              >
                TALK TO US
              </Link>
            </div>

            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-border/60 bg-border/60 sm:grid-cols-4">
              {[
                ["12K+", "MEMBERS"],
                ["48H", "DISPATCH"],
                ["300GSM", "MATTE STOCK"],
                ["01", "DROP LIVE"],
              ].map(([v, k]) => (
                <div key={k} className="bg-background/80 px-4 py-4 backdrop-blur-sm">
                  <dt className="font-display text-xl font-bold text-foreground sm:text-2xl">{v}</dt>
                  <dd className="mt-1 text-[10px] tracking-[0.25em] text-muted-foreground">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee
          className="border-y border-border/60 bg-card/60 py-3 text-[11px] font-bold tracking-[0.45em] whitespace-nowrap text-foreground"
          items={[
            "FREE SHIPPING OVER ₹999",
            "NEW DROPS EVERY FRIDAY",
            "JOIN THE KULT",
            "PRINTED IN THE DARK",
          ]}
        />

        {/* CATEGORIES — editorial index board */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-toxic">/ INDEX 01—05</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">CHOOSE YOUR AFFLICTION</h2>
            </div>
            <Link to="/shop" className="hidden text-xs tracking-[0.25em] text-muted-foreground hover:text-foreground sm:block">
              VIEW ALL →
            </Link>
          </div>

          <div className="mt-8 grid auto-rows-[170px] grid-cols-2 gap-3 lg:grid-cols-4">
            {categories.map((c, i) => {
              const span = [
                "col-span-2 row-span-2",
                "col-span-2 row-span-1 lg:col-span-2",
                "col-span-1 row-span-1 lg:row-span-2",
                "col-span-1 row-span-1",
                "col-span-2 row-span-1 lg:col-span-1",
              ][i];
              return (
                <Link
                  key={c.id}
                  to="/shop"
                  className={`group relative overflow-hidden border border-border/70 bg-card transition-all duration-300 hover:border-foreground/60 ${span}`}
                >
                  <img
                    src={c.image}
                    alt={`${c.label} posters`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-80 group-hover:grayscale-0"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" aria-hidden />
                  <span className="absolute left-3 top-3 font-display text-[10px] tracking-[0.35em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span
                    className="absolute right-2 top-4 text-[9px] tracking-[0.4em] text-toxic opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    ENTER
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="glitch-hover font-display text-xl font-bold leading-none tracking-tight sm:text-3xl">
                      {c.label.toUpperCase()}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-muted-foreground opacity-70 transition-opacity group-hover:opacity-100">
                      {c.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* DROP COUNTDOWN */}
        <section className="scanlines relative overflow-hidden border-y border-border/60">
          <img
            src={posterMore2}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/70" aria-hidden />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flicker text-xs tracking-[0.4em] text-toxic">/ DROP 02 INCOMING</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
                THE NEXT TRANSMISSION LANDS
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Friday, 8PM IST. Limited runs, numbered prints, gone before midnight.
              </p>
            </div>
            <DropCountdown />
          </div>
        </section>

        {/* FEATURED */}
        <section className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <p className="text-xs tracking-[0.4em] text-toxic">/ DROP 01</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              STILL WET WITH <span className="text-toxic">INK</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {featured.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
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

        {/* MANIFESTO */}
        <section className="grain relative overflow-hidden border-t border-border/60">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
            <div className="scanlines relative overflow-hidden border border-border/70">
              <img
                src={decorMirror}
                alt="Surreal pattern of glowing green eyes"
                loading="lazy"
                className="h-[420px] w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] text-toxic">/ THE MANIFESTO</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
                BEIGE IS A<br />
                <span className="text-toxic">PERSONALITY DISORDER</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  ["01", "PRINTED IN THE DARK", "300GSM matte, ink so deep it eats light."],
                  ["02", "NUMBERED RUNS", "Once a drop dies, it stays dead. No restocks."],
                  ["03", "NO ALGORITHM ART", "Every piece is picked by humans who don't sleep."],
                ].map(([n, t, d]) => (
                  <li key={n} className="group flex gap-5 border-b border-border/60 pb-4">
                    <span className="font-display text-sm text-toxic/80">{n}</span>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-wide transition-colors group-hover:text-primary">
                        {t}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CULT LOG / TESTIMONIALS */}
        <section className="border-t border-border/60 bg-card/20">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <p className="text-xs tracking-[0.4em] text-toxic">/ CULT LOG</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">WHAT THEY WHISPER</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["my walls finally match my sleep schedule.", "@nocturne.raya", "MUMBAI"],
                ["the green hits different at 3am. no notes.", "@voidkid_", "BENGALURU"],
                ["roommate said it's cursed. i said thanks.", "@static.hymn", "DELHI"],
              ].map(([q, h, c]) => (
                <figure
                  key={h}
                  className="border border-border/70 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--glow-soft)]"
                >
                  <div className="text-xs tracking-[0.3em] text-toxic">★★★★★</div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                    “{q}”
                  </blockquote>
                  <figcaption className="mt-5 text-[10px] tracking-[0.25em] text-muted-foreground">
                    {h} — {c}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* WALL OF THE KULT */}
        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-xs tracking-[0.4em] text-toxic">/ WALL OF THE KULT</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              TAGGED <span className="text-toxic">#ROOMKULT</span>
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            <div className="flex gap-3 overflow-hidden">
              <div className="marquee-track gap-3">
                {[...products, ...products].map((p, i) => (
                  <img
                    key={i}
                    src={p.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="h-40 w-32 shrink-0 border border-border/60 object-cover opacity-60 transition-opacity duration-300 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
            <Marquee
              className="border-y border-border/60 py-2 text-[10px] tracking-[0.4em] whitespace-nowrap text-muted-foreground"
              reverse
              items={["POSTERS", "MIRRORS", "RUGS", "NIGHT VISION", "NO BEIGE", "DROP 02 SOON"]}
            />
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="scanlines relative overflow-hidden border-t border-border/60">
          <img
            src={posterMore1}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-background/75" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              GET THE <span className="text-toxic">SIGNAL</span> FIRST
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Early access to every drop, before the algorithm finds out.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@thevoid.com"
                aria-label="Email address"
                className="w-full border border-border bg-background/80 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="shrink-0 border border-primary bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.3em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary hover:shadow-[var(--glow-hard)]"
              >
                JOIN
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
