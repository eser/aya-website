import * as React from "react";
import type { Metadata } from "next";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { ProductsContent } from "./_components/products-content.tsx";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Layout", "Products"),
  };
}

async function IndexPage() {
  const { t, locale } = await getTranslations();

  const profiles = await backend.getProfilesByKinds(locale.code, ["product"]);

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container px-4 py-8 mx-auto">
        <div className="content">
          <h2>{t("Layout", "Products")}</h2>

          <ProductsContent initialProfiles={profiles!} />
        </div>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
