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

type blogIndex = {
  blog_id: number; // id might not be needed, title + author PK
  blog_title: string;
  blog_author: string;
  created_at: string; //Date
  // Db can do this
  // total_views: number;
  // tags: string[];
};

type blogsIndex = {
  updatedAt: string;
  totalBlogs: number;
  blogsList: blogIndex[];
};

const blogsDataExample: blogsIndex = {
  updatedAt: "",
  totalBlogs: 10,
  blogsList: [
    {
      blog_id: 1,
      blog_title: "Title",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title2",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title3",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title4",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title5",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title6",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title7",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title8",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title9",
      blog_author: "Ammar",
      created_at: "",
    },
    {
      blog_id: 2,
      blog_title: "Title10",
      blog_author: "Ammar",
      created_at: "",
    },
  ],
};

export default function BlogsPage() {
  // TODO: fetch + ISR for this
  return (
    <section className="content-grid py-8">
      <h2 className="pb-8 text-3xl">The Latest Travel blogs</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {blogsDataExample.blogsList.map((blog, i) => (
          <Card key={i} className="">
            <CardHeader className="">
              <CardDescription>
                October 26th, 2023 {blog.created_at}
              </CardDescription>
              <CardTitle>
                {blog.blog_title} Author: {blog.blog_author}
              </CardTitle>
            </CardHeader>
            <CardContent className="mx-auto flex h-[150px] flex-col justify-between">
              <p>Summary points</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                <Link href={`/blogs/${blog.blog_title}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
