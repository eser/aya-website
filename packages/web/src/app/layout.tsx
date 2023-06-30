import "server-only";

// import { siteConfig } from "@/shared/config/site.ts";
import { languages } from "@/shared/i18n/languages.ts";

import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import { SupabaseProvider } from "@/shared/contexts/supabase-provider.tsx";
import { SupabaseAuthProvider } from "@/shared/contexts/supabase-auth-provider.tsx";

import { ThemeProvider } from "./theme-provider.tsx";
import { FontProvider } from "./font-provider.tsx";
import { Analytics } from "./analytics.tsx";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    // lang: Language;
  };
}

const DEFAULT_LANG = languages[0]!;

const Layout = async (props: RootLayoutProps) => {
  const { supabase } = useSupabaseServer();
  const session = await supabase.auth.getSession();

  return (
    <html
      lang={DEFAULT_LANG.code}
      dir={DEFAULT_LANG.dir}
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

export { Layout, Layout as default };
