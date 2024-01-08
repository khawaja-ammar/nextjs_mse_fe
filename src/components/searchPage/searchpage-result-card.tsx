"use client";

import * as React from "react";

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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Image from "next/image";

type Props = {
  property: Property;
  currency: string;
};
export function SearchResultCard({ property, currency }: Props) {
  const images = [];
  for (let i = 0; i < property.hotel_imageurls.length; i++) {
    if (property.hotel_imageurls[i]) {
      images.push(property.hotel_imageurls[i]);
    }
  }

  return (
    <>
      <Card className="h-[180px] w-[600px] overflow-hidden text-foreground">
        {/* FIXME: Make dimensions etc ok */}
        {images.length ? (
          <div className="object-fit absolute h-[180px] w-[240px] border-r">
            <ImageCarousel links={images} />
          </div>
        ) : (
          <Skeleton className="absolute h-[180px] w-[240px] rounded-l-2xl rounded-r-none" />
        )}
        <div className="pl-[240px]">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>{property.hotel_name}</p>

              {/* <p>Prices coming soon</p> */}
              {/* <p>{`${currency} ${property.room_priceINCtax}`}</p> */}
              {/* TODO: Share affiliate link */}
              <ShareIcon className="cursor-pointer text-primary hover:text-primary/90" />
            </CardTitle>
            <CardDescription>Found on {"MSE"}</CardDescription>
          </CardHeader>
          <CardContent>{/* <p>{property.hotel_name}</p> */}</CardContent>
          <CardFooter className="flex justify-between">
            <p>Details</p>
            <p>View Deal</p>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}

export function SearchResultCardSkeleton() {
  return (
    <Card className="h-[180px] w-[600px]">
      <Skeleton className="absolute h-[180px] w-[240px] rounded-l-2xl rounded-r-none" />
      <div className="pl-[240px]">
        <CardHeader>
          <CardTitle className="flex justify-between">
            {/* <p>{`${currency} ${property.room_priceINCtax}`}</p> */}
            <Skeleton />
            {/* <ShareIcon className="cursor-pointer text-primary hover:opacity-90" /> */}
            <Skeleton />
          </CardTitle>
          <CardDescription>
            {/* Found on {property.property_ota} */}
            <Skeleton />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <p>{property.property_name}</p> */}
          <Skeleton />
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <p>Details</p> */}
          <Skeleton />
          {/* <p>View Deal</p> */}
          <Skeleton />
        </CardFooter>
      </div>
    </Card>
  );
}

function ImageCarousel({ links }: { links: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="h-[178px] w-[240px] overflow-hidden rounded-l-xl"
    >
      <CarouselContent>
        {links.map((link, i) => (
          <CarouselItem key={i}>
            <Image
              className="h-[178px] w-[240px]"
              src={link}
              height={178}
              width={240}
              alt="Hotel Image"
              onError={() => {}}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className={`right-1 ${!hover && "hidden"}`} />
      <CarouselPrevious className={`left-1 ${!hover && "hidden"}`} />
      <div className="absolute top-[90%] z-10 flex w-full items-center justify-center">
        <div className=" flex h-[12px] w-fit items-center justify-center gap-2 rounded-2xl bg-white/30 px-[6px]">
          {[...Array(count)].map((_, i) => (
            <div
              className={`h-[6px] w-[6px] rounded-full ${
                i === current ? "bg-primary" : "bg-secondary"
              }`}
              key={i}
              // onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );

  return (
    <>
      <Image
        className="object-fit h-[178px] w-[240px] rounded-l-xl"
        src={links[0]}
        height={178}
        width={240}
        alt="Hotel Image"
        onError={() => {}}
      />
    </>
  );
}
