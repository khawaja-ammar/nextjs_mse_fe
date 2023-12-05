import Image from "next/image";

import SiteSearch from "@/components/site-search";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-footer))] flex-col items-center justify-center gap-4 bg-accent-foreground">
      <Image
        src="/images/logoText.svg"
        width={500}
        height={100}
        alt="Travel Mandi logo and text"
      />

      <SiteSearch />
    </div>
  );
}
