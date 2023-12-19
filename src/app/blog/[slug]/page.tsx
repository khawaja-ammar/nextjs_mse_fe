import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft } from "lucide-react";
import { parseMDX } from "@/lib/mdxParser";
import { Skeleton } from "@/components/ui/skeleton";
import { env } from "@/lib/env.mjs";
import { blogIndex } from "@/types";

// TODO: Do this for caching pathnames etc
export async function generateStaticParams() {
  const list: blogIndex = await fetch(`${env.BLOG_BUCKET}/blogList.json`).then(
    (res) => res.json(),
  );

  return list.blogPosts.map((blog) => ({
    slug: blog.post_title,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({ params: { slug } }: Props) {}

export default function BlogPost({ params: { slug } }: Props) {
  // TODO: Fetch the blog using blogName
  const blog = fetch(`${env.BLOG_BUCKET}/${slug}.mdx`, {
    cache: "no-cache",
  });
  return (
    <section className="content-grid py-8">
      <Link href="/blog" className="flex items-center gap-2 pb-4">
        <ChevronLeft />
        Back to Blog
      </Link>
      <div className="flex flex-col">
        <h1 className="pb-8 text-4xl text-primary">
          {decodeURIComponent(slug)}
        </h1>
        <Suspense key={slug} fallback={<BlogPostSkeleton />}>
          <BlogPostContent req={blog} />
        </Suspense>
      </div>
    </section>
  );
}

type PropsBlogContent = {
  req: Promise<Response>;
};
async function BlogPostContent({ req }: PropsBlogContent) {
  try {
    const res = await req;
    if (!res.ok) {
      if (res.status === 404) throw new Error("File Not Found");
      console.log(res);
      throw new Error("File doesnt exist?");
    }
    const rawMDX = await res.text();
    if (rawMDX === "404: Not Found") throw new Error("Not Found");

    const content = parseMDX(rawMDX);

    return <div className="markdown-body">{content}</div>;
  } catch (err) {
    let message = "";
    if (err === "File Not Found") {
      message = "File Not Found";
    } else {
      message = "File Not Found";
    }

    return <p>{message}</p>;
  }
}

function BlogPostSkeleton() {
  return (
    <>
      <Skeleton className="h-[100vw] w-full" />
    </>
  );
}
