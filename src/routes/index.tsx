import { createFileRoute } from "@tanstack/react-router";

import { HomeContent } from "@/components/site/HomeContent";
import { AccessGate } from "@/components/site/AccessGate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROOMKULT — Edgy Alt Posters & Room Decor" },
      {
        name: "description",
        content:
          "Underground posters, mirrors and rugs for rooms that refuse to be normal. Sign in, sign up, or browse ROOMKULT as a guest.",
      },
      { property: "og:title", content: "ROOMKULT — Edgy Alt Posters & Room Decor" },
      {
        property: "og:description",
        content: "Underground wall art and interior artifacts for GenZ rooms. Join the kult.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <HomeContent />
      <AccessGate />
    </>
  );
}
