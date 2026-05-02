import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/ToasterProvider";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Tiles Gallery",
  description: "Premium tiles gallery built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${cormorant.className} ${outfit.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToasterProvider></ToasterProvider>
      </body>
    </html>
  );
}
