type LanguageKey = "tr" | "en";

interface Language {
  code: LanguageKey;
  name: string;
  flag: string;
  dir: "ltr" | "rtl";
}

const languages: readonly Language[] = [
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

export { type Language, type LanguageKey, languages };
