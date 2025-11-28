import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import {legacyRedirects, siteConfig} from "./src/config/site";

// https://astro.build/config
export default defineConfig({
    site: siteConfig.url,
    integrations: [mdx()],
    redirects: {...legacyRedirects},
});
