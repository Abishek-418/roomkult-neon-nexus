import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, type Category } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Alt Posters & Decor | ROOMKULT" },
      {
        name: "description",
        content:
          "Browse ROOMKULT's underground poster drops — cars, games, movies, sports — plus mirrors and rugs for rooms with attitude.",
      },
      { property: "og:title", content: "Shop Alt Posters & Decor | ROOMKULT" },
      {
        property: "og:description",
        content: "Neon-green, black-hearted wall art and interior artifacts. Shop the ROOMKULT drops.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.4em] text-primary">/ THE ARCHIVE</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
              SHOP THE <span className="text-primary text-glow">KULT</span>
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {(["all", ...categories.map((c) => c.id)] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id as Category | "all")}
                className={`border px-4 py-2 text-[11px] font-bold tracking-[0.25em] transition-all ${
                  active === id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {id.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}