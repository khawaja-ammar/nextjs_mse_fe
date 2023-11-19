import { Suspense } from "react";
import SearchResults from "@/components/searchPage/searchpage-results";
import SearchResultsLoading from "@/components/searchPage/searchpage-results-loading";
import SearchPageFilters from "@/components/searchPage/searchpage-filters";

// TODO:
// - Add sort by, total hotels found and other such metrics
// - Add Pagination
// - Add filters bar on left on a scrollable space
// - Add Maps

export default function SearchPage({ params }: { params: { query: string } }) {
  return (
    <div className="flex">
      {/* FILTERS BAR */}
      <SearchPageFilters className="basis-1/3" />
      <div className="flex basis-1/3 flex-col items-center gap-4 pt-4">
        <h1 className="text-2xl">{`Results for "${params.query}"`}</h1>
        <Suspense fallback={<SearchResultsLoading />}>
          <SearchResults query={params.query} />
        </Suspense>
      </div>
      {/* MAP */}
      <div className="basis-1/3">
        <p>MAP</p>
      </div>
    </div>
  );
}
