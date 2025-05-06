import "server-only";
import * as React from "react";

import { NavigationProvider } from "@/shared/modules/navigation/navigation-provider.tsx";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";

import { RegisterBackend } from "./register-backend.tsx";
import { Analytics } from "./analytics.tsx";
import "../shared/globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

async function Layout(props: LayoutProps) {
  const navigationState = await getNavigationState();

  return (
    <html lang={navigationState.locale.code} dir={navigationState.locale.dir} suppressHydrationWarning>
      <head />
      <body>
        <NavigationProvider state={navigationState}>{props.children}</NavigationProvider>
        <RegisterBackend />
        <Analytics />
      </body>
    </html>
  );
}

export { Layout as default };
