import { Header } from "./header.tsx";
import { Footer } from "./footer.tsx";
import { ResponsiveIndicator } from "./responsive-indicator.tsx";

import "./layout.css";

type LayoutProps = {
  placeholders: Record<string, string>;
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header placeholders={props.placeholders} />
      <main className="flex-1">{props.children}</main>
      <Footer />
      <ResponsiveIndicator />
    </div>
  );
};
