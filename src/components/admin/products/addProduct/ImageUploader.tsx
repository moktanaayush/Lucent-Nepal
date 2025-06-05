"use client";

import { useDropzone } from "react-dropzone";
import { supabase } from "../../../../../lib/supabase";

type Props = {
  images: File[];
  previews: string[];
  setImages: (images: File[]) => void;
  setPreviews: (previews: string[]) => void;
  mainImageIdx: number;
  setMainImageIdx: (idx: number) => void;
  removeImage: (idx: number) => void;
};

export default function ImageUplaoder({
  images,
  previews,
  setImages,
  setPreviews,
  mainImageIdx,
  setMainImageIdx,
  removeImage,
}: Props) {
  const uploadToSupabase = async (file: File): Promise<string | null> => {
    const filePath = `products/${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from("product-images")
      .upload(filePath, file);

    if (error) {
      console.error("Upload failed:", error.message);
      return null;
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return data?.publicUrl || null;
  };

  const onDrop = async (acceptedFiles: File[]) => {
    const urls: string[] = [];

    for (const file of acceptedFiles) {
      const url = await uploadToSupabase(file);
      if (url) urls.push(url);
    }

    setImages([...images, ...acceptedFiles]);
    setPreviews([...previews, ...urls]);
    if (previews.length === 0 && urls.length > 0) {
      setMainImageIdx(0);
    }
  };

  // const onDrop = (acceptedFiles: File[]) => {
  //   setImages([...images, ...acceptedFiles]);
  //   const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
  //   setPreviews([...previews, ...newPreviews]);
  //   if (previews.length === 0 && newPreviews.length > 0) {
  //     setMainImageIdx(0);
  //   }
  // };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    multiple: true,
  });

  return (
    <div className="bg-gray-100 rounded-xl px-4 py-3">
      <h2 className="font-medium mb-2">Upload Image</h2>
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
                idx === mainImageIdx ? "border-pink-300" : "border-gray-200"
              }`}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeImage(idx);
              }}
              className="absolute top-0 right-0 bg-white bg-opacity-80 rounded-full p-0.5 m-0.5 text-xs text-gray-600 hover:bg-red-500 hover:text-white transition"
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
  );
}
