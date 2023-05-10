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
      href: "/news/",
    },
    {
      title: "Topluluklar",
      href: "/communities/",
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
      href: "/codes/",
    },
  ],
  links: {
    twitter: "https://twitter.com/10forward_io",
    github: "https://github.com/10fwd",
  },
};

export { siteConfig };
