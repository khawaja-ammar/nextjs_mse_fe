import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type blogPost = {
  post_id: number; // id might not be needed, title + author PK
  post_title: string;
  post_author: string;
  created_at: string; //Date
  // Db can do this
  // total_views: number;
  // tags: string[];
};

type blogIndex = {
  updatedAt: string;
  totalBlogs: number;
  blogPosts: blogPost[];
};

const blogPostsExample: blogIndex = {
  updatedAt: "",
  totalBlogs: 10,
  blogPosts: [
    {
      post_id: 1,
      post_title: "Title",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title2",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title3",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title4",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title5",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title6",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title7",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title8",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title9",
      post_author: "Ammar",
      created_at: "",
    },
    {
      post_id: 2,
      post_title: "Title10",
      post_author: "Ammar",
      created_at: "",
    },
  ],
};

export default function BlogPage() {
  // TODO: fetch + ISR for this
  return (
    <section className="content-grid py-8">
      <h2 className="pb-8 text-3xl text-primary">The Latest Travel blogs</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {blogPostsExample.blogPosts.map((post, i) => (
          <Card key={i} className="">
            <CardHeader className="">
              <CardDescription>
                October 26th, 2023 {post.created_at}
              </CardDescription>
              <CardTitle>
                {post.post_title} Author: {post.post_author}
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
              <p>Summary points</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <Link href={`/blog/${post.post_title}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
