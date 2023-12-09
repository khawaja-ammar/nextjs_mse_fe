"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarDays as CalendarIcon } from "lucide-react";
import { addDays } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  dates: {
    fromDate: Date;
    toDate: Date;
  };
  setDates: React.Dispatch<
    React.SetStateAction<{
      fromDate: Date;
      toDate: Date;
    }>
  >;
  MIN_START_DATE: Date;
  MIN_DAYS_TRIP: number;
  MAX_DAYS_TRIP: number;
  MAX_DAYS_ADVANCE_BOOKING: number;
  classNameButton: string;
};
export function SearchDatePicker({
  dates,
  setDates,
  MIN_START_DATE,
  MIN_DAYS_TRIP,
  MAX_DAYS_TRIP,
  MAX_DAYS_ADVANCE_BOOKING,
  classNameButton,
}: Props) {
  React.useEffect(() => {
    if (addDays(dates.fromDate, MIN_DAYS_TRIP) > dates.toDate) {
      // setToDate(addDays(dates.fromDate, MIN_DAYS_TRIP));
      setDates((prev) => ({
        ...prev,
        toDate: addDays(dates.fromDate, MIN_DAYS_TRIP),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates.fromDate]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              classNameButton,
              !dates.fromDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dates.fromDate ? (
              format(dates.fromDate, "PP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={dates.fromDate}
            onSelect={(val) => {
              // setFromDate
              setDates((prev) => ({
                ...prev,
                fromDate: val!,
              }));
            }}
            required
            initialFocus
            defaultMonth={dates.fromDate}
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
              classNameButton,
              !dates.toDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dates.toDate ? (
              format(dates.toDate, "PP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={dates.toDate}
            onSelect={(val) => {
              // setToDate
              setDates((prev) => ({
                ...prev,
                toDate: val!,
              }));
            }}
            required
            initialFocus
            defaultMonth={dates.toDate}
            fromDate={addDays(dates.fromDate, MIN_DAYS_TRIP)}
            toDate={addDays(dates.fromDate, MAX_DAYS_TRIP)}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
