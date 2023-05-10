import { dir } from "i18next";
import { ThemeProvider } from "./theme-provider.tsx";
import { FontProvider } from "./font-provider.tsx";
import { Analytics } from "./analytics.tsx";

import "./global.css";

const languages = ["tr", "en"];

const generateStaticParams = () => {
  const paths = languages.map((lang) => ({
    lang: lang,
  }));

  return Promise.resolve(paths);
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

const Layout = (props: RootLayoutProps) => {
  return (
    <html
      lang={props.params.lang}
      dir={dir(props.params.lang)}
      suppressHydrationWarning={true}
    >
      <head />
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
        <FontProvider />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {props.children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export { generateStaticParams, Layout, Layout as default };
