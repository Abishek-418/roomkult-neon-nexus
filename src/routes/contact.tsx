import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ROOMKULT | Talk To The Kult" },
      {
        name: "description",
        content:
          "Questions about a poster drop, custom decor or an order? Talk to the Kult — ROOMKULT answers within 24 hours.",
      },
      { property: "og:title", content: "Talk To The Kult | ROOMKULT" },
      {
        property: "og:description",
        content: "Talk to the Kult — ROOMKULT orders, custom prints, collabs and wholesale.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-[var(--glow-soft)]";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs tracking-[0.4em] text-toxic">/ TRANSMISSION</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          SEND A <span className="text-toxic">SIGNAL</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Orders, custom prints, collabs, wholesale. We read everything. We answer within 24 hours.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-5 border border-border/70 bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-[11px] tracking-[0.25em] text-toxic">
                NAME
              </label>
              <input id="name" name="name" required className={field} placeholder="your alias" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-[11px] tracking-[0.25em] text-toxic">
                EMAIL
              </label>
              <input id="email" name="email" type="email" required className={field} placeholder="you@void.com" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-[11px] tracking-[0.25em] text-toxic">
              SUBJECT
            </label>
            <input id="subject" name="subject" required className={field} placeholder="order / custom / collab" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-[11px] tracking-[0.25em] text-toxic">
              MESSAGE
            </label>
            <textarea id="message" name="message" required rows={6} className={field} placeholder="speak..." />
          </div>
          <button
            type="submit"
            className="w-full border border-primary bg-primary py-3 text-xs font-bold tracking-[0.3em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary hover:shadow-[var(--glow-hard)]"
          >
            {sent ? "SIGNAL RECEIVED" : "TRANSMIT"}
          </button>
          {sent && (
            <p className="text-center text-xs tracking-[0.2em] text-toxic">
              WE'LL BE IN TOUCH. STAY WEIRD.
            </p>
          )}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}