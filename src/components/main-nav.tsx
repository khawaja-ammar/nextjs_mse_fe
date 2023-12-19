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
    <nav className="sticky top-0 z-20 mx-auto h-[var(--height-navbar)] border-b bg-secondary px-4 text-secondary-foreground">
      <div
        className={`flex h-full items-center ${
          pathname === "/" ? "justify-end" : "justify-between"
        }`}
      >
        <div
          className={` ${
            pathname === "/" ? "hidden" : "flex items-center gap-4"
          }`}
        >
          <Link href="/">
            <LogoText img_dim={35} />
          </Link>
          {pathname === "/search" && <SiteSearch />}
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
    </nav>
  );
}
