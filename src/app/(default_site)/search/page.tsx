import { Suspense } from "react";

import { env } from "@/lib/env.mjs";
import {
  SearchResults,
  SearchResultsLoading,
} from "@/components/searchPage/searchpage-results";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";

async function getSearchQueryResults(query: {
  [key: string]: string;
}): Promise<Response> {
  return fetch(`${env.BACKEND_URL}/test/jsonsearchquery`, {
    method: "GET",
    cache: "no-cache",
  });
  // return res.json();
}

// TODO: Add validate search params (core (min required) params must be present)
type Props = {
  searchParams: { [key: string]: string };
};
export default function SearchPage({ searchParams }: Props) {
  // If basic params not complete
  // return <>Incomplete search; go back to home page or advance search page</>;

  // NOTE: This key should be appended with all the searchParams so it suspends as data is being fetched
  const suspenseKey = `${searchParams.q}`;
  return (
    <SearchPageWrapper searchParams={searchParams}>
      <Suspense key={suspenseKey} fallback={<SearchResultsLoading />}>
        <SearchResults
          // query={searchParams}
          res={getSearchQueryResults(searchParams)}
        />
      </Suspense>
    </SearchPageWrapper>
  );
}
