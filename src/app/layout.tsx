import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Face of Change | Lighting Lives, Transforming Communities",
  description: "A premium NGO dedicated to education, healthcare, community development, and renewable energy projects across India. Empowering rural communities through sustainable impact.",
  keywords: ["NGO India", "Face of Change", "Rural Education India", "Solar Power India", "Healthcare Camps Delhi", "Odisha Development"],
  openGraph: {
    title: "Face of Change",
    description: "Empowering communities through education, healthcare, and renewable energy across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-beige text-navy flex flex-col selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}

