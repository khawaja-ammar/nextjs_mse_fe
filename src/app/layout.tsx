// import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "@/styles/globals.css";

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
      <head></head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
