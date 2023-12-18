import { compileMDX } from "next-mdx-remote/rsc";

export async function parseMDX(rawMDX: string) {
  const { content, frontmatter } = await compileMDX({
    source: rawMDX,
    components: {},
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [],
      },
    },
  });
  return content;
}
