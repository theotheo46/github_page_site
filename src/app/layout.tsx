import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BasketProvider } from "@/contexts/basket-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calorie Calculator",
  description: "Browse food products and calculate your daily calorie intake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BasketProvider>{children}</BasketProvider>
      </body>
    </html>
  );
}
