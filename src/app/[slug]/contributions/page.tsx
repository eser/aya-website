import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { ProductCard } from "@/shared/components/userland/products/product-card.tsx";
import { ProductGrid } from "@/shared/components/userland/products/product-grid.tsx";
import styles from "./page.module.css";

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const profileData = await backend.getProfile(locale.code, params.slug);
  if (profileData === null) {
    notFound();
  }

  return {
    title: `${profileData.title} - ${t("Layout", "Contributions")}`,
    description: profileData.description,
  };
}

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { t, locale } = await getTranslations();

  const membershipData = await backend.getProfileMemberships(locale.code, params.slug, "product");

  if (membershipData === null) {
    notFound();
  }

  return (
    <article className="content space-y-6">
      <div className="flex flex-col gap-2">
        <h2>{t("Layout", "Contributions")}</h2>
        <h3 className="text-muted-foreground">
          {t("Contributions", "A collection of open source projects and organizations.")}
        </h3>
      </div>

      {membershipData.length > 0
        ? (
          <ProductGrid>
            {membershipData.map((membership) => {
              const product = membership.profile;

              membership.properties = {
                stats: {
                  issues: {
                    total: 20,
                    resolved: 10,
                  },
                  prs: {
                    total: 45,
                    resolved: 42,
                  },
                  stars: 206,
                  commits: 156,
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
        )
        : (
          <div className={styles.emptyState}>
            <p>{t("Contributions", "No contributions found.")}</p>
          </div>
        )}
    </article>
  );
}

export { IndexPage as default };
