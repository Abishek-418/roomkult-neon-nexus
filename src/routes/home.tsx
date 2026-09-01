import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/site/HomeContent";

export const Route = createFileRoute("/home")({
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
  component: HomeContent,
});
