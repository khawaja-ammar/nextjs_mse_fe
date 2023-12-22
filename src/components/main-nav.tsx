"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteSearch from "./searchBar/site-search";
import { Label } from "@/components/ui/label";
import LogoText from "./logo-text";

// import { Languages } from "lucide-react";

// TODO:
// - Add language and currency selector (after automatically figuring out where you are)
// - Menu with help/support/contact page

const NavLinks = [
  { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className={`sticky top-0 z-20 mx-auto border-b bg-secondary px-4 text-secondary-foreground ${
        pathname === "/search"
          ? "h-[calc(var(--height-navbar)+var(--height-smallscreen-search-container))]"
          : "h-navbar"
      }`}
    >
      <div
        className={`flex h-navbar items-center ${
          pathname === "/" ? "justify-end" : "justify-between"
        }`}
      >
        <div
          className={` ${
            pathname === "/" ? "hidden" : "flex items-center gap-4"
          }`}
        >
          <Link href="/">
            <LogoText page="Search" />
          </Link>
          <div className="hidden xl:block">
            {pathname === "/search" && <SiteSearch />}
          </div>
        </div>
        <div className="flex gap-4">
          {NavLinks.map((NavLink, i) => (
            <Link key={i} href={NavLink.href}>
              <Label
                className={`cursor-pointer p-3 text-xl ${
                  pathname === NavLink.href &&
                  "rounded-2xl bg-primary text-primary-foreground"
                }`}
              >
                {NavLink.name}
              </Label>
            </Link>
          ))}
          {/* <p>
            <Languages />
          </p> */}
        </div>
      </div>
      {pathname === "/search" && (
        <div className="h-[var(--height-smallscreen-search-container)] xl:invisible xl:hidden">
          <SiteSearch />
        </div>
      )}
    </nav>
  );
}
