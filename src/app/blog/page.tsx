import BlogCard from "@/components/blogPage/blog-card";

import { blogIndex, blogPost } from "@/types";

const blogPostsEg: blogIndex = (() => {
  const total = 10;
  const blogsArr: blogPost[] = [];
  for (let i = 0; i < total; i++) {
    blogsArr.push({
      post_id: i,
      post_author: "ammar",
      post_title: `Blog post ${i + 1}`,
      created_at: new Date(),
    });
  }
  return {
    updatedAt: "",
    totalBlogs: total,
    blogPosts: blogsArr,
  };
})();

export default function BlogPage() {
  // TODO: fetch + ISR for this
  // Suspense loading with skeletons
  return (
    <section className="content-grid py-8">
      <h2 className="pb-8 text-3xl text-primary">Travel blogs</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {blogPostsEg.blogPosts.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </div>
    </section>
  );
}
