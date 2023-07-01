import Link from "next/link";
import { useSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import {
  type ProductsListResult,
  type Profile,
} from "types/src/products-list-result.ts";

// interface ProfileListProps {
// }

const ProfileList = async (/* props: ProfileListProps */) => {
  const { supabase } = useSupabaseServer();

  const productsListResponse = await supabase.functions.invoke<ProductsListResult>(
    "products-list",
  );

  return (
    <>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Üretimler
      </h1>
      <div className="max-w-[980px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {productsListResponse.data?.payload.map((profile: Profile) => (
            <li key={profile.id}>
              <Link href={`/${profile.slug}`}>{profile.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { ProfileList };
