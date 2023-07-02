import Link from "next/link";
import {
  type CommunityListResult,
  type Profile,
} from "types/src/community-list-result.ts";
import { useSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = useSupabaseServer();

  const communityListResponse = await supabase.functions.invoke<CommunityListResult>(
    "community-list",
    { body: JSON.stringify({}) },
  );

  const profiles = communityListResponse.data?.payload ?? [];

  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Topluluk
      </h1>
      <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {profiles.map((profile: Profile) => (
            <li key={profile.id}>
              <Link href={`/${profile.slug}`}>{profile.title}</Link>
            </li>
          ))}
        </ul>
        <Conditional test={profiles.length === 0}>
          Liste boş.
        </Conditional>
      </div>
    </>
  );
};

export { ProfileList };
