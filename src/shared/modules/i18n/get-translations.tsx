import { headers } from "next/headers";

import { fallbackLocaleCode, supportedLocales } from "@/shared/config.ts";
import { type Locale } from "@/shared/modules/i18n/locales.ts";

export async function getTranslations(category: string) {
  const headersList = await headers();

  const localeCode = headersList.get("x-locale") ?? fallbackLocaleCode;

  const locale: Locale = supportedLocales[localeCode];

  const messages = (await import(`../../../messages/${localeCode}.json`)).default;

  const t = (key: string) => {
    return messages[category][key];
  };

  return { localeCode, locale, supportedLocales, t };
}
