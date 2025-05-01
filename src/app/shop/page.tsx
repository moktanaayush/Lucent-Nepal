import Breadcrums from "../../components/Breadcrums";
import Container from "../../components/Container";
import ProductGrid from "../../components/ProductGrid";
import ShopProductGrid from "../../components/products/ShopProductGrid";
import Filter from "../../components/shop/Filter";
import SortDropdown from "../../components/shop/SortDropDown";

const products = 111;
const sortCategory = [
  "Featured",
  "Price Low to High",
  "Price High to Low",
  "Best Sellers",
  "Top Rated",
];

export default function ShopPage() {
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
                <p>{products} Products</p>
              </div>
              <div className="pb-2">
                <SortDropdown />
              </div>
            </div>
            <div className="productList">
              <ShopProductGrid />
              <ShopProductGrid />
              <ShopProductGrid />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
