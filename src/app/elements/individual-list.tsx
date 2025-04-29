import type { IndividualListResult, Profile } from "@/shared/registry/individual-list-result.ts";
import { useRegistry } from "@/shared/registry/use-registry";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// type IndividualListProps = {
// };

export const IndividualList = async (/* props: IndividualListProps */) => {
  const { registry } = useRegistry();

  const individualListResponse = await registry.functions.invoke<
    IndividualListResult
  >(
    "individual-list",
    { body: JSON.stringify({}) },
  );

  const individuals = individualListResponse.data?.payload ?? [];

  if (individuals.length === 0) {
    return (
      <p>
        Liste boş.
      </p>
    );
  }

  return (
    <Cards>
      {individuals.map((profile: Profile) => (
        <Card
          key={profile.id}
          imageUri={profile.profilePictureUri}
          category="kişi"
          title={profile.title}
          description={profile.description}
          href={`/${profile.slug}`}
        />
      ))}
    </Cards>
  );
};
