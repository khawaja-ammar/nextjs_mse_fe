"use client";

import { Share as ShareIcon } from "lucide-react";

import { Property } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
// import { Input } from "@/components/ui/input";

type Props = {
  property: Property;
  currency: string;
};
export default function SearchResultCard({ property, currency }: Props) {
  return (
    <>
      <Card className="h-[180px] w-[600px] text-foreground">
        <div className="object-fit absolute h-[180px] w-[240px] border-r">
          {/* FIXME: Make dimensions etc ok */}
          <Image
            className="object-fit h-[178px] w-[240px] rounded-l-xl"
            src={property.property_imgUrl}
            height={178}
            width={240}
            alt="Hotel Image"
          />
        </div>
        <div className="pl-[240px]">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>{`${currency} ${property.room_priceINCtax}`}</p>
              {/* TODO: Share affiliate link */}
              <ShareIcon className="cursor-pointer text-primary hover:text-primary/90" />
            </CardTitle>
            <CardDescription>Found on {property.property_ota}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{property.property_name}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Details</p>
            <p>View Deal</p>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
