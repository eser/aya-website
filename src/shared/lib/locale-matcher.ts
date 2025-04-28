import Negotiator from "negotiator";
import picoMatch from "picomatch/posix.js";

export function localeMatchFromRequest(req: Request, supportedLocales: readonly string[], defaultLocale: string) {
  const negotiatorRequest = {
    headers: {
      "accept-language": req.headers.get("accept-language") ?? undefined,
    },
  };

  const negotiator = new Negotiator(negotiatorRequest);
  const locales = negotiator.languages();

  return localeMatch(locales, supportedLocales, defaultLocale);
}

export function localeMatch(locales: string[], supportedLocales: readonly string[], defaultLocale: string) {
  for (const locale of locales) {
    for (const supportedLocale of supportedLocales) {
      if (picoMatch.isMatch(locale, supportedLocale)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}
