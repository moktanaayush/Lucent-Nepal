"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Filter() {
  const [openSections, setOpenSections] = useState({
    color: false,
    price: false,
    size: false,
  });

  const toggleSection = (section: "color" | "price" | "size") => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col w-full">
      <div className="py-4 flex flex-row justify-between border-b-1 border-black/10">
        <p className="uppercase tracking-wider text-xs">Filter By</p>
      </div>
      <div className="py-4 flex flex-row justify-between border-b-1 border-black/10">
        <p className="uppercase tracking-tight text-sm">Color</p>
        <button className="cursor-pointer">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
      {/* <div className="py-3 flex flex-row justify-between border-b-1 border-black/10">
        <p className="uppercase tracking-[0.1em] text-sm">Price</p>
        <button className="cursor-pointer">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div> */}

      {/* {Price} */}
      <div className="py-4 border-b border-black/10">
        <div className="flex flex-row justify-between items-center">
          <p className="uppercase tracking-tight text-sm">Price</p>
          <button onClick={() => toggleSection("price")}>
            {openSections.price ? (
              <ChevronUp className="w-5 h-5 cursor-pointer" />
            ) : (
              <ChevronDown className="w-5 h-5 cursor-pointer" />
            )}
          </button>
        </div>
        {openSections.price && (
          <div className="mt-4">
            {/* Add your price range UI here (as shown earlier) */}
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
              />
              <span className="text-sm text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
              />
            </div>
            <div className="relative mt-4 w-full h-1 bg-black rounded-full">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 bg-white border-2 border-black rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-4 bg-white border-2 border-black rounded-full" />
            </div>
          </div>
        )}
      </div>

      {/* Size */}
      <div className="py-4 flex flex-row justify-between border-b-1 border-black/10">
        <p className="uppercase tracking-tight text-sm">Size</p>
        <button className="cursor-pointer">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="py-4 border-b border-black/10">
        <div className="flex flex-row justify-between">
          <p className="cursor-pointer uppercase tracking-tight text-sm">
            Size
          </p>
          <button
            className="cursor-pointer"
            onClick={() => toggleSection("size")}
          >
            {openSections.size ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
        {openSections && (
          <div className="block mt-2 space-y-2 text-sm text-gray-600">
            <input type="checkbox" />
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        )}
      </div>
    </div>
  );
}
