import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // Serverside Environment variables
  server: {
    BACKEND_URL: z.string().url(),
    BLOG_BUCKET: z.string().url(),
    REVALIDATE_BLOG: z.number(),
  },
  // Environment variables available on the client (and server)
  client: {
    NEXT_PUBLIC_AUTOSUGGEST_SERVICE_URL: z.string().url(),
    // NEXT_PUBLIC_SITE_URL: z.string().url(),
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },

  // Need to manually destructure them to make sure all are included in bundle.
  runtimeEnv: {
    BACKEND_URL: process.env.BACKEND_URL,
    BLOG_BUCKET: process.env.BLOG_BUCKET,
    REVALIDATE_BLOG: (() => {
      if (process.env.REVALIDATE_BLOG)
        return parseInt(process.env.REVALIDATE_BLOG);
      return undefined;
    })(),
    NEXT_PUBLIC_AUTOSUGGEST_SERVICE_URL:
      process.env.NEXT_PUBLIC_AUTOSUGGEST_SERVICE_URL,
    // NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    //   process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
