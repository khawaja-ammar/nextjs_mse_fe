"use client";

import Image from "next/image";
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
    <nav className="sticky top-0 z-20 flex h-[var(--height-navbar)] items-center justify-between border-b bg-secondary">
      <div
        className={` ${
          pathname === "/" ? "invisible" : "flex items-center gap-4"
        }`}
      >
        <Link href="/">
          <Image
            src="/images/logoText.svg"
            width={210}
            height={45}
            alt="Travel Mandi logo and text"
          />
        </Link>
        <SiteSearch />
      </div>
      <div className="flex gap-8 text-xl text-secondary-foreground">
        {NavLinks.map((NavLink, i) => (
          <p key={i}>{NavLink.name}</p>
        ))}
      </div>
    </nav>
  );
}
