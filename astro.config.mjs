import {defineConfig} from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import {legacyRedirects, siteConfig} from "./src/config/site";

const astroExpressiveCodeOptions = {
    themes: ["github-light"],
    defaultProps: {
        wrap: false,
    },
    styleOverrides: {
        codeFontSize: "0.9rem",
        borderRadius: "0",
        frames: {
            shadowColor: "#f8f8f8",
        },
    },
};

// https://astro.build/config
export default defineConfig({
    site: siteConfig.url,
    trailingSlash: "always",
    markdown: {
        rehypePlugins: [rehypeSlug],
    },
    integrations: [astroExpressiveCode(astroExpressiveCodeOptions), mdx()],
    redirects: {...legacyRedirects},
});
