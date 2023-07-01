import { SiteHeader } from "./site-header.tsx";
import { SiteFooter } from "./site-footer.tsx";
import { ResponsiveIndicator } from "./responsive-indicator.tsx";

interface LayoutProps {
  placeholders: Record<string, string>;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <SiteHeader placeholders={props.placeholders} />
      <main>{props.children}</main>
      <SiteFooter placeholders={props.placeholders} />
      <ResponsiveIndicator />
    </>
  );
};

export { Layout };
