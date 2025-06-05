"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const genders = ["Male", "Female", "Unisex"];
export default function AddProduct() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [mainImageIdx, setMainImageIdx] = useState<number>(0);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };
  const toggleGender = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const onDrop = (acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
    setPreviews((prev) => {
      const newPreviews = [
        ...prev,
        ...acceptedFiles.map((file) => URL.createObjectURL(file)),
      ];
      if (prev.length === 0 && newPreviews.length > 0) setMainImageIdx(0);
      return newPreviews;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setPreviews((prev) => prev.filter((_, i) => i !== idx));
    // Adjust main image index if needed
    setMainImageIdx((prev) => {
      if (idx === prev) return 0;
      if (idx < prev) return prev - 1;
      return prev;
    });
  };

  return (
    <form action="">
      <div className="p-4 flex flex-col">
        {/* top */}
        <div className="top flex flex-row justify-between w-full px-4">
          <div className="text-xl font-normal">Add Product form</div>
          <div className="flex justify-between items-center gap-5">
            <button className="bg-[#DE8383] rounded-4xl px-4 py-3 text-white text-sm font-medium cursor-pointer">
              Save Draft
            </button>
            <button className="bg-[#DE8383] rounded-4xl px-4 py-3 text-white text-sm font-medium cursor-pointer">
              + Add Product
            </button>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {/* General information section */}
            <div className="bg-gray-100 rounded-xl px-4 py-3">
              <h2 className="font-medium ">General Information</h2>
              <div className="flex flex-col mt-2">
                <label htmlFor="" className="font-medium text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  name="Product Name"
                  className="rounded-md my-2 p-2 bg-gray-200"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="" className="font-medium text-sm">
                  {" "}
                  Product Description
                </label>
                <textarea
                  name="Product Description"
                  className="rounded-md my-2 p-2 bg-gray-200"
                  rows={4}
                />
              </div>
              <div className="flex flex-row my-2">
                {/* For size */}
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-medium text-sm">
                      {" "}
                      Size
                    </label>
                    <span className="font-extralight text-xs py-1">
                      Pick Available Size
                    </span>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={` px-2 py-1 rounded-md text-sm font-light ${
                          selectedSizes.includes(size)
                            ? "bg-pink-300 border-pink-300"
                            : "bg-gray-200 border-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {/* for gender */}
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-medium text-sm">
                      {" "}
                      Gender
                    </label>
                    <span className="font-extralight text-xs py-1">
                      Pick Available Gender
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap items-center justify-between pt-1">
                    {genders.map((gender) => (
                      <label
                        htmlFor=""
                        key={gender}
                        className="flex text-sm font-light gap-1 items-center"
                      >
                        <input
                          type="radio"
                          name="gender"
                          id={gender}
                          value={gender}
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Upload images section */}
            <div className="bg-gray-100 rounded-xl px-4 py-3">
              <h2 className="font-medium mb-2">Upload Img</h2>
              <div
                {...getRootProps()}
                className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 mb-4 transition-colors ${
                  isDragActive
                    ? "border-pink-300 bg-pink-50"
                    : "border-gray-300 bg-gray-50"
                }`}
                style={{ minHeight: 220 }}
              >
                <input {...getInputProps()} />
                {previews.length > 0 ? (
                  <img
                    src={previews[mainImageIdx]}
                    alt="Main"
                    className="h-52 object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-400">
                    {isDragActive
                      ? "Drop images here..."
                      : "Drag & drop or click to upload"}
                  </span>
                )}
              </div>
              <div className="flex flex-row items-center gap-2">
                {previews.map((src, idx) => (
                  <div key={idx} className="relative w-16 h-16">
                    <img
                      src={src}
                      alt={`thumb-${idx}`}
                      onClick={() => setMainImageIdx(idx)}
                      className={`w-16 h-16 object-cover rounded-md border-2 cursor-pointer ${
                        idx === mainImageIdx
                          ? "border-pink-300"
                          : "border-gray-200"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(idx);
                      }}
                      className="absolute top-0 right-0 bg-white bg-opacity-80 rounded-full p-0.5 m-0.5 text-xs text-gray-600 hover:bg-red-500 hover:text-white transition"
                      style={{ lineHeight: 1 }}
                      aria-label="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div
                  {...getRootProps()}
                  className="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md bg-gray-50 cursor-pointer text-2xl text-gray-400"
                >
                  <input {...getInputProps()} />+
                </div>
              </div>
            </div>

            {/* Pricing and stock section */}
            <div className="bg-gray-100 rounded-xl px-4 py-3 mt-2">
              <h2 className="font-medium">Pricing and Stock</h2>
              <div className="flex flex-row gap-2 mt-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="" className="font-medium text-sm">
                    Cost Price
                  </label>
                  <input
                    type="number"
                    name="costprice"
                    className="rounded-md my-2 p-2 bg-gray-200 text-sm"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="" className="font-medium text-sm">
                    Sales Price
                  </label>
                  <input
                    type="number"
                    name="salesprice"
                    className="rounded-md my-2 p-2 bg-gray-200 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/2 ">
                <label htmlFor="" className="font-medium text-sm">
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  className="rounded-md p-2 bg-gray-200 text-sm"
                />
              </div>
            </div>

            {/* Category Section */}
            <div className="bg-gray-100 rounded-xl px-4 py-3 mt-2">
              <h2 className="font-medium">Category</h2>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-medium mt-2">
                  {" "}
                  Product Category
                </label>
                <select
                  name=""
                  id=""
                  className="rounded-md p-2 text-sm bg-gray-200"
                >
                  <option value="">Tops</option>
                  <option value="">Bottoms</option>
                  <option value="">Shoes</option>
                  <option value="">Accessories</option>
                </select>
              </div>
              <button
                type="button"
                className="bg-[#DE8383] rounded-4xl mt-3 px-3 py-2 text-white text-sm font-medium cursor-pointer"
                mt-2
              >
                + Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
