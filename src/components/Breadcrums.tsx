"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split and clean path
  const segments = pathname.split("/").filter((seg) => seg !== ""); // remove empty strings

  const readable = (str: string) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <Link href="/" className="hover:underline text-gray-600">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              <span>/</span>
              {isLast ? (
                <span className="text-charcoal font-medium">
                  {readable(segment)}
                </span>
              ) : (
                <Link href={href} className="hover:underline text-gray-600">
                  {readable(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
