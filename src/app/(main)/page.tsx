import SiteSearch from "@/components/searchBar/site-search";
import LogoText from "@/components/logo-text";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-var(--height-navbar)-var(--height-footer))] flex-col items-center justify-center gap-4 bg-background px-4">
      <LogoText img_dim={100} />
      <SiteSearch />
    </div>
  );
}
