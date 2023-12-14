import { Suspense } from "react";

import { env } from "@/lib/env.mjs";
import {
  SearchResults,
  SearchResultsLoading,
} from "@/components/searchPage/searchpage-results";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";
import SearchPageInvalid from "@/components/searchPage/searchpage-invalid";

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
  // TODO: If basic params not complete
  // return <>Incomplete search; go back to home page or advance search page</>;
  if (!searchParams.q || searchParams.q === "") return <SearchPageInvalid />;

  let suspenseKey = "";
  for (let key in searchParams) {
    suspenseKey += searchParams[key];
  }
  return (
    <SearchPageWrapper searchParams={searchParams}>
      <Suspense key={suspenseKey} fallback={<SearchResultsLoading />}>
        <SearchResults
          // query={searchParams}
          req={getSearchQueryResults(searchParams)}
        />
      </Suspense>
    </SearchPageWrapper>
  );
}
