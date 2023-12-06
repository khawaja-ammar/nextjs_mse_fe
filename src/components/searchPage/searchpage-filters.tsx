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
    // TODO: Adjust top-0 to accomodate space
    <div
      className={cn(
        "sticky top-[var(--height-navbar)] h-[calc(100vh-var(--height-navbar))] bg-secondary",
        className,
      )}
    >
      <ScrollArea className="h-full text-secondary-foreground">
        <div className="flex flex-col items-center">
          <Button
            variant="default"
            className="my-4 h-searchpage_space self-center"
            onClick={() => setDisplayFilters(false)}
          >
            <p className="flex items-center gap-2">
              <FilterIcon className="h-4 w-4" />
              <span>Hide filters</span>
            </p>
          </Button>
          <Separator className="mx-auto w-[80%]" />
          <p>Hello</p>
        </div>
      </ScrollArea>
    </div>
  );
}
