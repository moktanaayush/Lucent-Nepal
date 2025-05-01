"use client";

import { useState } from "react";
import ProductTable from "@/components/admin/products/ProductTable";
import AddProductForm from "@/components/admin/products/AddProductForm";

const numProduct = 10;

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${isOpen ? "pr-[400px]" : ""}`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Products</h1>
              <p className="text-gray-600 text-sm">
                You have total{" "}
                <span className="font-semibold text-[#DE8383]">
                  {numProduct}
                </span>{" "}
                products.
              </p>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                name="search"
                placeholder="Quick Search Products"
                className="border px-4 py-2 rounded-lg text-sm"
              />
              <button
                onClick={() => setIsOpen(true)}
                className="btn px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] border rounded-md text-white text-sm font-medium flex items-center"
              >
                + Add Product
              </button>
            </div>
          </div>

          <ProductTable />
        </div>
      </div>

      {/* Slide-In Form Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium">Add New Product</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
}
