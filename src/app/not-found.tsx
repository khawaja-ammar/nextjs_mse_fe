import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-var(--height-navbar)-var(--height-footer))] flex-col items-center justify-center">
      <h2 className="text-2xl">Page Not Found</h2>
      <Link
        href="/"
        className="flex text-3xl text-primary hover:text-primary/90"
      >
        <p className="underline">Return Home</p> 🏠
      </Link>
    </div>
  );
}
