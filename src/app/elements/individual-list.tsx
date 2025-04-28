import type {
  IndividualListResult,
  Profile,
} from "shared/src/individual-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// interface IndividualListProps {
// }

export const IndividualList = async (/* props: IndividualListProps */) => {
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
