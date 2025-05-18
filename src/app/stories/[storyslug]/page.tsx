import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { mdx } from "@/shared/lib/mdx.tsx";
import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";
import { components } from "@/shared/components/userland/userland.ts";

type IndexPageProps = {
  params: Promise<{
    storyslug: string;
  }>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const { locale } = await getTranslations();

  const storyData = await backend.getStory(locale.code, params.storyslug);

  if (storyData === null) {
    notFound();
  }

  return {
    title: storyData.title,
    description: storyData.summary,
  };
}

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const { locale } = await getTranslations();

  const placeholders: Record<string, string> = {
    locale: locale.name,
  };

  const storyData = await backend.getStory(locale.code, params.storyslug);

  if (storyData === null) {
    notFound();
  }

  const contentText = `${storyData.content}`;

  const mdxSource = await mdx(contentText, components);

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container px-4 py-8 mx-auto">
        <div className="content">
          <h2>{storyData.title}</h2>

          <article>{mdxSource?.content}</article>
        </div>
      </section>
    </PageLayout>
  );
}

export { IndexPage as default };
