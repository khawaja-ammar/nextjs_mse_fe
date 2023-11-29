"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { addDays, differenceInDays, format } from "date-fns";
import { SearchDatePicker } from "./searchBar/search-date-picker";
// import { SearchDatePicker } from "./searchBar/search-date-picker-old";
import { SearchGuestSelector } from "./searchBar/search-guest-selector";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import SearchAutoSuggest from "./searchBar/search-autosuggest";

const MIN_START_DATE = addDays(new Date(), 7);
const MIN_DAYS_TRIP = 1;
const MAX_DAYS_TRIP = 999;
const MAX_DAYS_ADVANCE_BOOKING = 999;

export default function SiteSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  // const [date, setDate] = useState<DateRange | undefined>({
  //   from: addDays(new Date(), 7),
  //   to: addDays(new Date(), 8),
  // });
  // TODO: get date/timezone from the request location
  const [fromDate, setFromDate] = useState<Date>(MIN_START_DATE);
  const [toDate, setToDate] = useState<Date>(
    addDays(MIN_START_DATE, MIN_DAYS_TRIP),
  );

  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);

  useEffect(() => {
    // TODO: Maybe split useEffects for each set state
    setSearchQuery(searchParams.get("q") || "");
    setNumAdults(parseInt(searchParams.get("adlts") || "1"));
    setNumChildren(parseInt(searchParams.get("chld") || "0"));
  }, [searchParams]);

  function submitSearch(e: FormEvent<HTMLFormElement>) {
    // NOTE: ZOD CAN VERIFY THESE??
    // TODO: fetch inside dynamic router after verifying the inputs are valid and complete
    e.preventDefault();

    const paramURL = new URL(`${window.location.origin}/search`);
    paramURL.searchParams.append("q", searchQuery);
    paramURL.searchParams.append("frm", format(fromDate, "P"));
    paramURL.searchParams.append(
      "dur",
      differenceInDays(toDate, fromDate).toString(),
    );
    paramURL.searchParams.append("adlt", numAdults.toString());
    paramURL.searchParams.append("chld", numChildren.toString());
    if (numChildren > 0) {
      paramURL.searchParams.append("chldAge", JSON.stringify(childAges));
    }

    if (searchQuery !== "") {
      router.push(paramURL.href);
    }
  }

  return (
    <form
      className="flex h-searchbarcontainer w-full items-center justify-center"
      onSubmit={(e) => submitSearch(e)}
      autoComplete="off"
    >
      <SearchAutoSuggest value={searchQuery} setValue={setSearchQuery} />
      <SearchDatePicker
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        MIN_START_DATE={MIN_START_DATE}
        MIN_DAYS_TRIP={MIN_DAYS_TRIP}
        MAX_DAYS_TRIP={MAX_DAYS_TRIP}
        MAX_DAYS_ADVANCE_BOOKING={MAX_DAYS_ADVANCE_BOOKING}
        classNameButton={
          pathname === "/"
            ? "w-[150px] rounded-none h-full"
            : "rounded-none w-[150px] h-full"
        }
      />
      {/* <SearchDatePicker
        classNameButton={
          pathname === "/"
            ? "w-[312.5px] rounded-none h-full"
            : "rounded-none w-[250px] h-full"
        }
        date={date}
        setDate={setDate}
      /> */}
      <SearchGuestSelector
        className={
          pathname === "/"
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
          pathname === "/"
            ? "h-full w-[137.5px] rounded-l-none"
            : "h-full w-[110px] rounded-l-none"
        }
      >
        Search
      </Button>
    </form>
  );
}
