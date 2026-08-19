import posterCars from "@/assets/poster-cars.jpg";
import posterGames from "@/assets/poster-games.jpg";
import posterMovies from "@/assets/poster-movies.jpg";
import posterSports from "@/assets/poster-sports.jpg";
import posterMore1 from "@/assets/poster-more-1.jpg";
import posterMore2 from "@/assets/poster-more-2.jpg";
import decorMirror from "@/assets/decor-mirror.jpg";

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
  { id: "cars", label: "Cars", blurb: "Midnight machines & tail-light rituals", image: posterCars },
  { id: "games", label: "Games", blurb: "Pixel gods & console heresy", image: posterGames },
  { id: "movies", label: "Movies", blurb: "Cult frames, banned scenes", image: posterMovies },
  { id: "sports", label: "Sports", blurb: "Icons of the floodlit arena", image: posterSports },
  { id: "decor", label: "Decor", blurb: "Mirrors, rugs & room artifacts", image: decorMirror },
];

export const products: Product[] = [
  { id: "p1", name: "NIGHT DRIVE // 3AM", price: 599, category: "cars", image: posterCars, tag: "BESTSELLER" },
  { id: "p2", name: "REDLINE RITUAL", price: 649, category: "cars", image: posterMore1 },
  { id: "p3", name: "GAME OVER, AGAIN", price: 549, category: "games", image: posterGames, tag: "NEW" },
  { id: "p4", name: "PIXEL MARTYR", price: 599, category: "games", image: posterMore2 },
  { id: "p5", name: "CULT CLASSIC REEL", price: 699, category: "movies", image: posterMovies, tag: "LIMITED" },
  { id: "p6", name: "FINAL FRAME", price: 599, category: "movies", image: posterMore1 },
  { id: "p7", name: "FLOODLIGHT SAINT", price: 649, category: "sports", image: posterSports },
  { id: "p8", name: "OVERTIME GODS", price: 599, category: "sports", image: posterMore2 },
  { id: "p9", name: "TOXIC MIRROR / WAVE", price: 1899, category: "decor", image: decorMirror, tag: "DROP 01" },
  { id: "p10", name: "STATIC RUG / 4FT", price: 2499, category: "decor", image: posterMore1 },
  { id: "p11", name: "ASPHALT SAINTS", price: 599, category: "cars", image: posterCars },
  { id: "p12", name: "SECOND LIFE", price: 549, category: "games", image: posterMore2 },
];