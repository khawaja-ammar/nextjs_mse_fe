import { Suspense } from "react";

import { env } from "@/lib/env.mjs";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";
import SearchPageInvalid from "@/components/searchPage/searchpage-invalid";
import { SearchQueryResponse } from "@/types";
import {
  SearchResultCard,
  SearchResultCardSkeleton,
} from "@/components/searchPage/searchpage-result-card";

const NUM_SKELETON = 6;

function getSearchQueryResults(query: {
  [key: string]: string;
}): Promise<Response> {
  return fetch(`${env.BACKEND_URL}/test/jsonsearchquery`, {
    method: "GET",
    cache: "no-cache",
  });
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
      <div className="flex flex-col items-center gap-4">
        <Suspense key={suspenseKey} fallback={<SearchResultsSkeleton />}>
          <SearchResults req={getSearchQueryResults(searchParams)} />
        </Suspense>
      </div>
    </SearchPageWrapper>
  );
}

async function SearchResults({ req }: { req: Promise<Response> }) {
  // const result = await getSearchQueryResults(query);
  try {
    const res = await req;
    if (!res.ok) {
      throw new Error();
    }
    const data: SearchQueryResponse = await res.json();
    return (
      <>
        <>
          {data.properties.map((property, i) => (
            <SearchResultCard
              key={i}
              property={property}
              currency={data.currency}
            />
          ))}
        </>
        {/* TODO: Pagination Component that links to other pages? */}
        {/* <SearchPagePagination /> */}
      </>
    );
  } catch (err) {
    if (err instanceof Error) {
      return <>Server not responding: {err.message}</>;
    } else {
      console.error("Error: ", err);
      throw err;
    }
  }
}

function SearchResultsSkeleton() {
  return (
    <>
      {Array.from(Array(NUM_SKELETON), (_, i) => {
        return <SearchResultCardSkeleton key={i} />;
      })}
    </>
  );
}
