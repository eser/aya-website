import type { OrganizationListResult, Profile } from "@/shared/registry/organization-list-result.ts";
import { useRegistry } from "@/shared/registry/use-registry";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// type OrganizationListProps = {
// };

export const OrganizationList = async (/* props: OrganizationListProps */) => {
  const { registry } = useRegistry();

  const organizationListResponse = await registry.functions.invoke<
    OrganizationListResult
  >(
    "organization-list",
    { body: JSON.stringify({}) },
  );

  const organizations = organizationListResponse.data?.payload ?? [];

  if (organizations.length === 0) {
    return (
      <p>
        Liste boş.
      </p>
    );
  }

  return (
    <Cards>
      {organizations.map((profile: Profile) => (
        <Card
          key={profile.id}
          imageUri={profile.profilePictureUri}
          category="organizasyon"
          title={profile.title}
          description={profile.description}
          href={`/${profile.slug}`}
        />
      ))}
    </Cards>
  );
};
