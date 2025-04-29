import { type ProductListResult, type Profile } from "@/shared/registry/product-list-result.ts";
import { useRegistry } from "@/shared/registry/use-registry";
import { Card, Cards } from "@/shared/components/profiles/widgets/mod.ts";

// type ProductListProps = {
// };

export const ProductList = async (/* props: ProductListProps */) => {
  const { registry } = useRegistry();

  const productListResponse = await registry.functions.invoke<
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
