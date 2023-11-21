import { Suspense } from "react";
import SearchResults from "@/components/searchPage/searchpage-results";
import SearchResultsLoading from "@/components/searchPage/searchpage-results-loading";
import SearchPageFilters from "@/components/searchPage/searchpage-filters";

// TODO:
// - Add sort by, total hotels found and other such metrics
// - Add Pagination
// - Add filters bar on left on a scrollable space
// - Add Maps

export default function SearchPage({
  params,
  searchParams,
}: {
  params: { query: string };
  searchParams: { [key: string]: string };
}) {
  // NOTE: This key should be appended with all the searchParams so it suspends as data is being fetched
  const suspenseKey = `${searchParams.q}`;
  return (
    <div className="flex">
      {/* FILTERS BAR */}
      <SearchPageFilters className="basis-1/3" />
      <div className="flex basis-1/3 flex-col items-center pb-[var(--height-searchpage-space)]">
        <div className="h-searchpage_space flex items-center text-2xl">
          <p>{`Results for "${searchParams.q}"`}</p>
        </div>
        <Suspense key={suspenseKey} fallback={<SearchResultsLoading />}>
          <SearchResults query={params} />
        </Suspense>
      </div>
      {/* MAP */}
      <div className="basis-1/3">
        <div className="h-searchpage_space flex items-center justify-center">
          <p>MAP Toggle</p>
        </div>
      </div>
    </div>
  );
}
