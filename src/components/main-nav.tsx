"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./site-search";

// TODO:
// - Add language and currency selector (after automatically figuring out where you are)
// - Menu with help/support/contact page

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className={`z-[999] flex max-h-[var(--height-navbar)] items-center justify-between bg-accent-foreground ${
        pathname === "/" || pathname === "/search" ? "" : "sticky top-0"
      }`}
      // flex h-navbar items-center justify-between
      // className={`z-[999] bg-accent-foreground ${
      //   pathname === "/" || pathname === "/search"
      //     ? "h-[calc(100vh-var(--height-navbar)-var(--height-footer))]"
      //     : "sticky top-0"
      // }`}
    >
      <div
        className={` ${
          pathname === "/" || pathname === "/search"
            ? "relative left-[calc(calc(100vw-var(--width-searchbar))/2)] top-[calc((100vh-var(--height-navbar)-var(--height-footer))/2)] flex flex-col items-center gap-4"
            : "flex items-center gap-4"
        }`}
      >
        <Link
          href="/"
          className={`text-white ${
            pathname === "/" || pathname === "/search"
              ? "pointer-events-none text-7xl"
              : "text-xl"
          }`}
        >
          TravelMandi 🧳
        </Link>
        <SiteSearch />
      </div>
      <div className="text-xl text-white">Links</div>
    </nav>
  );
}
