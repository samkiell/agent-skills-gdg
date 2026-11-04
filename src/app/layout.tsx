import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-bg text-fg font-body antialiased selection:bg-surface selection:text-fg">
        {children}
      </body>
    </html>
  );
}

