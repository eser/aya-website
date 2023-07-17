import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";
import { type Database } from "shared/src/supabase-database-types.ts";

import { languages } from "@/shared/i18n/languages.ts";

const getSupabaseSession = async (req: NextRequest, res: NextResponse) => {
  const supabase = createMiddlewareClient<Database>({ req, res });

  await supabase.auth.getSession();
};

const _getLocale = (req: NextRequest): string | undefined => {
  const availableLanguages = languages.map((language) =>
    language.code as string
  );
  const defaultLanguage = languages[0]?.code ?? "en";

  // Check if locale is set in cookie
  const cookieLocale = req.cookies.get("language")?.value;
  if (cookieLocale !== undefined && availableLanguages.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Instantiate negotiator with request headers
  const negotiatorHeaders: Record<string, string> = {};
  // eslint-disable-next-line unicorn/no-array-for-each
  req.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const negotiatorLanguages = negotiator.languages();

  // Use negotiator and intl-localematcher to get best locale
  return matchLocale(negotiatorLanguages, availableLanguages, defaultLanguage);
};

const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();

  if (
    req.nextUrl.pathname.startsWith("/_next/") ||
    req.nextUrl.pathname.startsWith("/favicon.ico")
  ) {
    return res;
  }

  await getSupabaseSession(req, res);

  // console.log(getLocale(req), req.nextUrl.href);
  // req.locale

  return res;
};

const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/|favicon.ico).*)",
  ],
};

export { config, middleware };
