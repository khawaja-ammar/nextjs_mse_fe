import { Suspense } from "react";
import SearchResults from "@/components/search-results";

export default function SearchPage({ params }: { params: { query: string } }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <h1 className="text-2xl">{`Results for "${params.query}"`}</h1>
      <Suspense fallback={<p>LOADING FEED ...</p>}>
        <SearchResults query={params.query} />
      </Suspense>
    </div>
  );
}
