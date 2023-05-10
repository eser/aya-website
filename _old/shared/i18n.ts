import translationsEn from "./translations/en.json";
import translationsTr from "./translations/tr.json";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  // { code: "tr", name: "Türkçe" },
];

const defaultLanguage = languages[0];

const getLanguage = function getLanguage(
  languageId?: string | string[],
): Language | undefined {
  if (languageId === undefined || languageId === null) {
    return defaultLanguage;
  }

  const languageId_ = Array.isArray(languageId) ? languageId[0] : languageId;

  const matchingLanguage = languages.find((language) =>
    language.code === languageId_ || language.code.startsWith(`${languageId_}-`)
  );

  return matchingLanguage; // ?? defaultLanguage;
};

// translations

const loadedTranslations: Record<string, Record<string, string>> = {
  en: translationsEn,
  tr: translationsTr,
};

const useI18N = function useI18N(languageCode: string) {
  if (!(languageCode in loadedTranslations)) {
    // disabled due to async restrictions
    // loadedTranslations[languageCode] = await import(
    //   `./translations/${languageCode}.json`
    // );
    throw new Error(`language code is not supported: ${languageCode}`);
  }

  return {
    t: (key: string) => {
      const languageMap = loadedTranslations[languageCode];

      return languageMap[key] ?? `{{${key}}}`;
    },
    formatDate: (date: Date) => date.toLocaleDateString(languageCode),
  };
};

export { defaultLanguage, getLanguage, type Language, languages, useI18N };
