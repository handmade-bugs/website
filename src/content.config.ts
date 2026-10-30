import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      meta: z.object({
        title: z.string(),
        description: z.string(),
      }),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { blog };
