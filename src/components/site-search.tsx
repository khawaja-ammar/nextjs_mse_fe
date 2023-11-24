"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SearchDatePicker } from "./searchBar/search-date-picker";
import { SearchGuestSelector } from "./searchBar/search-guest-selector";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import SearchAutoSuggest from "./searchBar/search-autosuggest";

export default function SiteSearch() {
  const router = useRouter();
  const pathname = usePathname();

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
    // TODO: fetch inside dynamic router after verifying the inputs are valid and complete
    e.preventDefault();

    const paramURL = new URL(`${window.location.origin}/search/hotels`);
    paramURL.searchParams.append("q", searchQuery);
    paramURL.searchParams.append("frm", "date1");
    paramURL.searchParams.append("to", "date2");
    if (searchQuery !== "") {
      router.push(paramURL.href);
    }
    // console.log(
    //   `Query: ${searchQuery}\nDateFrom: ${date?.from}\nDateTill: ${date?.to}\nNum Adults: ${numAdults}\nNum Children: ${numChildren}`,
    // );
    // for (let i = 0; i < childAges.length; i++) {
    //   console.log(childAges[i]);
    // }
  }

  return (
    <form
      className="flex h-searchbarcontainer w-full items-center justify-center"
      onSubmit={(e) => submitSearch(e)}
      autoComplete="off"
    >
      <SearchAutoSuggest value={searchQuery} setValue={setSearchQuery} />
      <SearchDatePicker
        classNameButton={
          pathname === "/" || pathname === "/search"
            ? "w-[312.5px] rounded-none h-full"
            : "rounded-none w-[250px] h-full"
        }
        date={date}
        setDate={setDate}
      />
      <SearchGuestSelector
        className={
          pathname === "/" || pathname === "/search"
            ? "h-full w-[237.5px] rounded-none"
            : "h-full w-[190px] rounded-none"
        }
        numAdults={numAdults}
        setNumAdults={setNumAdults}
        numChildren={numChildren}
        setNumChildren={setNumChildren}
        childAges={childAges}
        setChildAges={setChildAges}
      />
      <Button
        type="submit"
        className={
          pathname === "/" || pathname === "/search"
            ? "h-full w-[137.5px] rounded-l-none"
            : "h-full w-[110px] rounded-l-none"
        }
      >
        Search
      </Button>
    </form>
  );
}
