import Link from "next/link";
import {
  type CommunityListResult,
  type Profile,
} from "shared/src/community-list-result.ts";
import { useSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = useSupabaseServer();

  const communityListResponse = await supabase.functions.invoke<
    CommunityListResult
  >(
    "community-list",
    { body: JSON.stringify({}) },
  );

  const profiles = communityListResponse.data?.payload ?? [];

  return (
    <>
      <h1 className="my-0">
        Topluluk
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={profiles.length > 0}
          then={
            <ul className="my-0 ml-6 list-disc [&>li]:mt-2">
              {profiles.map((profile: Profile) => (
                <li key={profile.id}>
                  <Link href={`/${profile.slug}`}>{profile.title}</Link>
                </li>
              ))}
            </ul>
          }
          else={
            <p>
              Liste boş.
            </p>
          }
        />
      </div>
    </>
  );
};

export { ProfileList };
