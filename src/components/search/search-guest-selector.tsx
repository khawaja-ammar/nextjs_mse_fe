import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  className?: string;
  numAdults: number;
  setNumAdults: React.Dispatch<React.SetStateAction<number>>;
  numChildren: number;
  setNumChildren: React.Dispatch<React.SetStateAction<number>>;
  childAges: number[];
  setChildAges: React.Dispatch<React.SetStateAction<number[]>>;
};

const MAX_ADULTS = 99;
const MAX_CHILDREN = 99;

function makeNameString(numAdults: number, numChildren: number): string {
  if (numAdults + numChildren === 0) return "Guests";
  if (numAdults + numChildren === 1) return "1 Adult";

  let str = "";
  if (numAdults === 1) str += "1 Adult";
  else str += `${numAdults} Adults`;

  if (numChildren !== 0) {
    if (numChildren === 1) str += ", 1 Child";
    else str += `, ${numChildren} Children`;
  }
  return str;
}

export function SearchGuestSelector({
  className,
  numAdults,
  setNumAdults,
  numChildren,
  setNumChildren,
  childAges,
  setChildAges,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("", className)}>
          {makeNameString(numAdults, numChildren)}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Guests</h4>
            <p className="text-sm text-muted-foreground">
              Select how many adults and children
            </p>
          </div>

          <div className="grid gap-2">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="numAdults">Adults</Label>
              <div className="flex items-center gap-4">
                <Button
                  disabled={numAdults === 1}
                  className="h-8 w-4 rounded-sm"
                  onClick={() => setNumAdults((prev) => prev - 1)}
                >
                  -
                </Button>
                <Label id="numAdults">{numAdults}</Label>
                <Button
                  disabled={numAdults === MAX_ADULTS}
                  className="h-8 w-4 rounded-sm"
                  onClick={() => setNumAdults((prev) => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="numChildren">Children</Label>
              <div className="flex items-center gap-4">
                <Button
                  disabled={numChildren === 0}
                  className="h-8 w-4 rounded-sm"
                  onClick={() => {
                    setNumChildren((prev) => prev - 1);
                    setChildAges((prev) => prev.slice(0, -1));
                  }}
                >
                  -
                </Button>
                <Label id="numChildren">{numChildren}</Label>
                <Button
                  disabled={numAdults === 0 || numChildren === MAX_CHILDREN}
                  className="h-8 w-4 rounded-sm"
                  onClick={() => {
                    setNumChildren((prev) => prev + 1);
                    setChildAges((prev) => [...prev, -1]);
                  }}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {childAges.length > 0 &&
                childAges.map((childAge, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4"
                  >
                    <Label>{`Child ${i + 1}`}</Label>
                    <Select
                      onValueChange={(val) => {
                        setChildAges((prev) => {
                          const newArr = [...prev];
                          newArr[i] = parseInt(val);
                          console.log(newArr);
                          return newArr;
                        });
                      }}
                    >
                      <SelectTrigger className="w-[140px]">
                        {/* FIXME: FIX THIS */}
                        <SelectValue placeholder="select age">
                          {childAge !== -1 &&
                            (childAge === 0
                              ? "<1 Year"
                              : childAge === 1
                                ? "1 Year"
                                : `${childAge} Years`)}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          16, 17,
                        ].map((i) => (
                          <SelectItem key={i} value={i.toString()}>
                            {i === 0
                              ? "<1 Year"
                              : i === 1
                                ? "1 Year"
                                : `${i} Years`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
