import * as React from "react";
import type { Metadata } from "next";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { ProfileCard } from "@/shared/components/userland/profile-card/profile-card.tsx";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();
  return {
    title: t("Layout", "Elements"),
  };
}

// Main page component
async function ElementsPage() {
  const { t, locale } = await getTranslations();

  const profiles = await backend.getProfilesByKind(locale.code, "organization");

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <div className="content">
          <h2>{t("Layout", "Elements")}</h2>

          {/* Organizations Section */}
          {profiles !== null && profiles.length > 0
            ? (
              <section className="mb-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {profiles.map((profile) => <ProfileCard key={profile.slug} profile={profile} />)}
                </div>
              </section>
            )
            : (
              <div className="text-center py-10">
                <p className="text-xl text-muted-foreground">{t("ElementsPage", "NoProfilesFound")}</p>
              </div>
            )}
        </div>
      </section>
    </PageLayout>
  );
}

export { ElementsPage as default };
