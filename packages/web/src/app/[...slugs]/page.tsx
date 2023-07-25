import { type ProfileGetResult } from "shared/src/profile-get-result.ts";
import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { ProfileView } from "@/shared/components/profiles/view.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
};

interface ProfilePageProps {
  params: {
    // lang: Language;
    slugs: [string, ...string[]];
  };
}

const ProfilePage = async (props: ProfilePageProps) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const [slug, ...pathSlugs] = props.params.slugs;

  const { supabase } = getSupabaseServer();

  const individualProfileResponse = await supabase.functions.invoke<
    ProfileGetResult
  >(
    "profile-get",
    {
      body: JSON.stringify({
        slug: slug,
      }),
    },
  );

  const profile = individualProfileResponse.data?.payload ?? null;

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <ProfileView
          slug={slug}
          pathSlugs={pathSlugs}
          item={profile}
        />
      </section>
    </Layout>
  );
};

export { metadata, ProfilePage, ProfilePage as default };
