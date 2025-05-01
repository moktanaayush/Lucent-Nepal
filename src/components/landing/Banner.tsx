"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const banners = [
  "Free Shipping in Nepal on Orders Over Rs. 5000!",
  "Use Code 'LUCENT10' to Get 10% Off Your First Order!",
  "Visit Our Store in Kathmandu – Now Open!",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + banners.length) % banners.length);

  const next = () => setCurrent((current + 1) % banners.length);

  return (
    <div className=" bg-black w-full">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
        <button className="cursor-pointer hover:text-gray-300" onClick={prev}>
          <ChevronLeft className="text-white w-5 h-5" />
        </button>
        <p className="text-center text-white transition-opacity duration-300 text-xs uppercase">
          {banners[current]}
        </p>
        <button onClick={next} className="cursor-pointer">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
