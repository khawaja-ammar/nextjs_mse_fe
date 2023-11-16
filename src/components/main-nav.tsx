"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className="bg-accent-foreground py-10 text-white">
      <nav className="flex justify-between">
        <Link href="/">FireBird 🔥</Link>
        <div>Links</div>
      </nav>
    </div>
  );
}
