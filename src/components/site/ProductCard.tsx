import type { Product } from "@/data/products";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  return (
    <article className="group relative overflow-hidden border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[var(--glow-hard)]">
      <span className="pointer-events-none absolute right-2 top-2 z-10 font-display text-[10px] tracking-[0.25em] text-muted-foreground/70">
        {index !== undefined ? String(index + 1).padStart(2, "0") : ""}
      </span>
      <div className="scanlines relative aspect-[3/4] overflow-hidden bg-background">
        <span className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(120deg,transparent_40%,color-mix(in_oklab,var(--bone)_16%,transparent)_50%,transparent_60%)]" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.07] group-hover:opacity-100 group-hover:contrast-125"
        />
        {product.tag && (
          <span className="absolute left-0 top-3 z-10 bg-toxic px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-background">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 z-10 translate-y-4 border border-primary bg-background/90 py-2.5 text-[11px] font-bold tracking-[0.25em] text-primary opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground group-hover:translate-y-0 group-hover:opacity-100"
        >
          ADD TO CART
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="glitch-hover font-display text-sm font-semibold tracking-wide text-foreground">
          {product.name}
        </h3>
        <span className="shrink-0 text-sm font-semibold text-primary">₹{product.price}</span>
      </div>
    </article>
  );
}