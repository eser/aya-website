import { dir } from "i18next";
import { ThemeProvider } from "./theme-provider";
import { FontProvider } from "./font-provider.tsx";

import "./global.css";

const languages = ["tr", "en"];

const generateStaticParams = () => {
  const paths = languages.map((lang) => ({
    lang: lang,
  }));

  return Promise.resolve(paths);
};

const Layout = ({ children, params }) => {
  return (
    <html
      lang={params.lang}
      dir={dir(params.lang)}
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export { generateStaticParams, Layout, Layout as default };
