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
        <section className="scanlines grain sweep relative overflow-hidden">
          <img
            src={heroRoom}
            alt="Dark room lit by neon green light with alternative posters on the wall"
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
            <p className="flicker text-xs tracking-[0.5em] text-primary">
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
                  <dt className="font-display text-xl font-bold text-primary sm:text-2xl">{v}</dt>
                  <dd className="mt-1 text-[10px] tracking-[0.25em] text-muted-foreground">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee
          className="border-y border-border/60 bg-primary/10 py-3 text-[11px] font-bold tracking-[0.45em] whitespace-nowrap text-primary"
          items={[
            "FREE SHIPPING OVER ₹999",
            "NEW DROPS EVERY FRIDAY",
            "JOIN THE KULT",
            "PRINTED IN THE DARK",
          ]}
        />

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
                className={`group relative overflow-hidden border border-border/70 transition-all duration-300 hover:border-primary/70 hover:shadow-[var(--glow-soft)] ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={c.image}
                  alt={`${c.label} posters`}
                  loading="lazy"
                  className="h-64 w-full object-cover opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:contrast-125"
                />
                <span className="absolute right-4 top-3 font-display text-xs tracking-[0.3em] text-primary/70">
                  0{i + 1}
                </span>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                  <h3 className="glitch-hover font-display text-2xl font-bold tracking-wide text-foreground group-hover:text-primary">
                    {c.label.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
                  <span className="mt-3 inline-block max-w-fit border-b border-primary/0 text-[10px] tracking-[0.3em] text-primary opacity-0 transition-all duration-300 group-hover:border-primary group-hover:opacity-100">
                    ENTER →
                  </span>
                </div>
              </Link>
            ))}
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
              <p className="flicker text-xs tracking-[0.4em] text-primary">/ DROP 02 INCOMING</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
                THE NEXT RITUAL BEGINS
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
            <p className="text-xs tracking-[0.4em] text-primary">/ DROP 01</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              FRESH OFF THE <span className="text-primary text-glow">PRESS</span>
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
                alt="Wavy neon-lit mirror in a dark room"
                loading="lazy"
                className="h-[420px] w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] text-primary">/ THE MANIFESTO</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
                BEIGE IS A<br />
                <span className="text-primary text-glow">PERSONALITY DISORDER</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  ["01", "PRINTED IN THE DARK", "300GSM matte, ink so deep it eats light."],
                  ["02", "NUMBERED RUNS", "Once a drop dies, it stays dead. No restocks."],
                  ["03", "NO ALGORITHM ART", "Every piece is picked by humans who don't sleep."],
                ].map(([n, t, d]) => (
                  <li key={n} className="group flex gap-5 border-b border-border/60 pb-4">
                    <span className="font-display text-sm text-primary/70">{n}</span>
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
            <p className="text-xs tracking-[0.4em] text-primary">/ CULT LOG</p>
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
                  <div className="text-xs tracking-[0.3em] text-primary">★★★★★</div>
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
            <p className="text-xs tracking-[0.4em] text-primary">/ WALL OF THE KULT</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              TAGGED <span className="text-primary text-glow">#ROOMKULT</span>
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
              GET THE <span className="text-primary text-glow">SIGNAL</span> FIRST
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
