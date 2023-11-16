"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { SearchDatePicker } from "./search/search-date-picker";
import { SearchGuestSelector } from "./search/search-guest-selector";
import { SearchInput } from "./search/search-input";

export default function SiteSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    // TODO: get date/timezone from the request location
    from: addDays(new Date(), 7),
    to: addDays(new Date(), 8),
  });
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [childAges, setChildAges] = useState<string[]>([]);

  useEffect(() => {
    // alert(`${date?.from}\n${date?.to}`);
  }, [date]);

  return (
    <div className="bg-primary  pb-10">
      <h1 className="text-2xl text-white">Compare best options</h1>
      <div className="mx-auto flex max-w-[80%] items-center justify-center py-4">
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
          className="rounded-l-none"
          numAdults={numAdults}
          setNumAdults={setNumAdults}
          numChildren={numChildren}
          setNumChildren={setNumChildren}
          childAges={childAges}
          setChildAges={setChildAges}
        />
      </div>
    </div>
  );
}
