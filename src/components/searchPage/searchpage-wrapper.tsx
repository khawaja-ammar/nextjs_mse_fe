"use client";

import * as React from "react";
import SearchPageFilters from "./searchpage-filters";
import { Filter as FilterIcon, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import SearchPageMap from "./searchpage-map";

// TODO:
// - Add sort by, total hotels found and other such metrics
// - Add Pagination
// - Add filters bar on left on a scrollable space
// - Add Maps

export default function SearchPageWrapper({
  searchParams,
  children,
}: {
  searchParams: { [key: string]: string };
  children: React.ReactNode;
}) {
  // TODO: UseLocalStorage to persist state of filter toggle and map toggle
  const [displayFilters, setDisplayFilters] = React.useState(true);

  return (
    <div className="flex gap-4">
      {displayFilters && (
        <SearchPageFilters
          className="basis-1/6"
          setDisplayFilters={setDisplayFilters}
        />
      )}

      <div
        className={`flex flex-col items-center pb-[var(--height-searchpage-space)] ${
          displayFilters ? "basis-5/6" : "basis-full"
        }`}
      >
        <div className="flex h-searchpage_space items-center border-b text-2xl">
          {!displayFilters && (
            <Button
              variant="ghost"
              className="self-center text-primary hover:text-primary"
              onClick={() => setDisplayFilters(true)}
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal />
                <span>Show filters</span>
              </span>
            </Button>
          )}
          <p>{`Results for ${searchParams.q}`}</p>
        </div>
        {children}
      </div>
      {/* <SearchPageMap className="basis-2/5" /> */}
    </div>
  );
}
