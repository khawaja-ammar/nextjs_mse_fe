"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./site-search";

// TODO:
// - Add language and currency selector (after automatically figuring out where you are)
// - Menu with help/support/contact page

const NavLinks = [
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

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
        {pathname === "/" ? (
          <h1 className="flex gap-2 text-7xl text-white">
            <span>TravelMandi</span>
            <span>🧳</span>
          </h1>
        ) : (
          <Link href="/" className="text-xl text-white">
            <p className="flex gap-2">
              <span>TravelMandi</span>
              <span>🧳</span>
            </p>
          </Link>
        )}
        <SiteSearch />
      </div>
      <div className="flex gap-8 text-xl text-white">
        {NavLinks.map((NavLink, i) => (
          <p key={i}>{NavLink.name}</p>
        ))}
      </div>
    </nav>
  );
}
