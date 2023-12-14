import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "@/styles/globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

import { Toaster } from "@/components/ui/toaster";

const font = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TravelMandi",
  description: "Your one stop shop for planning your text trip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <SiteHeader />
        <main className="min-h-[calc(100vh-var(--height-navbar)-var(--height-footer))]">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
