"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./site-search";

// TODO:
// - Add language and currency selector (after automatically figuring out where you are)
// - Menu with help/support/contact page

export default function MainNav() {
  // const pathname = usePathname();

  return (
    <>
      <div className="h-[10vh] bg-accent-foreground py-10 text-white">
        <nav className="flex justify-between text-xl">
          <Link href="/">Travel Mandi 🔥</Link>
          <div>Links</div>
        </nav>
      </div>
      <SiteSearch />
    </>
  );
}
