"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductTable from "@/components/admin/products/ProductTable";
import { Product } from "../../../../lib/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const fetchProducts = async (page: number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/products?page=${page}&limit=10`
      );
      const result = await res.json();
      console.log(result);
      setProducts(result.data);
      setTotalPages(result.totalPages);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div className="relative p-4">
      {/* Main Content */}
      <div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl">Products</h1>
              <p className="text-gray-600 text-sm">
                You have total{" "}
                <span className="font-semibold text-[#DE8383]">
                  {products.length}
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
                onClick={() => router.push("/admin/products/add")}
                className="btn px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] border rounded-md text-white text-sm font-medium flex items-center"
              >
                + Add Product
              </button>
            </div>
          </div>

          <ProductTable products={products} />

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm pt-1">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
