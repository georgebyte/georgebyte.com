# AGENTS.md

Helpful notes for working in this repo:

- Framework: Astro 5 with MDX; content lives in `src/content/articles/*.mdx` and is validated by `src/content/config.ts` (title/description/dates/tags).
- Pages: `src/pages/index.astro` (about), `src/pages/blog/index.astro` (list), `src/pages/blog/[slug].astro` (detail), and tag pages in `src/pages/blog/tags`.
- Layouts: `src/layouts/BlankLayout.astro` sets global head/meta, imports `src/styles/global.css`; `src/layouts/DefaultLayout.astro` wraps nav/footer; `src/layouts/ArticleLayout.astro` formats post dates and excerpt.
- Site metadata + legacy redirects: `src/config/site.ts` (navigation, social links, RSS URL, legacy paths), wired into `astro.config.mjs`.
- Tag logic: `src/utils/tags.ts` generates tag pages from article tags; `src/utils/articles.ts` caches collection reads.
- Aliases: `@components/*` is defined in `tsconfig.json` for `src/components`; `@layouts/*` is defined for `src/layouts`; `@utils/*` is defined for `src/utils`.
- Static assets: `public/` holds images and favicon used by layouts and pages.
- Legacy site: `legacy/` is the old Jekyll source; leave in place unless explicitly migrating content.
- Common commands: `npm run dev`, `npm run build`, `npm run preview`, `npm run format`, `npm run lint`.
