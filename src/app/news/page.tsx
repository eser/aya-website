import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";

import { mdx } from "@/shared/lib/mdx.tsx";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { components } from "@/shared/components/userland/userland.ts";

type IndexPageProps = {
  params: Promise<never>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(_props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const { t } = await getTranslations();

  return {
    title: t("Layout", "News"),
    description: "",
  };
}

async function IndexPage(_props: IndexPageProps) {
  const { t, locale } = await getTranslations();

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  const contentText = `# ${t("Layout", "News")}

${t("Layout", "Content not yet available.")}`;

  const mdxSource = await mdx(contentText, components);

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <article className="content">{mdxSource?.content}</article>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
