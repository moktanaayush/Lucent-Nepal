export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Lucent Nepal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-charcoal transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-charcoal transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
