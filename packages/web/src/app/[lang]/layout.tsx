import { dir } from "i18next";
import { createServerSupabaseClient } from "@/shared/lib/supabase-server";
import { SupabaseProvider } from "@/shared/contexts/supabase-provider.tsx";
import { SupabaseAuthProvider } from "@/shared/contexts/supabase-auth-provider.tsx";
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

const Layout = async (props: RootLayoutProps) => {
  const supabase = createServerSupabaseClient();
  const session = await supabase.auth.getSession();

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
          <SupabaseProvider>
            <SupabaseAuthProvider
              serverSession={session.data?.session}
            >
              {props.children}
            </SupabaseAuthProvider>
          </SupabaseProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export { generateStaticParams, Layout, Layout as default };
