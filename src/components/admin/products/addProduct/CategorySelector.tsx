"use client";

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

export default function CategorySelector({ category, setCategory }: Props) {
  return (
    <div className="bg-gray-100 rounded-xl px-4 py-3 mt-2">
      <h2 className="font-medium">Category</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-sm font-medium mt-2">
          Product Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md p-2 text-sm bg-gray-200"
        >
          <option value="">Select category</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <button
        type="button"
        className="bg-[#DE8383] rounded-4xl mt-3 px-3 py-2 text-white text-sm font-medium cursor-pointer"
      >
        + Add Category
      </button>
    </div>
  );
}
