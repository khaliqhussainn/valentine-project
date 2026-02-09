import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { valentineConfig } from "@/config/valentine";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `For ${valentineConfig.name} 💕 | Valentine's Week`,
  description: `A special Valentine's Week surprise for ${valentineConfig.name}. Each day brings a new surprise filled with love.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} antialiased`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
