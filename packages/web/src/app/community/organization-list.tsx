import Link from "next/link";
import {
  type OrganizationListResult,
  type Profile,
} from "shared/src/organization-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";

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
    <ul>
      {organizations.map((profile: Profile) => (
        <li key={profile.id}>
          <Link href={`/${profile.slug}`}>{profile.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { OrganizationList };
