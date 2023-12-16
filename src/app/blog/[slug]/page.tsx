import { BlogPage } from "@/components/blogPage/blog-page";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense, cache } from "react";

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
  const blog = fetch(
    "https://pub-c1506036110742a5af3ac359118ca68a.r2.dev/sample.md",
    {
      cache: "no-cache",
    },
  );
  // Suspense loading with skeletons
  return (
    <section className="content-grid py-8">
      <Link href="/blog" className="flex items-center gap-2 pb-4 text-primary">
        <ChevronLeft />
        Back to Blog
      </Link>
      <h2 className="pb-8 text-3xl">BlogPost {slug}</h2>
      <Suspense key={slug} fallback={<>Loading...</>}>
        <BlogPage req={blog} />
      </Suspense>
    </section>
  );
}
