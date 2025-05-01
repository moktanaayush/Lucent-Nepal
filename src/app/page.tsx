import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/NewsLetter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Newsletter />
    </>
  );
}
