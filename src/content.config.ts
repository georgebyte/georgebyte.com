import {defineCollection} from "astro:content";
import {z} from "astro/zod";
import {glob} from "astro/loaders";

const articles = defineCollection({
    loader: glob({pattern: "**/[^_]*.{md,mdx}", base: "./src/content/articles"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.string(),
        dateLastUpdated: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        toc: z.boolean().optional(),
    }),
});

export const collections = {
    articles,
};
