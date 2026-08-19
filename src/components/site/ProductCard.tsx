import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative overflow-hidden border border-border/70 bg-card transition-all duration-300 hover:border-primary/70 hover:shadow-[var(--glow-soft)]">
      <div className="scanlines relative aspect-[3/4] overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        {product.tag && (
          <span className="absolute left-0 top-3 bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground">
            {product.tag}
          </span>
        )}
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 translate-y-4 border border-primary bg-background/90 py-2.5 text-[11px] font-bold tracking-[0.25em] text-primary opacity-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground group-hover:translate-y-0 group-hover:opacity-100"
        >
          ADD TO CART
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="font-display text-sm font-semibold tracking-wide text-foreground">
          {product.name}
        </h3>
        <span className="shrink-0 text-sm font-semibold text-primary">₹{product.price}</span>
      </div>
    </article>
  );
}