import { type NextRequest, NextResponse } from "next/server";

import { fallbackLocaleCode, siteConfig, supportedLocales } from "@/shared/config.ts";
import * as localeMatcher from "@/shared/modules/i18n/locales.ts";
import { getCustomDomain } from "@/shared/modules/backend/profiles/get-custom-domain.ts";

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

  const response = NextResponse.next();

  const localeState = localeMatcher.localeMatchFromRequest(req, Object.values(supportedLocales), fallbackLocaleCode);
  if (localeState.updateCookie) {
    response.cookies.set("SITE_LOCALE", localeState.localeCode);
    //   console.log(` -> Setting visitor's locale: ${JSON.stringify(localeState)}`);
    // } else {
    //   console.log(` -> Visitor's locale already set: ${JSON.stringify(localeState)}`);
  }

  response.headers.set("x-locale", localeState.localeCode);

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
    "/((?!_next/|favicon.ico|\\.|contract/|assets/).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
