"use client";

import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, differenceInDays, format } from "date-fns";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../../ui/button";
import SearchAutoSuggest from "../search-autosuggest";
import { SearchDatePicker } from "./search-date-picker-RHF";
import { SearchGuestSelector } from "./search-guest-selector-RHF";

const MIN_START_DATE = addDays(new Date(), 7);
const MIN_DAYS_TRIP = 1;
const MAX_DAYS_TRIP = 999;
const MAX_DAYS_ADVANCE_BOOKING = 999;

const FormSchema = z.object({
  searchQuery: z
    .string({
      required_error: "Search query is required",
    })
    .min(2, {
      message: "Search query must be at least 2 characters",
    }),
  dates: z.object({
    fromDate: z.date(),
    toDate: z.date(),
  }),
  guestsInfo: z.object({
    numAdults: z.number(),
    numChildren: z.number(),
    childAges: z.array(z.number()),
  }),
});

export default function SiteSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  const form = useForm<z.infer<typeof FormSchema>>({
    // // TODO: get date/timezone from the request location
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchQuery: searchParams.get("q") || "",
      dates: { fromDate: fromDateInit, toDate: toDateInit },
      guestsInfo: {
        numAdults: parseInt(searchParams.get("adlt") || "1"),
        numChildren: parseInt(searchParams.get("chld") || "0"),
        childAges: JSON.parse(searchParams.get("chldAge") || "[]"),
      },
    },
  });

  function submitSearch({
    searchQuery,
    dates,
    guestsInfo,
  }: z.infer<typeof FormSchema>) {
    const paramURL = new URL(`${window.location.origin}/search`);
    paramURL.searchParams.append("q", searchQuery);
    // TODO: Convert the dates to UTC for server; response should be converted back to local time
    paramURL.searchParams.append("frm", format(dates.fromDate, "P"));
    paramURL.searchParams.append(
      "dur",
      differenceInDays(dates.toDate, dates.fromDate).toString(),
    );
    paramURL.searchParams.append("adlt", guestsInfo.numAdults.toString());
    paramURL.searchParams.append("chld", guestsInfo.numChildren.toString());
    if (guestsInfo.numChildren > 0) {
      paramURL.searchParams.append(
        "chldAge",
        JSON.stringify(guestsInfo.childAges),
      );
    }

    if (searchQuery !== "") {
      router.push(paramURL.href);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitSearch)} className="flex">
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem>
              {/* <div>
                <FormLabel>Search</FormLabel>
                <FormDescription>Desc</FormDescription>
              </div> */}
              <FormControl>
                <SearchAutoSuggest {...field} setValue={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="dates"
          render={({ field }) => (
            <>
              <FormControl>
                <SearchDatePicker
                  dates={field.value}
                  setDates={field.onChange}
                  MIN_START_DATE={MIN_START_DATE}
                  MIN_DAYS_TRIP={MIN_DAYS_TRIP}
                  MAX_DAYS_TRIP={MAX_DAYS_TRIP}
                  MAX_DAYS_ADVANCE_BOOKING={MAX_DAYS_ADVANCE_BOOKING}
                  classNameButton="w-[150px] rounded-none h-full"
                />
              </FormControl>
            </>
          )}
        />
        <FormField
          name="guestsInfo"
          render={({ field }) => (
            <>
              <FormControl>
                <SearchGuestSelector
                  className={
                    pathname === "/"
                      ? "h-full w-[237.5px] rounded-none"
                      : "h-full w-[190px] rounded-none"
                  }
                  guestsInfo={field.value}
                  setGuestsInfo={field.onChange}
                />
              </FormControl>
            </>
          )}
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
    </Form>
  );
}
