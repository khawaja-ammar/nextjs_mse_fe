import Link from "next/link";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  created_at: Date;
  post_title: string;
  post_author: string;
  // post_id: string
  // total_count: number;
};
export default function BlogCard({
  created_at,
  post_title,
  post_author,
}: Props) {
  return (
    <Card className="">
      <CardHeader className="">
        <CardDescription>{format(created_at, "PP")}</CardDescription>
        <CardTitle>{post_title}</CardTitle>
        <CardDescription>By {post_author}</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
        <p>Summary points</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="w-full text-secondary-foreground"
        >
          <Link href={`/blog/${post_title}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
