import { env } from "@/lib/env.mjs";

export async function GET() {
  const res = await fetch(`${env.BE_URL}/test/jsonsearchquery`, {
    cache: "no-cache",
  });

  return;
}
