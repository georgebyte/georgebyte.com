import {defineCollection, z} from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        datePublished: z.string(),
        dateLastUpdated: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    articles,
};
