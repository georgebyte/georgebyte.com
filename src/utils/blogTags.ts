import {getCollection, type CollectionEntry} from "astro:content";
import {slugifyTag} from "./slugifyTag";

type TagWithPosts<T extends "articles"> = {
    slug: string;
    label: string;
    posts: CollectionEntry<T>[];
};

type TagWithArticles = TagWithPosts<"articles">;

let articlesPromise: Promise<CollectionEntry<"articles">[]> | undefined;
let blogTagsPromise: Promise<TagWithArticles[]> | undefined;

async function getAllArticles(): Promise<CollectionEntry<"articles">[]> {
    if (!articlesPromise) {
        articlesPromise = getCollection("articles");
    }
    return articlesPromise;
}

export async function getBlogTags(): Promise<TagWithArticles[]> {
    if (blogTagsPromise) return blogTagsPromise;

    blogTagsPromise = (async () => {
        const articles = await getAllArticles();

        const tagsBySlug = new Map<string, TagWithArticles>();
        for (const article of articles) {
            for (const tagLabel of article.data.tags ?? []) {
                const slug = slugifyTag(tagLabel);
                if (!slug) continue;

                let info = tagsBySlug.get(slug);
                if (!info) {
                    info = {slug, label: tagLabel, posts: []};
                    tagsBySlug.set(slug, info);
                }
                info.posts.push(article);
            }
        }

        return Array.from(tagsBySlug.values()).sort((a, b) =>
            a.label.localeCompare(b.label, undefined, {sensitivity: "base"})
        );
    })();

    return blogTagsPromise;
}
