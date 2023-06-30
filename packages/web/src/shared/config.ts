interface SiteConfig {
  name: string;
  title: string;
  description: string;
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
  links: {
    twitter: "https://twitter.com/acikyazilimagi",
    instagram: "https://www.instagram.com/acikyazilimagi/",
    github: "https://github.com/acikkaynak",
  },
};

export { siteConfig };
