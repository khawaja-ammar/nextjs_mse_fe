"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { DatePickerWithRange } from "./ui/date-picker-with-range";
import { useState } from "react";

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 7),
    to: addDays(new Date(), 8),
  });

  return (
    <div className="bg-primary  pb-10">
      <h1 className="text-2xl text-white">Compare best options</h1>
      <div className="flex">
        <Input
          className="rounded-r-none"
          placeholder="Enter city or region"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <DatePickerWithRange
          className="rounded-l-none"
          date={date}
          setDate={setDate}
        />
      </div>
    </div>
  );
}
