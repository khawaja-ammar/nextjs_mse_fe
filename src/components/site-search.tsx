"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SearchDatePicker } from "./search/search-date-picker";
import { SearchGuestSelector } from "./search/search-guest-selector";
import { SearchInput } from "./search/search-input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SiteSearch() {
  // TODO: For homepage use different CSS to cover whole page?
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    // TODO: get date/timezone from the request location
    from: addDays(new Date(), 7),
    to: addDays(new Date(), 8),
  });
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);

  function submitSearch(e: FormEvent<HTMLFormElement>) {
    // NOTE: ZOD CAN VERIFY THESE??
    e.preventDefault();
    if (searchQuery !== "") {
      router.push(`/search/${searchQuery}`);
    }
    // console.log(
    //   `Query: ${searchQuery}\nDateFrom: ${date?.from}\nDateTill: ${date?.to}\nNum Adults: ${numAdults}\nNum Children: ${numChildren}`,
    // );
    // for (let i = 0; i < childAges.length; i++) {
    //   console.log(childAges[i]);
    // }

    // TODO: fetch inside dynamic router after verifying the inputs are valid and complete
  }

  return (
    <div className="bg-accent-foreground pb-10">
      <h1 className="text-2xl text-white">Compare best options</h1>
      <form
        className="mx-auto flex max-w-[80%] items-center justify-center py-4"
        onSubmit={(e) => submitSearch(e)}
      >
        <SearchInput
          className="rounded-r-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Where to?"
        />
        <SearchDatePicker
          classNameButton="rounded-none"
          date={date}
          setDate={setDate}
        />
        <SearchGuestSelector
          className="rounded-none"
          numAdults={numAdults}
          setNumAdults={setNumAdults}
          numChildren={numChildren}
          setNumChildren={setNumChildren}
          childAges={childAges}
          setChildAges={setChildAges}
        />
        <Button type="submit" className="rounded-l-none">
          Search
        </Button>
      </form>
    </div>
  );
}
