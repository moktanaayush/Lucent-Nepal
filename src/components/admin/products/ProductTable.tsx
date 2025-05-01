// components/admin/ProductTable.tsx
// import ProductRow from "./ProductRow";

import ProductRow from "./ProductRow";

import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pink Fitness Tracker",
    sku: "UY3749",
    price: 99.49,
    stock: 49,
    image: "/images/tops.png",
    category: ["Fitbit", "Tracker"],
    featured: true,
  },
  {
    id: 2,
    name: "Pink Fitness Tracker",
    sku: "UY3749",
    price: 99.49,
    stock: 49,
    image: "/images/bottom.png",
    category: ["Fitbit", "Tracker"],
    featured: true,
  },
  // ... more
];

export default function ProductTable() {
  return (
    <div className="border-1 border-gray-400 rounded-lg overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="border-gray-400">
          <tr>
            <th className="p-4">
              <input type="checkbox" />
            </th>
            <th className="p-4 font-semibold">Name</th>
            <th className="p-4 font-semibold">SKU</th>
            <th className="p-4 font-semibold">Price</th>
            <th className="p-4 font-semibold">Qty</th>
            <th className="p-4 font-semibold">Category</th>
            <th className="p-4 text-center">
              <Star className="w-4 h-4" />
            </th>
            <th className="p-4 text-right">⋯</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
