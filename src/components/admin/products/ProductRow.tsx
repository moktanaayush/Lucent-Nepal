"use client";
import Image from "next/image";
import { Star, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Product } from "../../../../lib/types";

type Props = {
  product: Product;
};

export default function ProductRow({ product }: Props) {
  //   const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/products/edit/${product.id}`);
  };
  return (
    <tr className="border-t border-gray-300 hover:bg-gray-50">
      <td className="p-4">
        <input type="checkbox" />
      </td>
      <td className="p-4 flex items-center gap-2">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={40}
          height={40}
          className="rounded"
        />
        <span className="font-semibold">{product.title}</span>
      </td>
      <td className="p-4 text-gray-500">{product.stock}</td>
      <td className="p-4 font-bold">${product.salePrice.toFixed(2)}</td>
      <td className="p-4">{product.stock}</td>
      <td className="p-4 text-gray-500">{product.category}</td>
      <td className="p-4 text-center">
        <Star
          className={`w-4 h-4 ${
            product.featured
              ? "text-yellow-500 fill-yellow-500"
              : "text-indigo-400"
          }`}
        />
      </td>
      <td className="p-4">
        <div className="flex gap-2 justify-center">
          <button
            className="px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] text-white rounded-md cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button className="cursor-pointer">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}
