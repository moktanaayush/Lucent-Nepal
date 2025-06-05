import Breadcrums from "../../../components/Breadcrums";
import Container from "../../../components/Container";
import ProductDetail from "../../../components/products/ProductDetail";
import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   return {
//     title: `Product - ${params.id}`,
//   };
// }

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  console.log("hey", params);
  const res = await fetch(
    // `${process.env.NEXT_PUBLIC_API_URL}/products/${params.productId}`
    `http://localhost:3001/api/products/${params.productId}`
  );
  const product = await res.json();
  // console.log(`${process.env.NEXT_PUBLIC_API_URL}/admin/products/${params.id}`);
  console.log(product);

  // const product = {
  //   id: params.id,
  //   title: "Cotton Polo Shirt",
  //   price: "$128",
  //   label: "Best seller",
  //   description:
  //     "This is a premium cotton polo shirt made from organic fabric.",
  //   images: [
  //     "/images/tops.png",
  //     "/images/bottom.png",
  //     "/images/accessories.png",
  //   ],
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["Black", "White", "Blue"],
  // };

  return (
    <Container>
      <div className="pt-5">
        <Breadcrums />
      </div>
      <ProductDetail product={product} />
    </Container>
  );
}
