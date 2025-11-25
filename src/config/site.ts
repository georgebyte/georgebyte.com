export type SocialKey = "x" | "youtube" | "linkedin" | "github";
export type SocialLinks = Partial<Record<SocialKey, string | null>>;

export interface NavigationLink {
    href: string;
    label: string;
    external?: boolean;
}

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    rssFeedUrl: string;
    avatar: {
        primary: string;
        retina: string;
    };
    googleAnalyticsId?: string;
    navigationLinks: NavigationLink[];
    socialLinks: SocialLinks;
}

const siteUrl = "https://georgebyte.com";
const rssFeedUrl = `${siteUrl}/feed.xml`;

export const siteConfig: SiteConfig = {
    name: "George Byte",
    description: "Tech lead and full stack web engineer deeply in love with front-end development.",
    url: siteUrl,
    rssFeedUrl,
    avatar: {
        primary: "/images/george_byte.jpg",
        retina: "/images/george_byte@2x.jpg",
    },
    googleAnalyticsId: "UA-46129147-5",
    navigationLinks: [
        {href: "/", label: "About"},
        {href: "/articles", label: "Articles"},
        {href: "/cv", label: "CV", external: true},
    ],
    socialLinks: {
        x: `https://www.x.com/georgebyte`,
        youtube: null,
        linkedin: `https://www.linkedin.com/in/jurebajt`,
        github: `https://github.com/georgebyte`,
    },
};
