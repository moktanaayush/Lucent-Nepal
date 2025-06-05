"use client";

type Props = {
  costPrice: number | string;
  salesPrice: number | string;
  stock: number | string;
  setCostPrice: (value: number | string) => void;
  setSalesPrice: (value: number | string) => void;
  setStock: (value: number | string) => void;
};

export default function PricingStockSection({
  costPrice,
  salesPrice,
  stock,
  setCostPrice,
  setSalesPrice,
  setStock,
}: Props) {
  return (
    <div className="bg-gray-100 rounded-xl px-4 py-3 mt-2">
      <h2 className="font-medium">Pricing and Stock</h2>
      <div className="flex flex-row gap-2 mt-2">
        <div className="flex flex-col w-1/2">
          <label htmlFor="costprice" className="font-medium text-sm">
            Cost Price
          </label>
          <input
            type="number"
            id="costprice"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            className="rounded-md my-2 p-2 bg-gray-200 text-sm"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="salesprice" className="font-medium text-sm">
            Sales Price
          </label>
          <input
            type="number"
            id="salesprice"
            value={salesPrice}
            onChange={(e) => setSalesPrice(e.target.value)}
            className="rounded-md my-2 p-2 bg-gray-200 text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="stock" className="font-medium text-sm">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="rounded-md p-2 bg-gray-200 text-sm"
        />
      </div>
    </div>
  );
}
