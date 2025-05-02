import { type NextRequest, NextResponse } from "next/server";

import { siteConfig } from "@/shared/config.ts";
import { localeMatchFromRequest } from "@/shared/lib/locale-matcher.ts";

import { fallbackLocale, supportedLocales } from "@/shared/modules/i18n/locales.ts";
import { getCustomDomain } from "@/shared/modules/backend/profiles/get-custom-domain.ts";

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

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.split(":", 1).at(0);

  if (host !== undefined && host !== "localhost" && host !== siteConfig.host) {
    const customDomain = await getCustomDomain(host);

    if (customDomain !== null) {
      const target = new URL(`/${customDomain.profile_slug}${req.nextUrl.pathname}`, req.nextUrl);
      if (target.pathname.endsWith("/")) {
        target.pathname = target.pathname.slice(0, -1);
      }

      const newResponse = NextResponse.rewrite(target);

      newResponse.headers.set("x-custom-domain-host", host);
      newResponse.headers.set("x-custom-domain-profile", customDomain.profile_slug);

      return newResponse;
    }
  }

  const hasNextJsCookie = req.cookies.has("SITE_LOCALE");

  const response = NextResponse.next();

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
    "/((?!_next/|favicon.ico|contract/).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
