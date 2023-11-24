import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
export default function SearchPageMap({ className }: Props) {
  return (
    <div
      className={cn(
        "sticky top-[var(--height-navbar)] h-[calc(100vh-var(--height-navbar))] w-full border",
        className,
      )}
    >
      <p>SearchPageMap</p>
    </div>
  );
}
