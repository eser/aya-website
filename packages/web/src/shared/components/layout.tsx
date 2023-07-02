import { SiteHeader } from "./site-header.tsx";
import { SiteFooter } from "./site-footer.tsx";
import { ResponsiveIndicator } from "./responsive-indicator.tsx";

interface LayoutProps {
  placeholders: Record<string, string>;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader placeholders={props.placeholders} />
      <main className="flex-1">{props.children}</main>
      <SiteFooter placeholders={props.placeholders} />
      <ResponsiveIndicator />
    </div>
  );
};

export { Layout };
