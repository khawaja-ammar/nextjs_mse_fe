"use client";

import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className="bg-primary py-10 text-white">
      <nav className="flex justify-between">
        <div>LOGO</div>
        <div>Links</div>
      </nav>
    </div>
  );
}
