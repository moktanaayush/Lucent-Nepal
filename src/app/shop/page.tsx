"use client";

import { useEffect, useState } from "react";
import Breadcrums from "../../components/Breadcrums";
import Container from "../../components/Container";
import ShopProductGrid from "../../components/products/ShopProductGrid";
import Filter from "../../components/shop/Filter";
import SortDropdown from "../../components/shop/SortDropDown";
import { Product } from "../../../lib/types";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:3001/api/products`);
    const result = await res.json();
    setProducts(result.data);
    // console.log(result.data);
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Container>
        <div className="pt-5">
          <Breadcrums />
        </div>
        <div className="my-3">
          <h1 className="text-xl font-normal tracking-[0.1em] uppercase ">
            Designer Clothing for women
          </h1>
        </div>
        <div className="flex">
          <div className="w-1/5 mr-8">
            <Filter />
          </div>
          <div className="w-4/5 px-4 py-3 ">
            <div className="product-header flex justify-between">
              <div>
                <p>{products.length} Products</p>
              </div>
              <div className="pb-2">
                <SortDropdown />
              </div>
            </div>
            <div className="productList">
              <ShopProductGrid products={products} />
              <ShopProductGrid products={products} />
              <ShopProductGrid products={products} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
