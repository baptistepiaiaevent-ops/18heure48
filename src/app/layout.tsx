import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "18heure48 — Label indépendant",
    template: "%s — 18heure48",
  },
  description:
    "18heure48 est un label de musique indépendant dédié aux artistes qui repoussent les frontières du son contemporain.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "18heure48",
    title: "18heure48 — Label indépendant",
    description:
      "18heure48 est un label de musique indépendant dédié aux artistes qui repoussent les frontières du son contemporain.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable} dark`}>
      <body className="bg-background text-white font-sans">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
