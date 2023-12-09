import Image from "next/image";

import SiteSearch from "@/components/searchBar/site-search";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-footer))] flex-col items-center justify-center gap-4 bg-background">
      {/* FIXME: Fix image dim */}
      <Image
        src="/images/logoText.svg"
        width={700}
        height={150}
        alt="Company logo and text"
      />
      <SiteSearch />
    </div>
  );
}
