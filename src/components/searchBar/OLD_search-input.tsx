import * as React from "react";

import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const SearchInputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 pl-7 pr-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <SearchIcon className="absolute ml-2 h-4 w-4" />
      </div>
    );
  },
);
SearchInputComponent.displayName = "Input";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setGiveSearchSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};
export function SearchInput({
  searchQuery,
  setSearchQuery,
  setGiveSearchSuggestions,
  className,
}: Props) {
  return (
    <div>
      <SearchInputComponent
        placeholder="Where to?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={className}
        onFocus={() => {
          setGiveSearchSuggestions(true);
        }}
        onBlur={() => {
          setGiveSearchSuggestions(false);
        }}
      />
    </div>
  );
}
