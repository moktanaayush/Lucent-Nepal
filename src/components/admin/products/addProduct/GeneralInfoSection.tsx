type Props = {
  productName: string;
  description: string;
  selectedSizes: string[];
  selectedGender: string;
  onNameChange: (v: string) => void;
  onDescChange: (v: string) => void;
  toggleSize: (size: string) => void;
  setGender: (gender: string) => void;
};

export default function GeneralInfoSection({
  productName,
  description,
  selectedSizes,
  selectedGender,
  onNameChange,
  onDescChange,
  toggleSize,
  setGender,
}: Props) {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const genders = ["Male", "Female", "Unisex"];

  return (
    <div className="bg-gray-100 rounded-xl px-4 py-3">
      <h2 className="font-medium">General Information</h2>
      <div className="flex flex-col mt-2">
        <label className="font-medium text-sm">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => onNameChange(e.target.value)}
          className="rounded-md my-2 p-2 bg-gray-200"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label className="font-medium text-sm">Product Description</label>
        <textarea
          value={description}
          onChange={(e) => onDescChange(e.target.value)}
          className="rounded-md my-2 p-2 bg-gray-200"
          rows={4}
        />
      </div>

      {/* Size + Gender */}
      <div className="flex flex-row my-2">
        <div className="w-1/2">
          <label className="font-medium text-sm">Size</label>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`px-2 py-1 rounded-md text-sm font-light ${
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

        <div className="w-1/2">
          <label className="font-medium text-sm">Gender</label>
          <div className="flex gap-2 pt-1">
            {genders.map((gender) => (
              <label
                key={gender}
                className="text-sm font-light flex items-center gap-1"
              >
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={selectedGender === gender}
                  onChange={() => setGender(gender)}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
