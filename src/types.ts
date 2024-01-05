export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: { rate: number; count: number };
};
