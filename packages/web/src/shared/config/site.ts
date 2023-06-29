import { type NavItem } from "./nav.ts";

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    instagram: string;
    github: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Açık Yazılım Ağı",
  title: "AYA | Açık Yazılım Ağı",
  description: "açık yazılım ağı, bilişim meta-topluluğu.",
  mainNav: [
    {
      title: "Haberler",
      href: "/news/",
    },
    {
      title: "Topluluk",
      href: "/community/",
    },
    {
      title: "Kişiler",
      href: "/people/",
    },
    {
      title: "Projeler",
      href: "/projects/",
    },
    {
      title: "Rehber",
      href: "/guide/",
    },
    {
      title: "Kurallar",
      href: "/policies/",
    },
    {
      title: "Hakkında",
      href: "/about/",
    },
  ],
  links: {
    twitter: "https://twitter.com/acikyazilimagi",
    instagram: "https://www.instagram.com/acikyazilimagi/",
    github: "https://github.com/acikkaynak",
  },
};

export { siteConfig };
