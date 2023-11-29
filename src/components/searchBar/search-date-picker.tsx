"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { addDays, subDays } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  fromDate: Date;
  setFromDate: React.Dispatch<React.SetStateAction<Date>>;
  toDate: Date;
  setToDate: React.Dispatch<React.SetStateAction<Date>>;
  MIN_START_DATE: Date;
  MIN_DAYS_TRIP: number;
  MAX_DAYS_TRIP: number;
  MAX_DAYS_ADVANCE_BOOKING: number;
};
export function SearchDatePicker({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  MIN_START_DATE,
  MIN_DAYS_TRIP,
  MAX_DAYS_TRIP,
  MAX_DAYS_ADVANCE_BOOKING,
}: Props) {
  // const [fromDate, setFromDate] = React.useState<Date>(MIN_START_DATE);
  // const [toDate, setToDate] = React.useState<Date>(MIN_END_DATE);

  React.useEffect(() => {
    if (addDays(fromDate, MIN_DAYS_TRIP) > toDate) {
      setToDate(addDays(fromDate, MIN_DAYS_TRIP));
    }
  }, [fromDate]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !fromDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={fromDate}
            onSelect={setFromDate}
            required
            initialFocus
            defaultMonth={fromDate}
            fromDate={MIN_START_DATE}
            toDate={addDays(new Date(), MAX_DAYS_ADVANCE_BOOKING)}
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !toDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={toDate}
            onSelect={setToDate}
            required
            initialFocus
            defaultMonth={toDate}
            fromDate={addDays(fromDate, MIN_DAYS_TRIP)}
            toDate={addDays(fromDate, MAX_DAYS_TRIP)}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
