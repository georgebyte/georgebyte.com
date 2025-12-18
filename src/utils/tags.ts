import {type CollectionEntry} from "astro:content";
import {getAllArticles} from "./articles";

type TagWithPosts<T extends "articles"> = {
    slug: string;
    label: string;
    posts: CollectionEntry<T>[];
};

type TagWithArticles = TagWithPosts<"articles">;

let blogTagsPromise: Promise<TagWithArticles[]> | undefined;

export async function getBlogTags(): Promise<TagWithArticles[]> {
    if (blogTagsPromise) return blogTagsPromise;

    blogTagsPromise = (async () => {
        const articles = await getAllArticles();

        const tagsBySlug = new Map<string, TagWithArticles>();
        for (const article of articles) {
            for (const tagLabel of article.data.tags ?? []) {
                const slug = slugifyTag(tagLabel);
                if (!slug) continue;

                let tagData = tagsBySlug.get(slug);
                if (!tagData) {
                    tagData = {slug, label: tagLabel, posts: []};
                    tagsBySlug.set(slug, tagData);
                }
                tagData.posts.push(article);
            }
        }

        return Array.from(tagsBySlug.values()).sort((a, b) =>
            a.label.localeCompare(b.label, undefined, {sensitivity: "base"})
        );
    })();

    return blogTagsPromise;
}

function slugifyTag(tag: string): string {
    return tag
        .trim()
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}
