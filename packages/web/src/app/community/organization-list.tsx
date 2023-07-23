import {
  type OrganizationListResult,
  type Profile,
} from "shared/src/organization-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// interface OrganizationListProps {
// }

const OrganizationList = async (/* props: OrganizationListProps */) => {
  const { supabase } = getSupabaseServer();

  const organizationListResponse = await supabase.functions.invoke<
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
          category="organizasyon"
          title={profile.title}
          description={profile.description}
          href={`/${profile.slug}`}
        />
      ))}
    </Cards>
  );
};

export { OrganizationList };
