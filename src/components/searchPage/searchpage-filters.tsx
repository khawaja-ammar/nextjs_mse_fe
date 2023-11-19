import { Filter as FilterIcon, SlidersHorizontal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const TOP_SPACE = "104px";

type Props = {
  className?: string;
};
export default function SearchPageFilters({ className }: Props) {
  return (
    // TODO: Adjust top-0 to accomodate space
    <div className={cn("sticky top-[104px] h-[calc(100vh-104px)]", className)}>
      <ScrollArea className="h-full w-48 border">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            className="self-center text-primary hover:text-primary"
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
