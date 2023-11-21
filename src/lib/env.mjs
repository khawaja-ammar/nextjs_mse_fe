import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // Serverside Environment variables
  server: {
    BE_URL: z.string().url(),
  },
  // Environment variables available on the client (and server)
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },

  // Need to manually destructure them to make sure all are included in bundle.
  runtimeEnv: {
    BE_URL: process.env.BE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    //   process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
