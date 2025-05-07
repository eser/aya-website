import "server-only";
import * as React from "react";
import type { Metadata } from "next";

import { siteConfig } from "@/shared/config.ts";
import { NavigationProvider } from "@/shared/modules/navigation/navigation-provider.tsx";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";

import { RegisterBackend } from "./register-backend.tsx";
import { Analytics } from "./analytics.tsx";
import "../shared/globals.css";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};

type LayoutProps = {
  children: React.ReactNode;
};

async function Layout(props: LayoutProps) {
  const navigationState = await getNavigationState();

  return (
    <html lang={navigationState.locale.code} dir={navigationState.locale.dir} suppressHydrationWarning>
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
