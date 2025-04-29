import * as React from "react";

import { Header } from "./header.tsx";
import { Footer } from "./footer.tsx";
import { FontProvider } from "./font-provider.tsx";
import { ResponsiveIndicator } from "./responsive-indicator.tsx";

import "./layout.css";

type LayoutProps = {
  placeholders: Record<string, string>;
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <FontProvider />
      <div className="min-h-screen flex flex-col">
        <Header placeholders={props.placeholders} />
        <main className="flex-1">{props.children}</main>
        <Footer />
        <ResponsiveIndicator />
      </div>
    </>
  );
};
