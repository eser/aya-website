import Link from "next/link";
import {
  type VenueListResult,
  type Profile,
} from "shared/src/venue-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface VenueListProps {
// }

const VenueList = async (/* props: VenueListProps */) => {
  const { supabase } = getSupabaseServer();

  const venueListResponse = await supabase.functions.invoke<
    VenueListResult
  >(
    "venue-list",
    { body: JSON.stringify({}) },
  );

  const venues = venueListResponse.data?.payload ?? [];

  return (
    <>
      <h1>
        Merkezler
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={venues.length > 0}
          then={
            <ul className="list-disc">
              {venues.map((profile: Profile) => (
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

export { VenueList };
