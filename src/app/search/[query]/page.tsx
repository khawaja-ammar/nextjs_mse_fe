import { Suspense } from "react";
import SearchResults from "@/components/search-results";
import SearchResultsLoading from "@/components/search-results-loading";

// TODO:
// - Add sort by, total hotels found and other such metrics
// - Add Pagination
// - Add filters bar on left on a scrollable space
// - Add Maps

export default function SearchPage({ params }: { params: { query: string } }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <h1 className="text-2xl">{`Results for "${params.query}"`}</h1>
      <Suspense fallback={<SearchResultsLoading />}>
        <SearchResults query={params.query} />
      </Suspense>
    </div>
  );
}
