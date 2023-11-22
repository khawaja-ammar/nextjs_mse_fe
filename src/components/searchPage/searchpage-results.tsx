import { env } from "@/lib/env.mjs";
import { SearchQueryResponse } from "@/types";
import SearchResultCard from "./searchpage-result-card";
import SearchPagePagination from "./searchpage-pagination";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
const NUM_CARD_SKELETONS = 4;

// Output promise to return SearchQueryResponse
async function getSearchQueryResults(query: {
  [key: string]: string;
}): Promise<SearchQueryResponse> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${env.BE_URL}/test/jsonsearchquery`, {
    method: "GET",
    cache: "no-cache",
  });
  return res.json();
}

type Props = {
  query: {
    [key: string]: string;
  };
};

export async function SearchResults({ query }: Props) {
  const result = await getSearchQueryResults(query);
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {result.properties.map((property, i) => (
          <SearchResultCard
            key={i}
            property={property}
            currency={result.currency}
          />
        ))}
      </div>
      {/* TODO: Pagination Component that links to other pages? */}
      <SearchPagePagination />
    </>
  );
}

export function SearchResultsLoading() {
  return (
    <div className="flex flex-col items-center gap-4">
      {Array.from(Array(NUM_CARD_SKELETONS), (_, i) => {
        return (
          <Card key={i} className="h-[180px] w-[600px]">
            <Skeleton className="absolute h-[180px] w-[240px] rounded-l-2xl rounded-r-none" />
            <div className="pl-[240px]">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {/* <p>{`${currency} ${property.room_priceINCtax}`}</p> */}
                  <Skeleton />
                  {/* <ShareIcon className="cursor-pointer text-primary hover:opacity-90" /> */}
                  <Skeleton />
                </CardTitle>
                <CardDescription>
                  {/* Found on {property.property_ota} */}
                  <Skeleton />
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <p>{property.property_name}</p> */}
                <Skeleton />
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* <p>Details</p> */}
                <Skeleton />
                {/* <p>View Deal</p> */}
                <Skeleton />
              </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
