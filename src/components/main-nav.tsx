"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO:
// - Add language and currency selector (after automatically figuring out where you are)
// - Menu with help/support/contact page

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className={`flex h-20 items-center justify-between bg-accent-foreground text-xl text-white`}
    >
      <Link href="/">Travel Mandi 🔥</Link>
      <div>Links</div>
    </nav>
  );
}
