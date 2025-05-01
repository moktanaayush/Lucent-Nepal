import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Daisy Eyelet Shirt",
    price: 298,
    currency: "Rs",
    image: "/images/bottom.png",
    label: "Almost Gone",
    colors: [],
  },
  {
    id: 2,
    title: "Daisy Eyelet Tiered Maxi Skirt",
    price: 298,
    currency: "Rs",
    image: "/images/accessories.png",
    label: "Bestseller",
    colors: [],
  },
  {
    id: 3,
    title: "Cotton Polo Shirt",
    price: 128,
    currency: "USD",
    image: "/images/tops.png",
    label: null,
    colors: ["#000000", "#f1f1f1", "#c8d6f7"],
  },
  {
    id: 4,
    title: "Cargo Pants",
    price: 228,
    currency: "USD",
    image: "/images/bottom.png",
    label: null,
    colors: ["#5b5c32", "#f3f3f3"],
  },
];

export default function ShopProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
