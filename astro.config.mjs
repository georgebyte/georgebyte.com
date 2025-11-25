import {defineConfig} from "astro/config";
import {siteConfig} from "./src/config/site";

// https://astro.build/config
export default defineConfig({
    site: siteConfig.url,
});
