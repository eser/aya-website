import * as React from "react";
import type { Metadata } from "next";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { type Profile } from "@/shared/components/userland/profile-card/profile-card.tsx";
import { ElementsContent } from "./_components/elements-content.tsx";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Layout", "Elements"),
  };
}

async function IndexPage() {
  const { t, locale } = await getTranslations();

  const profiles = await backend.getProfilesByKinds(locale.code, ["individual", "organization"]);
  const initialProfiles = (
    profiles?.filter((profile) => profile.kind === "individual" || profile.kind === "organization") ??
      []
  ) satisfies Profile[];

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <div className="content">
          <h2>{t("Layout", "Elements")}</h2>

          <ElementsContent initialProfiles={initialProfiles} />
        </div>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
