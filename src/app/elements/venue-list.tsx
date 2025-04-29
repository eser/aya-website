import type { Profile, VenueListResult } from "@/shared/registry/venue-list-result.ts";
import { useRegistry } from "@/shared/registry/use-registry";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// type VenueListProps = {
// };

export const VenueList = async (/* props: VenueListProps */) => {
  const { registry } = useRegistry();

  const venueListResponse = await registry.functions.invoke<
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
