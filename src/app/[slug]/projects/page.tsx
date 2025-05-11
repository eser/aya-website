import type * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { ProductCard } from "@/shared/components/userland/products/product-card.tsx";
import { ProductGrid } from "@/shared/components/userland/products/product-grid.tsx";

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const profileData = await backend.getProfile(params.slug, locale.code);
  if (profileData === null) {
    notFound();
  }

  return {
    title: `${profileData.title} - ${t("Layout", "Projects")}`,
    description: profileData.description,
  };
}

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const membershipData = await backend.getProfileMemberships(params.slug, "product", locale.code);

  if (membershipData === null) {
    notFound();
  }

  return (
    <article className="content space-y-6">
      <div className="flex flex-col gap-2">
        <h2>{t("Layout", "Projects")}</h2>
        <h3 className="text-muted-foreground">
          {t("Projects", "A collection of open source projects and contributions.")}
        </h3>
      </div>

      <ProductGrid>
        {membershipData.map((membership) => {
          const product = membership.profile;

          // @ts-expect-error TODO(@eser) will be refactored to use the backend data
          product.role = membership.kind;
          // @ts-expect-error TODO(@eser) will be refactored to use the backend data
          product.stats = {
            "issues": 20,
            "stars": 206,
            "commits": 156,
            "prs": {
              "total": 45,
              "resolved": 42,
            },
          };

          return (
            <ProductCard
              key={membership.id}
              product={product}
              membership={membership}
            />
          );
        })}
      </ProductGrid>
    </article>
  );
}

export { IndexPage as default };
