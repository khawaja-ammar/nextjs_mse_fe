import Link from "next/link";

import { format, parseJSON } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPost } from "@/types";
import { Skeleton } from "../ui/skeleton";

type Props = {
  post: blogPost;
};
export function BlogCard({ post }: Props) {
  return (
    <Card className="h-[340px]">
      <CardHeader className="">
        <CardDescription>
          {format(parseJSON(post.created_at), "PP")}
        </CardDescription>
        <CardTitle>{post.post_title}</CardTitle>
        <CardDescription>By {post.post_author}</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
        <p>Summary points</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="h-[40px] w-full text-secondary-foreground"
        >
          <Link href={`/blog/${post.post_title}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function BlogCardSkeleton() {
  return (
    <Card className="h-[340px]">
      <CardHeader className="">
        <CardDescription>
          <Skeleton className="h-[0.875rem] w-full" />
        </CardDescription>
        <CardTitle>
          <Skeleton className="h-[1.5rem] w-full" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-[0.875rem] w-full" />
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
        {/* <Skeleton className="h-full w-full" /> */}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
