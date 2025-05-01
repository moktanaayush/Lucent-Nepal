"use client";
import Breadcrums from "../../../components/Breadcrums";
import Container from "../../../components/Container";
import Image from "next/image";

import { useState } from "react";
import ProductDetail from "../../../components/products/ProductDetail";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = {
    id: params.productId,
    title: "Cotton Polo Shirt",
    price: "$128",
    label: "Best seller",
    description:
      "This is a premium cotton polo shirt made from organic fabric.",
    images: [
      "/images/tops.png",
      "/images/bottom.png",
      "/images/accessories.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
  };

  return (
    <Container>
      <div className="pt-5">
        <Breadcrums />
      </div>
      <ProductDetail product={product} />
    </Container>
  );
}
