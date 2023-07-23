import {
  type Profile,
  type VenueListResult,
} from "shared/src/venue-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

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
    <Cards>
      {venues.map((profile: Profile) => (
        <Card
          key={profile.id}
          imageUri={profile.profilePictureUri}
          category="merkez"
          title={profile.title}
          description={profile.description}
          href={`/${profile.slug}`}
        />
      ))}
    </Cards>
  );
};

export { VenueList };
