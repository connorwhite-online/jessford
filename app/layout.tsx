import type { Metadata } from "next";
import "./globals.css";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";


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
      <body>
        <DesktopNav />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
