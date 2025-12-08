import {defineConfig} from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import {legacyRedirects, siteConfig} from "./src/config/site";

const astroExpressiveCodeOptions = {
    themes: ["github-light"],
    defaultProps: {
        wrap: false,
    },
};

// https://astro.build/config
export default defineConfig({
    site: siteConfig.url,
    integrations: [astroExpressiveCode(astroExpressiveCodeOptions), mdx()],
    redirects: {...legacyRedirects},
});
