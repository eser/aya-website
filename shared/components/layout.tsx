import { SiteHeader } from "./site-header";
import { ResponsiveIndicator } from "./responsive-indicator";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <ResponsiveIndicator />
    </>
  );
}

export { Layout };
