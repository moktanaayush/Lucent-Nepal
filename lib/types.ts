type Product = {
  id: number;
  title: string;
  price: number;
  salePrice: number;
  stock: number;
  category: string;
  images: string[];
  featured: boolean;
  label: string | null;
  colors: string[];
  size: string[];
};

export type { Product };
