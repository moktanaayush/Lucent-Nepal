export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-[var(--footer-background)] to-white py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2
          className="text-3xl md:text-5xl mb-6 text-white"
          style={{ fontFamily: `'Playfair Display', serif` }}
        >
          Subscribe to Our Newsletter
        </h2>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-white w-full sm:w-auto px-6 py-3 rounded-sm outline-none text-black-200 placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="bg-[var(--hero-button)] text-white px-6 py-3 rounded-sm hover:bg-rose transition uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
