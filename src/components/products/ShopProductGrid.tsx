import ProductCard from "./ProductCard";
import { Product } from "../../../lib/types";

type Props = {
  products: Product[];
};

export default function ShopProductGrid({ products }: Props) {
  const fetchProducts = async (page: number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/products?page=${page}&limit=10`
      );
      const result = await res.json();
      console.log(result);
      // setProducts(result.data);
      // setTotalPages(result.totalPages);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
