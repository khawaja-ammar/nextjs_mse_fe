import BlogCard from "@/components/blogPage/blog-card";

type blogPost = {
  post_id: number; // id might not be needed, title + author PK
  post_title: string;
  post_author: string;
  created_at: Date;
  // summary point
  // Db can do this
  // total_views: number;
  // tags: string[];
};

type blogIndex = {
  updatedAt: string;
  totalBlogs: number;
  blogPosts: blogPost[];
};

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
          <BlogCard
            key={i}
            created_at={post.created_at}
            post_author={post.post_author}
            post_title={post.post_title}
          />
        ))}
      </div>
    </section>
  );
}
