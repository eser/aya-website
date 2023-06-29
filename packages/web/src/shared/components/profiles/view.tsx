import { type PeopleGetResult } from "types/src/people-get-result.ts";

import { type Language } from "@/shared/i18n/languages.ts";
import { useSupabaseServer } from "@/shared/hooks/use-supabase-server.ts";
import { ProfileHeading } from "./heading.tsx";
import { ProfilePages } from "./pages.tsx";

interface ProfileViewProps {
  lang: Language;
  slugs: string[];
}

const ProfileView = async (props: ProfileViewProps) => {
  const { supabase } = useSupabaseServer();

  const [profileSlug, profilePageSlug] = props.slugs;

  const individualProfileResponse = await supabase.functions.invoke<
    PeopleGetResult
  >(
    "people-get",
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
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Profile
        </h1>
        <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Profile not found.
        </div>
      </>
    );
  }

  return (
    <>
      <ProfileHeading lang={props.lang} item={profile} />
      <ProfilePages
        lang={props.lang}
        item={profile}
        pageSlug={profilePageSlug}
      />
    </>
  );
};

export { ProfileView };
