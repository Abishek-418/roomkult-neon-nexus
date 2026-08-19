import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/roomkult-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="ROOMKULT" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl font-bold tracking-[0.2em]">
              ROOM<span className="text-toxic">KULT</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Underground wall art & interior artifacts. Built for rooms that refuse to be normal.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.3em] text-toxic">NAVIGATE</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.3em] text-toxic">JOIN THE KULT</h3>
          <div className="mt-4 flex gap-3">
            {[Instagram, Youtube, Mail].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} ROOMKULT — ALL RITES RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}