import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zracko — Every Business from One Platform",
  description:
    "Run POS, payments, inventory, CRM, and marketing from a single platform built for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
