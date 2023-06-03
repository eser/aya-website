import { type NavItem } from "./nav.ts";

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
  name: "Açık Yazılım Ağı",
  description: "Bilişim Meta-Topluluğu",
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
    twitter: "https://twitter.com/acikyazilimagi",
    github: "https://github.com/acikkaynak",
  },
};

export { siteConfig };
