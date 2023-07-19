import Link from "next/link";
import {
  type ProductListResult,
  type Profile,
} from "shared/src/product-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = getSupabaseServer();

  const productListResponse = await supabase.functions.invoke<
    ProductListResult
  >(
    "product-list",
    { body: JSON.stringify({}) },
  );

  const profiles = productListResponse.data?.payload ?? [];

  return (
    <>
      <h1>
        Üretimler
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={profiles.length > 0}
          then={
            <ul className="list-disc">
              {profiles.map((profile: Profile) => (
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

export { ProfileList };
