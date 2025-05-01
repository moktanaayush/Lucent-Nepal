"use client";

import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="container mx-auto w-full max-w-7xl py-4 flex items-center justify-between">
          <Link
            rel="stylesheet"
            href="/"
            className="text-2xl font-heading text-charcoal"
          >
            Lucent Nepal
          </Link>
          <nav className="space-x-6 text-sm font-medium text-charcoal ">
            <Link rel="stylesheet" href="/">
              Home
            </Link>
            <Link rel="stylesheet" href="/shop">
              Shop
            </Link>
            <Link rel="stylesheet" href="/about">
              About
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
