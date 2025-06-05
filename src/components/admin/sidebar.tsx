// components/admin/Sidebar.tsx
"use client";

import {
  Home,
  PieChart,
  MessageSquare,
  Calendar,
  Search,
  Shirt,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import path from "path";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg rounded-r-xl p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-3 mb-1">
        {/* Replace with your actual logo */}
        <Image
          src="/images/Transparent-logo.png"
          alt="Logo"
          width={150}
          height={150}
        />
        {/* <h1 className="text-xl font-semibold">Lucent Nepal</h1> */}
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-10 py-2 bg-gray-100 rounded-lg focus:outline-none"
        />
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
      </div>

      {/* Menu */}
      <div className="mb-6">
        <p className="text-xs text-gray-400 font-semibold mb-3">MENU</p>
        <ul className="space-y-4 text-sm text-gray-700">
          <Link
            className="flex items-center gap-3 py-2 px-1  hover:text-black cursor-pointer"
            href="/admin/dashboard"
          >
            <Home className="w-4 h-4" />
            Dashboard
          </Link>

          <Link
            className="flex items-center gap-3 py-2 px-1  hover:text-black cursor-pointer"
            href={"/admin/analytics"}
          >
            <PieChart className="w-4 h-4" />
            Analytics
          </Link>
          <Link
            className={`flex items-center gap-3 py-2 px-1 rounded-md hover:text-black cursor-pointer ${
              pathname.startsWith("/admin/products")
                ? "bg-gray-100 font-medium text-black border-l-4 border-black pl-2"
                : ""
            }`}
            href={"/admin/products"}
          >
            <Shirt className="w-4 h-4" />
            Products
          </Link>
          <Link
            className="flex items-center gap-3 py-2 px-1  hover:text-black cursor-pointer relative"
            href={"/admin/chat"}
          >
            <MessageSquare className="w-4 h-4" />
            Chat
            <span className="w-2 h-2 bg-red-500 rounded-full absolute right-0 top-0" />
          </Link>
          <Link
            className="flex items-center gap-3 py-2 px-1  hover:text-black cursor-pointer"
            href={"/admin/calendar"}
          >
            <Calendar className="w-4 h-4" />
            Calendar
          </Link>
        </ul>
      </div>

      {/* Stores */}
      <div className="mt-auto">
        <p className="text-xs text-gray-400 font-semibold mb-3">STORES</p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-3 hover:text-black cursor-pointer">
            <Shirt className="w-4 h-4" />
            Lucent Nepal
          </li>
        </ul>
      </div>
    </aside>
  );
}
