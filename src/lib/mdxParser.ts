import { compileMDX } from "next-mdx-remote/rsc";
import MDXImage from "@/components/mdxComponents/mdx-image";

export async function parseMDX(rawMDX: string) {
  const { content, frontmatter } = await compileMDX<{
    // title: string,
    // date: string,
    // tags: string[]
  }>({
    source: rawMDX,
    components: {
      MDXImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [],
      },
    },
  });
  return content;
}
