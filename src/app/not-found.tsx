import SiteFooter from "@/components/site-footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="h-[calc(100vh-var(--height-footer))] bg-secondary">
        <div className="flex h-full flex-col items-center justify-center">
          <h2 className="text-2xl">Page Not Found</h2>
          <Link
            href="/"
            className="text-3xl text-primary underline hover:text-primary/90"
          >
            Return Home 🏠
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
