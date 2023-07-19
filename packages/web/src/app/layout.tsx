import "server-only";

// import { siteConfig } from "@/shared/config.ts";
import { languages } from "@/shared/i18n/languages.ts";

import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { SupabaseProvider } from "@/shared/supabase/supabase-provider.tsx";
import { SupabaseAuthProvider } from "@/shared/supabase/supabase-auth-provider.tsx";

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

const DEFAULT_LANG = languages[0] ?? { code: "tr", dir: "ltr" };

const Layout = async (props: RootLayoutProps) => {
  const { supabase } = getSupabaseServer();
  const session = await supabase.auth.getSession();

  return (
    <html
      lang={DEFAULT_LANG.code}
      dir={DEFAULT_LANG.dir}
      suppressHydrationWarning={true}
    >
      <head />
      <body className="min-h-screen font-sans antialiased">
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

// FIXME(@eser) see: https://github.com/vercel/next.js/issues/49373
const dynamic = "force-dynamic";
// const revalidate = 60;

export { dynamic, Layout, Layout as default };
