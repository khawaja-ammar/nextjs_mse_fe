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
    if (searchQuery !== "") {
      router.push(`/search/${searchQuery}`);
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
          ? "h-[calc(100vh-10rem)]"
          : "sticky top-0"
      }`}
    >
      <div
        className={
          pathname === "/" || pathname === "/search"
            ? "relative bottom-[5rem] flex h-full flex-col items-center justify-center"
            : ""
        }
      >
        <h1
          className={
            pathname === "/" || pathname === "/search"
              ? "text-2xl text-white"
              : "hidden"
          }
        >
          Compare best options ;)
        </h1>
        <form
          className="flex w-full items-center justify-center py-8"
          onSubmit={(e) => submitSearch(e)}
        >
          <SearchInput
            className={
              pathname === "/" || pathname === "/search"
                ? "h-[50px] w-[312.5px] rounded-r-none text-xl"
                : "h-[40px] w-[250px] rounded-r-none"
            }
            // className="rounded-r-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Where to?"
          />
          <SearchDatePicker
            classNameButton={
              pathname === "/" || pathname === "/search"
                ? "h-[50px] w-[312.5px] rounded-none text-xl"
                : "h-[40px] rounded-none w-[250px]"
            }
            // classNameButton="rounded-none"
            date={date}
            setDate={setDate}
          />
          <SearchGuestSelector
            className={
              pathname === "/" || pathname === "/search"
                ? "h-[50px] w-[237.5px] rounded-none text-xl"
                : "h-[40px] w-[190px] rounded-none"
            }
            // className="rounded-none"
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
                ? "h-[50px] w-[137.5px] rounded-l-none text-xl"
                : "h-[40px] w-[110px] rounded-l-none"
            }
            // className="rounded-l-none"
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
