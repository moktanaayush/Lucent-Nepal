"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  color: string;
  sizes: string[];
}

interface ProductDetailLayoutProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailLayoutProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Thumbnails */}
        <div className="col-span-1 flex flex-col items-center space-y-2">
          <ChevronUp className="w-4 h-4 cursor-pointer" />
          {product.images.map((img, i) => (
            <button key={i} onClick={() => setSelectedImage(img)}>
              <Image
                src={img}
                alt={`Thumbnail ${i}`}
                width={60}
                height={80}
                className={`border ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
              />
            </button>
          ))}
          <ChevronDown className="w-4 h-4 cursor-pointer" />
        </div>

        {/* Main Image */}
        <div className="col-span-6">
          <Image
            src={selectedImage}
            alt="Main Product"
            width={200}
            height={200}
            className="w-full object-cover border"
          />
        </div>

        {/* Product Info */}
        <div className="col-span-5 space-y-6">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-xl font-medium">${product.price}</p>
          <p className="text-xs text-gray-500">From $26.76/mo with Klarna.</p>

          {/* Color */}
          <div>
            <p className="text-sm font-semibold mb-1">COLOR: {product.color}</p>
            <Image
              src={product.images[0]}
              alt="Color swatch"
              width={60}
              height={60}
              className="border"
            />
          </div>

          {/* Size Selection */}
          <div>
            <p className="text-sm font-semibold mb-1">
              SIZE: Please select a size
            </p>
            <div className="grid grid-cols-3 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`py-2 border text-sm w-full text-center rounded-sm transition-all 
                      "text-gray-400 line-through cursor-not-allowed"
                    //   : "hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="underline text-sm mt-2 cursor-pointer">Size Guide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
