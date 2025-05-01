"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Heart, User, ShoppingBag, MapPin } from "lucide-react";
import LoginModal from "../user/LoginModal";

export default function Header2() {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="z-50 px-6 py-4 bg-white/25 w-full shadow-[0_5px_4px_-3px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" flex flex-row justify-between items-center w-full">
            <div className="w-1/3 flex flex-row gap-1 cursor-pointer items-center">
              <MapPin className="w-4 h4 cursor-pointer" />
              <p className="font-[var(--font-heading)] text-xs ">Stores</p>
            </div>
            <div
              className="w-1/3 flex flex-col items-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <h1 className="text-xl font-medium">Lucent Nepal</h1>
              <p className="text-[8px] font-light tracking-[0.2rem] uppercase text-gray-500">
                we promise comfort
              </p>
            </div>
            <div className="w-1/3">
              <div className="flex justify-end items-center gap-2">
                {/* Search Bar */}
                <div className="flex items-center border-b border-black gap-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent placeholder:font-extralight text-sm placeholder:text-xs placeholder:text-gray-500 focus:outline-none w-32"
                  />
                  <Search className="h-4 w-4 text-black" />
                </div>

                {/* Icons */}
                <Heart className="h-5 w-4 text-black cursor-pointer" />
                <User
                  className="h-4 w-4 text-black cursor-pointer"
                  onClick={() => setIsLoginOpen(true)}
                />

                {/* Cart with Badge */}
                <div className="relative cursor-pointer">
                  <ShoppingBag className="h-4 w-4 text-black" />
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 rounded-full">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <nav>
              <ul className="px-30 pt-2 flex flex-row justify-between items-center w-full text-xs uppercase">
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  New
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  T-Shirts
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  Pants
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  Fashion
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  Gift
                </li>
                <li
                  className="cursor-pointer hover:underline"
                  onClick={() => router.push("/shop")}
                >
                  Sale
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
