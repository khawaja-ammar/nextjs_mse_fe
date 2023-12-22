"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import { addDays, differenceInCalendarDays, format } from "date-fns";

import { Button } from "../ui/button";
import SearchAutoSuggest from "./search-autosuggest";
import { SearchDatePicker } from "./search-date-picker";
import { SearchGuestSelector } from "./search-guest-selector";
import { useToast } from "../ui/use-toast";

const MIN_ADULTS = 1;
const MAX_ADULTS = 15;
const MIN_CHILDREN = 0;
const MAX_CHILDREN = 15;
const MAX_CHILDREN_PER_ADULT = 4;
const MIN_START_DATE = addDays(new Date(), 7);
const MAX_DAYS_ADVANCE_BOOKING = 999;
const MIN_DAYS_TRIP = 1;
const MAX_DAYS_TRIP = 999;
// const MIN_ROOMS = 1;
// const MAX_ROOMS = 12;
// const MAX_GUESTS_PER_ROOM = 4;

export default function SiteSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  // Validate All Search params
  const frmDateParam = searchParams.get("frm");
  const durDateParam = searchParams.get("dur");
  const fromDateInit = (() => {
    if (frmDateParam && durDateParam) {
      return new Date(frmDateParam);
    } else {
      return MIN_START_DATE;
    }
  })();
  const toDateInit = (() => {
    if (frmDateParam && durDateParam) {
      return addDays(new Date(frmDateParam), parseInt(durDateParam));
    }
    return addDays(MIN_START_DATE, MIN_DAYS_TRIP);
  })();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  // TODO: get date/timezone from the request location
  const [fromDate, setFromDate] = useState<Date>(fromDateInit);
  const [toDate, setToDate] = useState<Date>(toDateInit);
  const [numAdults, setNumAdults] = useState(
    parseInt(searchParams.get("adlt") || `${MIN_ADULTS}`),
  );
  const [numChildren, setNumChildren] = useState(
    parseInt(searchParams.get("chld") || `${MIN_CHILDREN}`),
  );
  const [childAges, setChildAges] = useState<number[]>(
    JSON.parse(searchParams.get("chldAge") || "[]"),
  );

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    setFromDate(fromDateInit);
    setToDate(toDateInit);
    setNumAdults(parseInt(searchParams.get("adlt") || `${MIN_ADULTS}`));
    setNumChildren(parseInt(searchParams.get("chld") || `${MIN_CHILDREN}`));
    setChildAges(JSON.parse(searchParams.get("chldAge") || "[]"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function submitSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate Inputs
    if (searchQuery.length < 1) {
      toast({
        variant: "destructive",
        title: "Search missing",
        description: "Please enter a search query",
        duration: 5000,
      });
    } else if (childAges.includes(-1)) {
      toast({
        variant: "destructive",
        title: "Child ages missing",
        description: "Please pick ages of your children",
        duration: 5000,
      });
    } else {
      const paramURL = new URL(`${window.location.origin}/search`);
      paramURL.searchParams.append("q", searchQuery);
      // TODO: Convert the dates to UTC for server; response should be converted back to local time
      paramURL.searchParams.append("frm", format(fromDate, "P"));
      paramURL.searchParams.append(
        "dur",
        differenceInCalendarDays(toDate, fromDate).toString(),
      );
      paramURL.searchParams.append("adlt", numAdults.toString());
      paramURL.searchParams.append("chld", numChildren.toString());
      if (numChildren > 0) {
        paramURL.searchParams.append("chldAge", JSON.stringify(childAges));
      }

      router.push(paramURL.href);
    }
  }

  return (
    <form
      className="flex h-smallscreensearch w-full flex-col items-center justify-center md:h-searchbarcontainer md:flex-row md:pb-0"
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
        classNameButton="w-full md:w-[150px] md:rounded-none h-full"
      />
      <SearchGuestSelector
        className="h-full w-full rounded-t-none md:w-[190px] md:rounded-none"
        numAdults={numAdults}
        setNumAdults={setNumAdults}
        numChildren={numChildren}
        setNumChildren={setNumChildren}
        childAges={childAges}
        setChildAges={setChildAges}
        MIN_ADULTS={MIN_ADULTS}
        MAX_ADULTS={MAX_ADULTS}
        MIN_CHILDREN={MIN_CHILDREN}
        MAX_CHILDREN={MAX_CHILDREN}
        // TODO: MAX_CHILDREN_PER_ADULT logic
        MAX_CHILDREN_PER_ADULT={MAX_CHILDREN_PER_ADULT}
      />
      <Button
        type="submit"
        className="mt-2 h-full w-full md:mt-0 md:w-[110px] md:rounded-l-none"
      >
        Search
      </Button>
    </form>
  );
}
