import { Suspense } from "react";
import SearchResults from "@/components/searchPage/searchpage-results";
import SearchResultsLoading from "@/components/searchPage/searchpage-results-loading";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";

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
    <SearchPageWrapper searchParams={searchParams}>
      <Suspense key={suspenseKey} fallback={<SearchResultsLoading />}>
        <SearchResults query={searchParams} />
      </Suspense>
    </SearchPageWrapper>
  );
}
