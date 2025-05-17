import * as React from "react";
import type { Metadata } from "next";

import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { Story } from "@/shared/components/userland/story/story.tsx";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslations();

  return {
    title: t("Layout", "News"),
  };
}

async function IndexPage() {
  const { t, locale } = await getTranslations();

  const stories = await backend.getStoriesByKinds(locale.code, ["news"]);

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <div className="content">
          <h2>{t("Layout", "News")}</h2>

          {stories !== null && stories.length > 0
            ? (
              <div className="divide-y divide-border">
                {stories.map((story) => (
                  <Story
                    key={story.id}
                    story={story}
                  />
                ))}
              </div>
            )
            : (
              <div className="text-center py-10">
                <p className="text-xl text-muted-foreground">
                  {/* TODO: Add a specific translation key e.g., t("NewsPage", "NoNewsFound") */}
                  {t("Layout", "Content not yet available.")}
                </p>
              </div>
            )}
        </div>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
