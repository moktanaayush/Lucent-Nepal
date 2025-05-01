import Image from "next/image";

const categories = [
  { title: "Tops", image: "/images/tops.png" },
  { title: "Bottoms", image: "/images/bottom.png" },
  { title: "Accessories", image: "/images/accessories.png" },
  { title: "Fashion", image: "/images/tops.png" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map(({ title, image }) => (
            <div
              key={title}
              className="relative group rounded-xl overflow-hidden shadow-sm cursor-pointer"
            >
              <Image
                src={image}
                alt={title}
                width={200}
                height={500}
                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide align-bottom">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
