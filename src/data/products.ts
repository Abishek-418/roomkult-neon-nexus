import eyesPattern from "@/assets/art/eyes-pattern.jpg";
import forestRitual from "@/assets/art/forest-ritual.jpg";
import gasStation from "@/assets/art/gas-station.jpg";
import glowingEyesSketch from "@/assets/art/glowing-eyes-sketch.jpg";
import greenEyedCrowd from "@/assets/art/green-eyed-crowd.jpg";
import greenHands from "@/assets/art/green-hands.jpg";
import meltingSkull from "@/assets/art/melting-skull.jpg";
import pixelNightvision from "@/assets/art/pixel-nightvision.jpg";
import skeletonFight from "@/assets/art/skeleton-fight.jpg";
import skeletonStairs from "@/assets/art/skeleton-stairs.jpg";

export { gasStation as heroImage, greenEyedCrowd as crowdImage, eyesPattern as eyesImage, greenHands as handsImage };

export type Category = "cars" | "games" | "movies" | "sports" | "decor";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  tag?: string;
};

export const categories: { id: Category; label: string; blurb: string; image: string }[] = [
  { id: "cars", label: "Cars", blurb: "Midnight machines & tail-light rituals", image: gasStation },
  { id: "games", label: "Games", blurb: "Pixel gods & console heresy", image: pixelNightvision },
  { id: "movies", label: "Movies", blurb: "Cult frames, banned scenes", image: skeletonFight },
  { id: "sports", label: "Sports", blurb: "Icons of the floodlit arena", image: skeletonStairs },
  { id: "decor", label: "Decor", blurb: "Mirrors, rugs & room artifacts", image: eyesPattern },
];

export const products: Product[] = [
  { id: "p1", name: "LAST STOP / 3AM", price: 599, category: "cars", image: gasStation, tag: "BESTSELLER" },
  { id: "p2", name: "STATIC BODY", price: 649, category: "cars", image: pixelNightvision },
  { id: "p3", name: "GAME OVER, AGAIN", price: 549, category: "games", image: skeletonFight, tag: "NEW" },
  { id: "p4", name: "PIXEL MARTYR", price: 599, category: "games", image: meltingSkull },
  { id: "p5", name: "CULT CLASSIC REEL", price: 699, category: "movies", image: forestRitual, tag: "LIMITED" },
  { id: "p6", name: "FINAL FRAME", price: 599, category: "movies", image: glowingEyesSketch },
  { id: "p7", name: "STAIRWELL SAINTS", price: 649, category: "sports", image: skeletonStairs },
  { id: "p8", name: "OVERTIME GODS", price: 599, category: "sports", image: greenEyedCrowd },
  { id: "p9", name: "THOUSAND EYES", price: 1899, category: "decor", image: eyesPattern, tag: "DROP 01" },
  { id: "p10", name: "REACHING / RUG 4FT", price: 2499, category: "decor", image: greenHands },
  { id: "p11", name: "ASPHALT SAINTS", price: 599, category: "cars", image: greenEyedCrowd },
  { id: "p12", name: "SECOND LIFE", price: 549, category: "games", image: meltingSkull },
];
