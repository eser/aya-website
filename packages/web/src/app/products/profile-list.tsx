import Link from "next/link";
import {
  type ProductsListResult,
  type Profile,
} from "shared/src/products-list-result.ts";
import { useSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = useSupabaseServer();

  const productsListResponse = await supabase.functions.invoke<
    ProductsListResult
  >(
    "products-list",
    { body: JSON.stringify({}) },
  );

  const profiles = productsListResponse.data?.payload ?? [];

  return (
    <>
      <h1 className="my-0">
        Üretimler
      </h1>
      <div className="max-w-[980px] text-lg sm:text-xl">
        <Conditional
          test={profiles.length > 0}
          then={
            <ul className="my-0 ml-6 list-disc [&>li]:mt-2">
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
