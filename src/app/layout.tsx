import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buka Republic",
  description: "Food so good, your ancestors would ask for a plate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0B0F19] text-slate-100 font-sans antialiased selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
