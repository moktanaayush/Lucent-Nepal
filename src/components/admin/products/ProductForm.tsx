"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GeneralInfoSection from "@/components/admin/products/addProduct/GeneralInfoSection";
import ImageUploader from "@/components/admin/products/addProduct/ImageUploader";
import PricingStockSection from "@/components/admin/products/addProduct/PricingStockSection";
import CategorySelector from "@/components/admin/products/addProduct/CategorySelector";

type Props = {
  initialProduct?: Product;
  isEdit?: boolean;
};

type Product = {
  id: number;
  title: string;
  description: string;
  size: string[];
  gender: string;
  price: number;
  salePrice: number;
  stock: number;
  category: string;
  images: string[];
  feature: boolean;
};

export default function ProductForm({ initialProduct, isEdit }: Props) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [mainImageIdx, setMainImageIdx] = useState<number>(0);
  const [costPrice, setCostPrice] = useState<string | number>("");
  const [salesPrice, setSalesPrice] = useState<string | number>("");
  const [stock, setStock] = useState<string | number>("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showSucessDialog, setShowSuccessDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct.title);
      setDescription(initialProduct.description);
      setSelectedSizes(initialProduct.size || []);
      setSelectedGender(initialProduct.gender);
      setCostPrice(initialProduct.price);
      setSalesPrice(initialProduct.salePrice);
      setStock(initialProduct.stock);
      setCategory(initialProduct.category);
      setPreviews(initialProduct.images || []);
    }
  }, [initialProduct]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setPreviews((prev) => prev.filter((_, i) => i !== idx));
    setMainImageIdx((prev) => {
      if (idx === prev) return 0;
      if (idx < prev) return prev - 1;
      return prev;
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = {
      title: productName,
      description,
      size: selectedSizes, // array: ["S", "M"]
      gender: selectedGender,
      price: parseFloat(costPrice as string),
      salePrice: parseFloat(salesPrice as string),
      stock: parseInt(stock as string),
      category,
      images: previews, // image URLs (you'll upload later)
    };

    const endpoint = isEdit
      ? `http://localhost:3001/api/products/${initialProduct?.id}`
      : `http://localhost:3001/api/products/add`;

    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Backend Error:", result);
        throw new Error(result?.error || "Failed to add product");
      }

      // alert("Product added!");
      setShowSuccessDialog(true);
      setTimeout(() => {
        router.push("/admin/products");
      }, 2000);
      // Optional: Reset form here
    } catch (err) {
      console.error("Error:", err);
      alert("Could not add product. Check console.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <div className="p-4 flex flex-col">
        {/* top */}
        <div className="top flex flex-row justify-between w-full px-4">
          <div className="text-xl font-normal">
            {isEdit ? "Edit Product Form" : "Add Product Form"}
          </div>
          <div className="flex justify-between items-center gap-5">
            <button
              type="button"
              className="px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] border rounded-3xl text-white text-sm font-medium cursor-pointer"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] border rounded-3xl text-white text-sm font-medium cursor-pointer transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading
                ? "Adding..."
                : isEdit
                ? "Update Product"
                : "+ Add Product"}
            </button>
          </div>
        </div>

        {/* form sections */}
        <div className="bottom grid grid-cols-2 gap-x-4 gap-y-1">
          <GeneralInfoSection
            productName={productName}
            description={description}
            selectedSizes={selectedSizes}
            selectedGender={selectedGender}
            onNameChange={setProductName}
            onDescChange={setDescription}
            toggleSize={toggleSize}
            setGender={setSelectedGender}
          />

          <ImageUploader
            images={images}
            previews={previews}
            setImages={setImages}
            setPreviews={setPreviews}
            mainImageIdx={mainImageIdx}
            setMainImageIdx={setMainImageIdx}
            removeImage={removeImage}
          />

          <PricingStockSection
            costPrice={costPrice}
            salesPrice={salesPrice}
            stock={stock}
            setCostPrice={setCostPrice}
            setSalesPrice={setSalesPrice}
            setStock={setStock}
          />

          <CategorySelector category={category} setCategory={setCategory} />
        </div>
      </div>

      {showSucessDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center ">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-2">Product Added!!</h2>
            <p className="text-sm text-gray-600 mb-4">
              Redirecting to product page...
            </p>
          </div>
        </div>
      )}
    </form>
  );
}
