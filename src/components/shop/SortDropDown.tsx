"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sortOptions = [
  "Featured",
  "Price Low To High",
  "Price High To Low",
  "Best Sellers",
  "Just Added",
  "Top Rated",
];

export default function SortDropdown() {
  const [selected, setSelected] = useState("Featured");

  const handleSelect = (option: string) => {
    setSelected(option);
    // Optional: Trigger sort logic here
    console.log("Sort by:", option);
  };

  return (
    <div className="relative group inline-block text-left">
      <div className="flex items-center gap-2 text-xs font-normal text-black cursor-pointer">
        <span>Sort by:</span>
        <span className="font-semibold">{selected}</span>

        {/* Icons toggle on hover */}
        <ChevronDown className="w-4 h-4 group-hover:hidden transition-all duration-200" />
        <ChevronUp className="w-4 h-4 hidden group-hover:inline transition-all duration-200" />
      </div>

      {/* Dropdown Menu (Hover Reveal) */}
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute z-20 mt-2 w-40 origin-top-right bg-white shadow-md ring-1 ring-black/10">
        <ul className="py-1 text-xs text-black">
          {sortOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                option === selected ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
