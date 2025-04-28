import { type NextRequest, NextResponse } from "next/server";
import { localeMatchFromRequest } from "./shared/lib/locale-matcher.ts";

import { supportedLocales, fallbackLocale } from "@/shared/i18n/locales.ts";

// const _getLocale = (req: NextRequest): string | undefined => {
//   const availableLanguages = languages.map((language) =>
//     language.code as string
//   );
//   const defaultLanguage = languages[0]?.code ?? "en";

//   // Check if locale is set in cookie
//   const cookieLocale = req.cookies.get("language")?.value;
//   if (cookieLocale !== undefined && availableLanguages.includes(cookieLocale)) {
//     return cookieLocale;
//   }

//   // Instantiate negotiator with request headers
//   const negotiatorHeaders: Record<string, string> = {};
//   // eslint-disable-next-line unicorn/no-array-for-each
//   req.headers.forEach((value, key) => {
//     negotiatorHeaders[key] = value;
//   });

//   const negotiator = new Negotiator({ headers: negotiatorHeaders });
//   const negotiatorLanguages = negotiator.languages();

//   // Use negotiator and intl-localematcher to get best locale
//   return matchLocale(negotiatorLanguages, availableLanguages, defaultLanguage);
// };

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const hasNextJsCookie = req.cookies.has("SITE_LOCALE");

  if (!hasNextJsCookie) {
    const locale = localeMatchFromRequest(req, supportedLocales, fallbackLocale);

    response.cookies.set("SITE_LOCALE", locale);
    console.log(`Setting visitor's locale to ${locale}`);
  }

  return response;
}

export const config = {
  runtime: "nodejs",
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
