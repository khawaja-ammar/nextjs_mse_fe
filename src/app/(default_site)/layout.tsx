import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "@/styles/globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

// const inter = Inter({ subsets: ["latin"] });

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
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-var(--height-navbar)-var(--height-footer))]">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
