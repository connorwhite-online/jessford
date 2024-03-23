import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jess Ford Care",
  description: "Jess Ford is a full-spectrum doula offering support for pregnancy, birth, pospartum, & perinatal loss in Los Angeles, CA and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
