import {
  type ProductListResult,
  type Profile,
} from "shared/src/product-list-result.ts";
import { getSupabaseServer } from "@/shared/supabase/use-supabase-server.ts";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

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
    <Cards>
      {products.map((profile: Profile) => (
        <Card
          key={profile.id}
          imageUri={profile.profilePictureUri}
          category="üretim"
          title={profile.title}
          description={profile.description}
          href={`/${profile.slug}`}
        />
      ))}
    </Cards>
  );
};

export { ProductList };
