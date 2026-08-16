import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rabian.deepmathai.ai"),
  title: "Prof. Rabian Wangkeeree | Academic Profile",
  description:
    "Academic profile, research, and publications of Prof. Rabian Wangkeeree — Full Professor of Mathematics at Naresuan University, specializing in Optimization Theory, Machine Learning, and Deep Learning.",
  openGraph: {
    title: "Prof. Rabian Wangkeeree | Academic Profile",
    description:
      "Full Professor of Mathematics at Naresuan University — Optimization Theory, Machine Learning, and Deep Learning.",
    url: "https://rabian.deepmathai.ai",
    siteName: "Prof. Rabian Wangkeeree",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Rabian Wangkeeree | Academic Profile",
    description:
      "Full Professor of Mathematics at Naresuan University — Optimization, Machine Learning, Deep Learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
