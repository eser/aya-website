import { type ProfileGetResult } from "shared/src/profile-get-result.ts";

// import { type Language } from "@/shared/i18n/languages.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { ProfileHeading } from "./heading.tsx";
import { ProfilePages } from "./pages.tsx";

interface ProfileViewProps {
  // lang: Language;
  slugs: string[];
}

const ProfileView = async (props: ProfileViewProps) => {
  const { supabase } = getSupabaseServer();

  const [profileSlug, profilePageSlug] = props.slugs;

  const individualProfileResponse = await supabase.functions.invoke<
    ProfileGetResult
  >(
    "profile-get",
    {
      body: JSON.stringify({
        slug: profileSlug,
      }),
    },
  );

  const profile = individualProfileResponse.data?.payload ?? null;

  if (profile === null) {
    return (
      <>
        <h1>
          Profile
        </h1>
        <div className="max-w-[980px] text-lg md:text-xl">
          Profile &quot;{props.slugs[0] ?? "-"}&quot; not found.
        </div>
      </>
    );
  }

  return (
    <>
      <ProfileHeading item={profile} />
      <ProfilePages
        item={profile}
        pageSlug={profilePageSlug}
      />
    </>
  );
};

export { ProfileView };
