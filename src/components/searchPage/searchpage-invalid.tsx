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
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-smallscreen-search)-var(--height-footer))] items-center justify-center">
      <h1 className="text-center text-4xl">
        Search Invalid returning to{" "}
        <span className="text-primary">home page 🏠</span>
      </h1>
    </div>
  );
}
