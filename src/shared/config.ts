export type SiteConfig = {
  name: string;
  fancyName: string;
  title: string;
  description: string;
  keywords: string[];

  links: {
    x: string;
    instagram: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Açık Yazılım Ağı",
  fancyName: "𝕒𝕔𝕀𝕜 𝕪𝕒𝕫𝕀𝕃𝕀𝕞 𝕒𝕘𝕀",
  title: "AYA | Açık Yazılım Ağı",
  description: "Gönüllü geliştirilen yazılımlarla oluşan bir yazılım vakfı",
  keywords: ["Açık Yazılım Ağı", "Açık Kaynak", "Açık Veri"],

  links: {
    x: "https://twitter.com/acikyazilimagi",
    instagram: "https://www.instagram.com/acikyazilimagi/",
    github: "https://github.com/acikkaynak",
  },
};

export const forbiddenSlugs: readonly string[] = [
  "about",
  "admin",
  "api",
  "auth",
  "communities",
  "community",
  "config",
  "contact",
  "dashboard",
  "element",
  "elements",
  "events",
  "faq",
  "feed",
  "guide",
  "help",
  "home",
  "impressum",
  "imprint",
  "jobs",
  "legal",
  "login",
  "logout",
  "news",
  "null",
  "organizations",
  "orgs",
  "people",
  "policies",
  "policy",
  "privacy",
  "products",
  "profile",
  "profiles",
  "projects",
  "register",
  "root",
  "search",
  "services",
  "settings",
  "signin",
  "signout",
  "signup",
  "support",
  "tag",
  "tags",
  "terms",
  "tos",
  "undefined",
  "user",
  "users",
  "verify",
  "wiki",
];
