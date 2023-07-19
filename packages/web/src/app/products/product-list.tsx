import Link from "next/link";
import {
  type ProductListResult,
  type Profile,
} from "shared/src/product-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";

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

  if (products.length === 0) {
    return (
      <p>
        Liste boş.
      </p>
    );
  }

  return (
    <ul>
      {products.map((profile: Profile) => (
        <li key={profile.id}>
          <Link href={`/${profile.slug}`}>{profile.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { ProductList };
