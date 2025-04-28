import { type ProfileGetResult } from "shared/src/profile-get-result.ts";
import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { ProfileView } from "@/shared/components/profiles/view.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};

interface ProfilePageProps {
  params: Awaited<{
    // lang: Language;
    slugs: [string, ...string[]];
  }>;
}

const ProfilePage = async (props: ProfilePageProps) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  const [slug, ...pathSlugs] = (await props.params).slugs;

  const individualProfileResponse: ProfileGetResult = {
    data: {
      payload: {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
      },
    },
  };

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

export { ProfilePage as default };
