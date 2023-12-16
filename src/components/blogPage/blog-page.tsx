import { parseMDX } from "@/lib/mdxParser";

type Props = {
  req: Promise<Response>;
};
export async function BlogPage({ req }: Props) {
  try {
    const res = await req;
    if (!res.ok) {
      throw new Error("Parsing failed");
    }
    const rawMDX = await res.text();
    if (rawMDX === "404: Not Found") throw new Error("Parsing failed");

    const content = parseMDX(rawMDX);

    return <>{content}</>;
  } catch (err) {
    <>ERROR</>;
  }
}
