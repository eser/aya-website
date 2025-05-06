import "server-only";

import * as React from "react";

import { headers } from "next/headers";

import { supportedLocales } from "@/shared/config.ts";
import { type Locale } from "@/shared/modules/i18n/locales.ts";

import {
  type NavigationContextStateValues,
  NavigationProvider,
} from "@/shared/modules/navigation/navigation-provider.tsx";

import { RegisterBackend } from "./register-backend.tsx";
import { Analytics } from "./analytics.tsx";

import "../shared/globals.css";

type LayoutProps = {
  children: React.ReactNode;
  // deno-lint-ignore ban-types
  params: {
    // locale: Locale;
  };
};

async function Layout(props: LayoutProps) {
  const headersList = await headers();

  const host = headersList.get("x-custom-domain-host");
  const profile = headersList.get("x-custom-domain-profile");
  const localeCode = headersList.get("x-locale")!;

  const selectedLocale: Locale = supportedLocales[localeCode];

  const navigationState: NavigationContextStateValues = {
    host: host,
    profile: profile,
    locale: selectedLocale,
  };

  return (
    <html
      lang={selectedLocale.code}
      dir={selectedLocale.dir}
      suppressHydrationWarning
    >
      <head />
      <body>
        <NavigationProvider state={navigationState}>
          {props.children}
        </NavigationProvider>
        <RegisterBackend />
        <Analytics />
      </body>
    </html>
  );
}

export { Layout as default };
