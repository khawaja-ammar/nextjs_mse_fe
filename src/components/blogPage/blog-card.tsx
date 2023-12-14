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
import { blogPost } from "@/types";

type Props = {
  post: blogPost;
};
export default function BlogCard({ post }: Props) {
  return (
    <Card className="">
      <CardHeader className="">
        <CardDescription>{format(post.created_at, "PP")}</CardDescription>
        <CardTitle>{post.post_title}</CardTitle>
        <CardDescription>By {post.post_author}</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
        <p>Summary points</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          className="w-full text-secondary-foreground"
        >
          <Link href={`/blog/${post.post_title}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
