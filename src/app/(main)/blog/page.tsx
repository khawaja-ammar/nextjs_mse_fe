import { Suspense } from "react";
import { env } from "@/lib/env.mjs";

import { blogIndex } from "@/types";
import { BlogCard, BlogCardSkeleton } from "@/components/blogPage/blog-card";

const NUM_SKELETONS = 6;

export default function BlogListPage() {
  // TODO: fetch + ISR for this
  const req = fetch(`${env.BLOG_BUCKET}/blogList.json`, {
    next: { revalidate: env.REVALIDATE_BLOG },
    // cache: "no-cache",
  });
  return (
    <>
      <h2 className="pb-8 text-3xl text-primary">Travel blogs</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList req={req} />
        </Suspense>
      </div>
    </>
  );
}

async function BlogList({ req }: { req: Promise<Response> }) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await req;
  const data: blogIndex = await res.json();
  return (
    <>
      {data.blogPosts.map((post, i) => (
        <BlogCard key={i} post={post} />
      ))}
    </>
  );
}

function BlogListSkeleton() {
  return (
    <>
      {[...Array(NUM_SKELETONS)].map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </>
  );
}
