import { env } from "@/lib/env.mjs";
import { SearchQueryResponse } from "@/types";
import SearchResultCard from "./searchpage-result-card";

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
export default async function SearchResults({ query }: Props) {
  // console.log("calling BE", query);
  const result = await getSearchQueryResults(query);
  return (
    <div className="flex flex-col items-center gap-4">
      {result.properties.map((property, i) => (
        <SearchResultCard
          key={i}
          property={property}
          currency={result.currency}
        />
      ))}
    </div>
  );
}
