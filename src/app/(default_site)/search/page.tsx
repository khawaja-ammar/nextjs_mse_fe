import { Suspense } from "react";
import {
  SearchResults,
  SearchResultsLoading,
} from "@/components/searchPage/searchpage-results";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";

// TODO: Add validate search params (core (min required) params must be present)

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If basic params not complete
  // return <>Incomplete search; go back to home page or advance search page</>;

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
