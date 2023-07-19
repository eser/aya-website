import Link from "next/link";
import {
  type IndividualListResult,
  type Profile,
} from "shared/src/individual-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";

// interface IndividualListProps {
// }

const IndividualList = async (/* props: IndividualListProps */) => {
  const { supabase } = getSupabaseServer();

  const individualListResponse = await supabase.functions.invoke<
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
    <ul>
      {individuals.map((profile: Profile) => (
        <li key={profile.id}>
          <Link href={`/${profile.slug}`}>{profile.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { IndividualList };
