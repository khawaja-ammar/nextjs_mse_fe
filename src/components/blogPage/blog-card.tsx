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
    <Card className="flex h-[400px] flex-col justify-between">
      <CardHeader>
        <CardDescription className="h-[20px]">
          {format(parseJSON(post.created_at), "PP")}
        </CardDescription>
        <CardTitle className="two-line-ellipsis h-[3rem]">
          {post.post_title}
        </CardTitle>
        <CardDescription className="h-[20px]">
          By {post.post_author}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="six-line-ellipsis">{post.summary}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.post_title}`} className="h-[40px] w-full">
          <Button
            variant="secondary"
            className="h-full w-full text-secondary-foreground"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export function BlogCardSkeleton() {
  return (
    <Card className="flex h-[400px] flex-col justify-between overflow-clip">
      <CardHeader className="h-[242px]">
        <Skeleton className="h-[14px] w-[120px] py-[3px]" />
        <Skeleton className="h-[48px] w-full" />
        <Skeleton className="h-[14px] w-[150px] py-[3px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[150px] w-full" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-[40px] w-full" />
      </CardFooter>
    </Card>
  );
}
