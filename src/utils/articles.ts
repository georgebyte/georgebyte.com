import {getCollection, type CollectionEntry} from "astro:content";

let articlesPromise: Promise<CollectionEntry<"articles">[]> | undefined;

export async function getAllArticles(): Promise<CollectionEntry<"articles">[]> {
    if (!articlesPromise) {
        articlesPromise = getCollection("articles");
    }
    return articlesPromise;
}
