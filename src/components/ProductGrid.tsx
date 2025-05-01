import Image from "next/image";

const products = [
  { name: "Belish Bliss", price: 9.99, image: "/images/tops.png" },
  { name: "White Blouse", price: 3.99, image: "/images/bottom.png" },
  { name: "Dusty Rose", price: 4.96, image: "/images/accessories.png" },
  { name: "Beige Polka-Dress", price: 4.99, image: "/images/bottom.png" },
];

export default function ProductGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(({ name, price, image }) => (
            <div key={name} className="text-center space-y-3">
              <div className="w-full h-64 bg-[#f6dbd4] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-charcoal font-medium">{name}</p>
              <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
