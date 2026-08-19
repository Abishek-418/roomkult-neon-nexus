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
import f40 from "@/assets/art/f40-1987.png.asset.json";
import bmwE30 from "@/assets/art/bmw-e30.png.asset.json";
import gtaNight from "@/assets/art/gta-night.png.asset.json";
import strangerThings from "@/assets/art/stranger-things.png.asset.json";
import jordan23 from "@/assets/art/jordan-23.png.asset.json";

export const refPosters = {
  f40: f40.url,
  bmwE30: bmwE30.url,
  gtaNight: gtaNight.url,
  strangerThings: strangerThings.url,
  jordan23: jordan23.url,
};

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
  { id: "cars", label: "Cars", blurb: "Midnight machines & tail-light rituals", image: f40.url },
  { id: "games", label: "Games", blurb: "Pixel gods & console heresy", image: gtaNight.url },
  { id: "movies", label: "Movies", blurb: "Cult frames, banned scenes", image: strangerThings.url },
  { id: "sports", label: "Sports", blurb: "Icons of the floodlit arena", image: jordan23.url },
  { id: "decor", label: "Decor", blurb: "Mirrors, rugs & room artifacts", image: eyesPattern },
];

export const products: Product[] = [
  { id: "r1", name: "NOT AN ORDINARY / F-40", price: 699, category: "cars", image: f40.url, tag: "BESTSELLER" },
  { id: "r2", name: "E30 / 100 DAY ARCHIVE", price: 649, category: "cars", image: bmwE30.url },
  { id: "r3", name: "LOS SANTOS / 3AM", price: 699, category: "games", image: gtaNight.url, tag: "NEW" },
  { id: "r4", name: "SOMETHING IS COMING", price: 649, category: "movies", image: strangerThings.url },
  { id: "r5", name: "JEFFREY / 1963", price: 749, category: "sports", image: jordan23.url, tag: "LIMITED" },
  { id: "p1", name: "LAST STOP / 3AM", price: 599, category: "cars", image: gasStation },
  { id: "p2", name: "STATIC BODY", price: 649, category: "cars", image: pixelNightvision },
  { id: "p3", name: "GAME OVER, AGAIN", price: 549, category: "games", image: skeletonFight },
  { id: "p4", name: "PIXEL MARTYR", price: 599, category: "games", image: meltingSkull },
  { id: "p5", name: "CULT CLASSIC REEL", price: 699, category: "movies", image: forestRitual },
  { id: "p6", name: "FINAL FRAME", price: 599, category: "movies", image: glowingEyesSketch },
  { id: "p7", name: "STAIRWELL SAINTS", price: 649, category: "sports", image: skeletonStairs },
  { id: "p8", name: "OVERTIME GODS", price: 599, category: "sports", image: greenEyedCrowd },
  { id: "p9", name: "THOUSAND EYES", price: 1899, category: "decor", image: eyesPattern, tag: "DROP 01" },
  { id: "p10", name: "REACHING / RUG 4FT", price: 2499, category: "decor", image: greenHands },
  { id: "p11", name: "ASPHALT SAINTS", price: 599, category: "cars", image: greenEyedCrowd },
  { id: "p12", name: "SECOND LIFE", price: 549, category: "games", image: meltingSkull },
];
