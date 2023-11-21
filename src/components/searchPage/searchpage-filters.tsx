import { Filter as FilterIcon, SlidersHorizontal } from "lucide-react";
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
    // TODO: Adjust top-0 to accomodate space
    <div
      className={cn(
        "sticky top-[var(--height-searchbar)] h-[calc(100vh-var(--height-searchbar))]",
        className,
      )}
    >
      <ScrollArea className="h-full w-48 border">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            className="h-searchpage_space self-center text-primary hover:text-primary"
            onClick={() => setDisplayFilters(false)}
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal />
              <span>Hide filters</span>
            </span>
          </Button>
          <Separator className="mx-auto w-[80%]" />
        </div>
      </ScrollArea>
    </div>
  );
}
