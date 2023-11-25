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
    <nav className="sticky top-0 z-20 flex h-[var(--height-navbar)] items-center justify-between bg-accent-foreground">
      <div
        className={` ${
          pathname === "/"
            ? "relative left-[calc(calc(100vw-var(--width-searchbar))/2)] top-[calc((100vh-var(--height-navbar)-var(--height-footer))/2)] flex flex-col items-center gap-4"
            : "flex items-center gap-4"
        }`}
      >
        <Link
          href="/"
          className={`text-white ${
            pathname === "/" ? "pointer-events-none text-7xl" : "text-xl"
          }`}
        >
          <p className="flex gap-2">
            <span>TravelMandi</span>
            <span>🧳</span>
          </p>
        </Link>
        <SiteSearch />
      </div>
      <div className="text-xl text-white">Links</div>
    </nav>
  );
}
