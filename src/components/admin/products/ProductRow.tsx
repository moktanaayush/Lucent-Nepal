// components/admin/ProductRow.tsx
"use client";
import Image from "next/image";
import {
  Star,
  MoreHorizontal,
  Edit,
  Eye,
  Trash,
  LineChart,
} from "lucide-react";
import { useState } from "react";

export default function ProductRow({ product }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50">
      <td className="p-4">
        <input type="checkbox" />
      </td>
      <td className="p-4 flex items-center gap-2">
        <Image
          src={product.image}
          alt={product.name}
          width={40}
          height={40}
          className="rounded"
        />
        <span className="font-semibold">{product.name}</span>
      </td>
      <td className="p-4 text-gray-500">{product.sku}</td>
      <td className="p-4 font-bold">${product.price.toFixed(2)}</td>
      <td className="p-4">{product.stock}</td>
      <td className="p-4 text-gray-500">{product.category.join(", ")}</td>
      <td className="p-4 text-center">
        <Star
          className={`w-4 h-4 ${
            product.featured
              ? "text-yellow-500 fill-yellow-500"
              : "text-indigo-400"
          }`}
        />
      </td>
    </tr>
  );
}
