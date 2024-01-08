import { SlidersHorizontal as FilterIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  setDisplayFilters: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SearchPageFilters({
  className,
  setDisplayFilters,
}: Props) {
  return (
    // TODO: Make mobile slide in menu
    <div
      className={cn(
        "sticky top-[var(--height-navbar)+var(--height-smallscreen-search-container)] h-[calc(100vh-var(--height-navbar)-var(--height-smallscreen-search-container))] bg-secondary",
        className,
      )}
    >
      <ScrollArea className="h-full text-secondary-foreground">
        <div className="flex flex-col items-center">
          <div className="flex h-searchpage_space items-center border-b">
            <Button variant="default" onClick={() => setDisplayFilters(false)}>
              <p className="flex items-center gap-2">
                <FilterIcon className="h-4 w-4" />
                <span>Hide filters</span>
              </p>
            </Button>
          </div>
          {/* <p>Hello</p> */}
        </div>
      </ScrollArea>
    </div>
  );
}
