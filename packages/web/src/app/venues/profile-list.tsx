import Link from "next/link";
import {
  type VenueListResult,
  type Profile,
} from "shared/src/venue-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = getSupabaseServer();

  const venueListResponse = await supabase.functions.invoke<
    VenueListResult
  >(
    "venue-list",
    { body: JSON.stringify({}) },
  );

  const profiles = venueListResponse.data?.payload ?? [];

  return (
    <>
      <h1>
        Merkezler
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={profiles.length > 0}
          then={
            <ul className="list-disc">
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
