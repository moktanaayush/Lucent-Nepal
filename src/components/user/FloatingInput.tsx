"use client";

import { useState } from "react";

export default function FloatingInput({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(!!e.target.value)}
        required
        className="peer block w-full border border-gray-300 rounded-full px-4 pt-5 pb-2 text-sm placeholder-transparent focus:border-black focus:outline-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-6 top-2 text-gray-500 text-xs transition-all ${
          isFocused ? "text-black scale-90 -translate-y-2" : "top-4"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
