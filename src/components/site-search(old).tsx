"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SearchDatePicker } from "./searchBar/search-date-picker";
import { SearchGuestSelector } from "./searchBar/search-guest-selector";
import { SearchInput } from "./searchBar/search-input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SEARCH_BAR_HEIGHT_BASE = " h-[40px]";
const SEARCH_BAR_HEIGHT_EXTENDED = " h-[50px]";

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

  /*
className={
  pathname === "/" || pathname === "/search"
    ? ""
    : ""
}
*/

  return (
    <div
      className={`z-[999] bg-accent-foreground ${
        pathname === "/" || pathname === "/search"
          ? "h-[calc(100vh-var(--height-navbar)-var(--height-footer))]"
          : "sticky top-0"
      }`}
    >
      <div
        className={
          pathname === "/" || pathname === "/search"
            ? // bottom-[var(--height-navbar)-var(--height-footer)+10vh]
              "relative bottom-[calc(var(--height-navbar)-var(--height-footer)+5rem)] flex h-full flex-col items-center justify-center"
            : ""
        }
      >
        <div
          className={
            pathname === "/" || pathname === "/search"
              ? "flex h-[5rem] items-center"
              : "hidden"
          }
        >
          <p className="text-6xl text-white">TravelMandi 🧳</p>
        </div>
        <form
          className="h-searchbarcontainer flex w-full items-center justify-center"
          onSubmit={(e) => submitSearch(e)}
        >
          <SearchInput
            className={
              pathname === "/" || pathname === "/search"
                ? "w-[312.5px] rounded-r-none text-xl" +
                  SEARCH_BAR_HEIGHT_EXTENDED
                : "w-[250px] rounded-r-none" + SEARCH_BAR_HEIGHT_BASE
            }
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SearchDatePicker
            classNameButton={
              pathname === "/" || pathname === "/search"
                ? "w-[312.5px] rounded-none text-xl" +
                  SEARCH_BAR_HEIGHT_EXTENDED
                : "rounded-none w-[250px]" + SEARCH_BAR_HEIGHT_BASE
            }
            date={date}
            setDate={setDate}
          />
          <SearchGuestSelector
            className={
              pathname === "/" || pathname === "/search"
                ? "w-[237.5px] rounded-none text-xl" +
                  SEARCH_BAR_HEIGHT_EXTENDED
                : "w-[190px] rounded-none" + SEARCH_BAR_HEIGHT_BASE
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
                ? "w-[137.5px] rounded-l-none text-xl" +
                  SEARCH_BAR_HEIGHT_EXTENDED
                : "w-[110px] rounded-l-none" + SEARCH_BAR_HEIGHT_BASE
            }
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
