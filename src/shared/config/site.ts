import { type NavItem } from "./nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Onİleri",
  description: "Yazılım geliştiricilerine yönelik bir meta-topluluk.",
  mainNav: [
    {
      title: "Haberler",
      href: "/{lang}/news/",
    },
    {
      title: "Topluluklar",
      href: "/{lang}/communities/",
    },
    {
      title: "Kişiler",
      href: "/{lang}/people/",
    },
    {
      title: "Projeler",
      href: "/{lang}/projects/",
    },
    {
      title: "Rehber",
      href: "/{lang}/guide/",
    },
    {
      title: "Kurallar",
      href: "/{lang}/codes/",
    },
  ],
  links: {
    twitter: "https://twitter.com/10forward_io",
    github: "https://github.com/10fwd",
  },
};

export { siteConfig };
