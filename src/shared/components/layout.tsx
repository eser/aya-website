import { SiteHeader } from "./site-header";
import { ResponsiveIndicator } from "./responsive-indicator";

interface LayoutProps {
  placeholders: Record<string, string>;
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <SiteHeader placeholders={props.placeholders} />
      <main>{props.children}</main>
      <ResponsiveIndicator />
    </>
  );
}

export { Layout };
