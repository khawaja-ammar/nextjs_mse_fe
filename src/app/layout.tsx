// import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/toaster";

const font = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
});

// export const metadata: Metadata = {
//   title: "TravelMandi",
//   description: "",
// };

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
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
