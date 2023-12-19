import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft } from "lucide-react";
import { parseMDX } from "@/lib/mdxParser";
import { Skeleton } from "@/components/ui/skeleton";
import { env } from "@/lib/env.mjs";

// TODO: Do this for caching pathnames etc
// export async function generateStaticParams() {
//   // Fetch list of routes
//   const posts = await fetch(``).then((res) => res.json());
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

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
  console.log(`${env.BLOG_BUCKET}/${slug}.mdx`);
  return (
    <section className="content-grid py-8">
      <Link href="/blog" className="flex items-center gap-2 pb-4">
        <ChevronLeft />
        Back to Blog
      </Link>
      <div className="flex flex-col">
        <h1 className="pb-8 text-4xl text-primary">
          {slug.replace(/%20/g, " ")}
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
      message = "Error";
    }

    return <p>{message}</p>;
  }
}

function BlogPostSkeleton() {
  return (
    <>
      <Skeleton className="h-[1000px] w-full" />
    </>
  );
}
