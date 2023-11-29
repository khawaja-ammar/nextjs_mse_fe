// import Image from "next/image";

import SiteSearch from "@/components/site-search";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-footer))] flex-col items-center justify-center gap-4 bg-accent-foreground">
      <h1 className="flex gap-[0.1em] text-7xl text-white">
        <span>🧳</span>
        <span>TravelMandi</span>
      </h1>
      <SiteSearch />
      {/* <div className="h-[calc(100vh-var(--height-navbar)-var(--height-footer))] bg-accent-foreground"></div> */}
    </div>
  );
}

// relative left-[calc(calc(100vw-var(--width-searchbar))/2)] top-[calc((100vh-var(--height-navbar)-var(--height-footer))/2)] flex flex-col items-center gap-4
