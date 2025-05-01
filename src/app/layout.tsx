"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";
import Banner from "../components/landing/Banner";
import Header2 from "../components/landing/Header2";
import Footer from "../components/landing/Footer";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jost",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Lucent Nepal",
//   description: "Effortless and Comfortable Fashion – We Promise Comfort",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en" className="light">
      <body
        className={`${jost.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isAdmin && <Banner />}
        {!isAdmin && <Header2 />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
