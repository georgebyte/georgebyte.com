import {getCollection, type CollectionEntry} from "astro:content";
import {slugifyTag} from "./slugifyTag";

export interface BlogTagInfo {
    slug: string;
    label: string;
    posts: CollectionEntry<"blog-posts">[];
}

let blogPostsPromise: Promise<CollectionEntry<"blog-posts">[]> | undefined;
let blogTagsPromise: Promise<BlogTagInfo[]> | undefined;

export async function getAllBlogPosts(): Promise<CollectionEntry<"blog-posts">[]> {
    if (!blogPostsPromise) {
        blogPostsPromise = getCollection("blog-posts");
    }
    return blogPostsPromise;
}

export async function getBlogTags(): Promise<BlogTagInfo[]> {
    if (blogTagsPromise) return blogTagsPromise;

    blogTagsPromise = (async () => {
        const blogPosts = await getAllBlogPosts();

        const tagsBySlug = new Map<string, BlogTagInfo>();
        for (const blogPost of blogPosts) {
            for (const tagLabel of blogPost.data.tags ?? []) {
                const slug = slugifyTag(tagLabel);
                if (!slug) continue;

                let info = tagsBySlug.get(slug);
                if (!info) {
                    info = {slug, label: tagLabel, posts: []};
                    tagsBySlug.set(slug, info);
                }
                info.posts.push(blogPost);
            }
        }

        return Array.from(tagsBySlug.values()).sort((a, b) =>
            a.label.localeCompare(b.label, undefined, {sensitivity: "base"})
        );
    })();

    return blogTagsPromise;
}
