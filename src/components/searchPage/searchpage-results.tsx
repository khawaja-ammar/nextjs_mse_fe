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
const NUM_CARD_SKELETONS = 6;

type Props = {
  req: Promise<Response>;
};

export async function SearchResults({ req }: Props) {
  // const result = await getSearchQueryResults(query);
  try {
    const res = await req;
    if (!res.ok) {
      throw new Error();
    }
    const data: SearchQueryResponse = await res.json();
    return (
      <>
        <div className="flex flex-col items-center gap-4">
          {data.properties.map((property, i) => (
            <SearchResultCard
              key={i}
              property={property}
              currency={data.currency}
            />
          ))}
        </div>
        {/* TODO: Pagination Component that links to other pages? */}
        <SearchPagePagination />
      </>
    );
  } catch (err) {
    return <>Server not responding: {err.message}</>;
  }
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
