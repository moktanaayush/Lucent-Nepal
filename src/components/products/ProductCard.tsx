"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../../lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  return (
    <div
      className="relative group"
      onClick={() => router.push(`/shop/${product.id}`)}
    >
      {product.label && (
        <span className="absolute top-2 left-2 text-xs font-medium uppercase tracking-[0.05rem]">
          {product.label}
        </span>
      )}
      <button className="absolute top-2 right-2 p-1 hover:scale-110 transition">
        <Heart
          className={`w-3 h-3 ${liked ? "fill-black" : "fill-none"}`}
          onClick={() => setLiked(!liked)}
        />
      </button>
      <div className="bg-slate-50 p-4">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <h3 className="mt-2 text-center text-sm font-semibold text-black/80">
        {product.title}
      </h3>
      <p className="text-center text-xs font-semibold mt-1">
        Rs. {product.price}
      </p>
      {product.colors && (
        <div className="flex justify-center mt-2 gap-2">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
