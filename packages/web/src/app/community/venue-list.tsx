import Link from "next/link";
import {
  type Profile,
  type VenueListResult,
} from "shared/src/venue-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";

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

  if (venues.length === 0) {
    return (
      <p>
        Liste boş.
      </p>
    );
  }

  return (
    <ul>
      {venues.map((profile: Profile) => (
        <li key={profile.id}>
          <Link href={`/${profile.slug}`}>{profile.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { VenueList };
