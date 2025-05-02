import "server-only";

import * as React from "react";

import { headers } from "next/headers";

import { fallbackLanguage, type Language } from "@/shared/modules/i18n/languages.ts";

import { type NavigationContextState, NavigationProvider } from "@/shared/modules/navigation/navigation-provider.tsx";

import { RegisterBackend } from "./register-backend.tsx";
import { Analytics } from "./analytics.tsx";

import "../shared/globals.css";

const selectedLanguage: Language = fallbackLanguage;

type LayoutProps = {
  children: React.ReactNode;
  // deno-lint-ignore ban-types
  params: {
    // lang: Language;
  };
};

async function Layout(props: LayoutProps) {
  const headersList = await headers();

  const host = headersList.get("x-custom-domain-host");
  const profile = headersList.get("x-custom-domain-profile");

  const navigationState: NavigationContextState = {
    host: host,
    profile: profile,
  };

  return (
    <html
      lang={selectedLanguage.code}
      dir={selectedLanguage.dir}
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
