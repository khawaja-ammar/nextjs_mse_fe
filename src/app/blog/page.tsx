import { BlogCard, BlogCardSkeleton } from "@/components/blogPage/blog-card";

import { blogIndex, blogPost } from "@/types";
import { Suspense } from "react";
import { env } from "@/lib/env.mjs";

const NUM_SKELETONS = 9;

// const blogPostsEg: blogIndex = (() => {
//   const total = 10;
//   const blogsArr: blogPost[] = [];
//   for (let i = 0; i < total; i++) {
//     blogsArr.push({
//       post_id: i,
//       post_author: "ammar",
//       post_title: `Blog post ${i + 1}`,
//       created_at: "Dec 18, 2023",
//     });
//   }
//   return {
//     updatedAt: "",
//     totalBlogs: total,
//     blogPosts: blogsArr,
//   };
// })();

export default function BlogListPage() {
  // TODO: fetch + ISR for this
  const req = fetch(`${env.BLOG_BUCKET}/blogList.json`, {
    cache: "no-cache",
  });
  return (
    <section className="content-grid py-8">
      <h2 className="pb-8 text-3xl text-primary">Travel blogs</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList req={req} />
        </Suspense>
      </div>
    </section>
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
      {Array.from(Array(NUM_SKELETONS), (_, i) => {
        return <BlogCardSkeleton key={i} />;
      })}
    </>
  );
}
