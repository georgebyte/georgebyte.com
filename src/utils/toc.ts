import type {MarkdownHeading} from "astro";

export type TocItem = {
    depth: number;
    number: string;
    slug: string;
    text: string;
};

const MIN_DEPTH = 2;
const MAX_DEPTH = 4;

export function buildToc(headings: MarkdownHeading[]): TocItem[] {
    const tocItems: TocItem[] = [];
    let h2 = 0;
    let h3 = 0;
    let h4 = 0;

    for (const heading of headings) {
        if (heading.depth < MIN_DEPTH || heading.depth > MAX_DEPTH) {
            continue;
        }

        if (heading.depth === 2) {
            h2 += 1;
            h3 = 0;
            h4 = 0;
        }

        if (heading.depth === 3) {
            h3 += 1;
            h4 = 0;
        }

        if (heading.depth === 4) {
            h4 += 1;
        }

        const numberParts = [h2, h3, h4].slice(0, heading.depth - 1).filter(Boolean);

        tocItems.push({
            depth: heading.depth - 1,
            number: numberParts.join("."),
            slug: heading.slug,
            text: heading.text,
        });
    }

    return tocItems;
}
