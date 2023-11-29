"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SearchPageInvalid() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-footer))] items-center justify-center bg-accent-foreground text-white">
      <h1 className="text-4xl">Search Invalid returning to home page 🏠</h1>
    </div>
  );
}
