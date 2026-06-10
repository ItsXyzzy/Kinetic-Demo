// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const zines = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/zines" }),
  schema: z.object({
    title:          z.string(),
    catalog_number: z.string(),
    date:           z.coerce.date(),
    image:          z.string(),
    specs:          z.string(),
    status:         z.enum(["AVAILABLE", "LOW STOCK", "OUT OF PRINT"]),
    contributors:   z.array(z.object({ name: z.string() })),
  }),
});

const stockists = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stockists" }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    url:  z.string().url(),
  }),
});

export const collections = { zines, stockists };