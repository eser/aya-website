import "server-only";
import { dir } from "i18next";

import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import { SupabaseProvider } from "@/shared/contexts/supabase-provider.tsx";
import { SupabaseAuthProvider } from "@/shared/contexts/supabase-auth-provider.tsx";

import { ThemeProvider } from "./theme-provider.tsx";
import { FontProvider } from "./font-provider.tsx";
import { Analytics } from "./analytics.tsx";

import "./global.css";

// TODO(@eser) must be re-enabled as soon as next.js bug is fixed
//             reference: https://github.com/vercel/next.js/issues/49373

// const languages = ["tr", "en"];

// const generateStaticParams = () => {
//   const paths = languages.map((lang) => ({
//     lang: lang,
//   }));

//   return Promise.resolve(paths);
// };

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

const Layout = async (props: RootLayoutProps) => {
  const { supabase } = useSupabaseServer();
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

export { Layout, Layout as default };
