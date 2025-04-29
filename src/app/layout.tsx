import "server-only";

import * as React from "react";

import { fallbackLanguage, type Language } from "@/shared/modules/i18n/languages.ts";

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

// deno-lint-ignore require-await
const Layout = async (props: LayoutProps) => {
  return (
    <html
      lang={selectedLanguage.code}
      dir={selectedLanguage.dir}
      suppressHydrationWarning
    >
      <head />
      <body>
        {props.children}
        <RegisterBackend />
        <Analytics />
      </body>
    </html>
  );
};

export { Layout as default };
