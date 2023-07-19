import Link from "next/link";
import {
  type OrganizationListResult,
  type Profile,
} from "shared/src/organization-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

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

  return (
    <>
      <h1>
        Organizasyonlar
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={organizations.length > 0}
          then={
            <ul className="list-disc">
              {organizations.map((profile: Profile) => (
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

export { OrganizationList };
