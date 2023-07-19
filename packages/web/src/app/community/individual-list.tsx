import Link from "next/link";
import {
  type IndividualListResult,
  type Profile,
} from "shared/src/individual-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface IndividualListProps {
// }

const IndividualList = async (/* props: IndividualListProps */) => {
  const { supabase } = getSupabaseServer();

  const individualListResponse = await supabase.functions.invoke<IndividualListResult>(
    "individual-list",
    { body: JSON.stringify({}) },
  );

  const individuals = individualListResponse.data?.payload ?? [];

  return (
    <>
      <h1>
        Kişiler
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={individuals.length > 0}
          then={
            <ul className="list-disc">
              {individuals.map((profile: Profile) => (
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

export { IndividualList };
