import { Suspense } from "react";

import { env } from "@/lib/env.mjs";
import SearchPageWrapper from "@/components/searchPage/searchpage-wrapper";
import SearchPageInvalid from "@/components/searchPage/searchpage-invalid";
import { SearchQueryResponse } from "@/types";
import {
  SearchResultCard,
  SearchResultCardSkeleton,
} from "@/components/searchPage/searchpage-result-card";
import Link from "next/link";

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
  // NOTE: Temp results until backend is deployed /////
  return (
    <>
      <div className="flex min-h-[calc(100vh-var(--height-navbar)-var(--height-smallscreen-search-container)-var(--height-footer))] flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl">
          Find the best hotel deals,{" "}
          <span className="text-primary">COMING SOON</span>
        </h1>
        <Link href="/blog">
          <h2 className="text-2xl text-primary underline">
            Visit our blog to get inspired
          </h2>
        </Link>
      </div>
    </>
  );
  /////////////////////////////////////////////////////

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
