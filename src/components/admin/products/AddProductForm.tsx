"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    salePrice: "",
    stock: "",
    sku: "",
    category: "",
    tags: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting product:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">New Product</h2>
      <p className="text-sm text-gray-500">
        Add information and add new product.
      </p>

      <div>
        <label className="text-sm font-medium">Product Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm"
          placeholder="Product title"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-sm font-medium">Regular Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm"
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm font-medium">Sale Price</label>
          <input
            type="text"
            name="salePrice"
            value={formData.salePrice}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="text-sm font-medium">Stock</label>
          <input
            type="text"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm"
          />
        </div>
        <div className="w-1/2">
          <label className="text-sm font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md text-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Tags</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm"
        />
      </div>

      {/* <div className="border border-dashed border-gray-300 p-6 text-center rounded-md text-sm text-gray-500">
        Drag and drop file
      </div> */}
      <div>
        <label className="text-sm font-medium">Product Image</label>
        <div
          onClick={() => document.getElementById("file-upload")?.click()}
          className="border border-dashed border-gray-300 p-6 text-center rounded-md text-sm text-gray-500 cursor-pointer hover:bg-gray-50 transition"
        >
          Drag and drop file
          <br />
          <span className="text-xs text-gray-400">or click to upload</span>
        </div>

        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const files = e.target.files;
            if (files?.length) {
              console.log("Selected files:", files);
              // Add preview or upload logic here
            }
          }}
        />
      </div>

      <button
        type="submit"
        className="btn px-4 py-2 bg-[#DE8383] hover:bg-[#e57a7a] border rounded-md text-white text-sm font-medium flex items-center"
      >
        <Plus className="w-4 h-4" /> Add New
      </button>
    </form>
  );
}
