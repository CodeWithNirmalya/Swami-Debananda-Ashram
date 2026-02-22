import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import { LenisScroll } from "@/components/layout/LenisScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swami Debananda Ashram",
  description: "A spiritual sanctuary for peace and self-realization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cinzel.variable} antialiased bg-background text-foreground`}
      >
        <LenisScroll>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisScroll>
      </body>
    </html>
  );
}
