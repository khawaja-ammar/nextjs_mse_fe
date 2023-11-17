"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./site-search";

export default function MainNav() {
  // const pathname = usePathname();

  return (
    <>
      <div className="bg-accent-foreground py-10 text-white">
        <nav className="flex justify-between text-xl">
          <Link href="/">Travel Mandi 🔥</Link>
          <div>Links</div>
        </nav>
      </div>
      <SiteSearch />
    </>
  );
}
