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
  // UseLocalStorage to persist state of filter toggle and map toggle
  const [displayFilters, setDisplayFilters] = React.useState(true);

  return (
    <div className="flex gap-4">
      {displayFilters && (
        <SearchPageFilters
          className="basis-1/5"
          setDisplayFilters={setDisplayFilters}
        />
      )}

      <div className="flex basis-2/5 flex-col items-center pb-[var(--height-searchpage-space)]">
        <div className="flex h-searchpage_space items-center text-2xl">
          {!displayFilters && (
            <Button
              variant="ghost"
              className="h-searchpage_space self-center text-primary hover:text-primary"
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
      <SearchPageMap className="basis-2/5" />
    </div>
  );
}

/*
<div className="flex">
<SearchPageFilters className="basis-1/3" />
<div className="flex basis-1/3 flex-col items-center pb-[var(--height-searchpage-space)]">
  <div className="h-searchpage_space flex items-center text-2xl">
    <p>{`Results for "${searchParams.q}"`}</p>
  </div>
  <Suspense key={suspenseKey} fallback={<SearchResultsLoading />}>
    <SearchResults query={params} />
  </Suspense>
</div>
<div className="basis-1/3">
  <div className="h-searchpage_space flex items-center justify-center">
    <p>MAP Toggle</p>
  </div>
</div>
</div>
*/
