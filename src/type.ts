export type Product = {
  id: number;
  slug: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};