export type LanguageKey = "tr" | "en";

export type Language = {
  code: LanguageKey;
  name: string;
  flag: string;
  dir: "ltr" | "rtl";
};

export const languages: readonly Language[] = [
  {
    code: "tr",
    name: "Türkçe",
    flag: "🇹🇷",
    dir: "ltr",
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
];

export const fallbackLanguage: Language = languages[0];
