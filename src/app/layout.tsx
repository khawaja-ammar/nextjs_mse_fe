import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelMandi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <SiteFooter /> */}
      </body>
    </html>
  );
}
