import * as React from "react";

import { ThemeProvider } from "@/shared/modules/themes/theme-provider.tsx";

import { Header } from "./header.tsx";
import { Footer } from "./footer.tsx";
import { FontProvider } from "./font-provider.tsx";
import { ResponsiveIndicator } from "./responsive-indicator.tsx";

import "./page-layout.css";

type PageLayoutProps = {
  placeholders: Record<string, string>;
  children: React.ReactNode;
};

export function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <FontProvider />
      <ThemeProvider
        storageKey="theme"
        defaultTheme="default"
        enableColorScheme={false}
        disableTransitionOnChange
        themes={["default", "light", "midnight"]}
        attribute="data-theme"
      >
        <div className="min-h-screen flex flex-col">
          <Header placeholders={props.placeholders} />
          <main className="flex-1">{props.children}</main>
          <Footer />
          <ResponsiveIndicator />
        </div>
      </ThemeProvider>
    </>
  );
}
