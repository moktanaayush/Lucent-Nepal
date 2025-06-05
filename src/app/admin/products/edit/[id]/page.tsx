"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductForm from "@/components/admin/products/ProductForm";

export default function EditProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        router.push("/admin/products");
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <ProductForm initialProduct={product} isEdit />
    </div>
  );
}
