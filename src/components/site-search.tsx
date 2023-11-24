"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SearchDatePicker } from "./searchBar/search-date-picker";
import { SearchGuestSelector } from "./searchBar/search-guest-selector";
// import { SearchInput } from "./searchBar/search-input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import SearchSuggester from "./searchBar/search-suggester";
import SearchAutoSuggest from "./searchBar/search-autosuggest";

export default function SiteSearch() {
  // TODO: For homepage use different CSS to cover whole page?
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
  const [giveSearchSuggestions, setGiveSearchSuggestions] = useState(false);

  function submitSearch(e: FormEvent<HTMLFormElement>) {
    // NOTE: ZOD CAN VERIFY THESE??
    // TODO: fetch inside dynamic router after verifying the inputs are valid and complete
    e.preventDefault();

    setGiveSearchSuggestions(false);

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

  /*
className={
  pathname === "/" || pathname === "/search"
    ? ""
    : ""
}
*/

  return (
    <div
    // className={`z-[999] bg-accent-foreground ${
    //   pathname === "/" || pathname === "/search"
    //     ? "h-[calc(100vh-var(--height-navbar)-var(--height-footer))]"
    //     : "sticky top-0"
    // }`}
    >
      <div
      // className={
      //   pathname === "/" || pathname === "/search"
      //     ? // bottom-[var(--height-navbar)-var(--height-footer)+10vh]
      //       "relative bottom-[calc(var(--height-navbar)-var(--height-footer)+5rem)] flex h-full flex-col items-center justify-center"
      //     : ""
      // }
      >
        {/* <div
          className={
            pathname === "/" || pathname === "/search"
              ? "flex h-[5rem] items-center"
              : "hidden"
          }
        >
          <p className="text-6xl text-white">TravelMandi 🧳</p>
        </div> */}
        <form
          className="flex h-searchbarcontainer w-full items-center justify-center"
          onSubmit={(e) => submitSearch(e)}
          autoComplete="off"
        >
          <SearchAutoSuggest value={searchQuery} setValue={setSearchQuery} />
          {/* <SearchInput
            className={
              pathname === "/" || pathname === "/search"
                ? "h-[var(--height-searchbar-extended)] w-[312.5px] rounded-r-none text-xl"
                : "h-[var(--height-searchbar-base)] w-[250px] rounded-r-none"
            }
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setGiveSearchSuggestions={setGiveSearchSuggestions}
          /> */}
          <SearchDatePicker
            classNameButton={
              pathname === "/" || pathname === "/search"
                ? "w-[312.5px] rounded-none text-xl h-[var(--height-searchbar-extended)]"
                : "rounded-none w-[250px] h-[var(--height-searchbar-base)]"
            }
            date={date}
            setDate={setDate}
          />
          <SearchGuestSelector
            className={
              pathname === "/" || pathname === "/search"
                ? "h-[var(--height-searchbar-extended)] w-[237.5px] rounded-none text-xl"
                : "h-[var(--height-searchbar-base)] w-[190px] rounded-none"
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
                ? "h-[var(--height-searchbar-extended)] w-[137.5px] rounded-l-none text-xl"
                : "h-[var(--height-searchbar-base)] w-[110px] rounded-l-none"
            }
          >
            Search
          </Button>
        </form>
        {giveSearchSuggestions && <SearchSuggester />}
      </div>
    </div>
  );
}
