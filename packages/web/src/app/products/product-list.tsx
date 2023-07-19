import Link from "next/link";
import {
  type ProductListResult,
  type Profile,
} from "shared/src/product-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Conditional } from "@/shared/components/conditional.tsx";

// interface ProductListProps {
// }

const ProductList = async (/* props: ProductListProps */) => {
  const { supabase } = getSupabaseServer();

  const productListResponse = await supabase.functions.invoke<
    ProductListResult
  >(
    "product-list",
    { body: JSON.stringify({}) },
  );

  const products = productListResponse.data?.payload ?? [];

  return (
    <div className="max-w-[980px] text-lg sm:text-xl">
      <Conditional
        test={products.length > 0}
        then={
          <ul className="list-disc">
            {products.map((profile: Profile) => (
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
  );
};

export { ProductList };
