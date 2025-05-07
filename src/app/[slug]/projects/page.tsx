import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { mdx } from "@/shared/lib/mdx.tsx";
import { backend } from "@/shared/modules/backend/backend.ts";
import { getTranslations } from "@/shared/modules/i18n/get-translations.tsx";
import { components } from "@/shared/components/userland/userland.ts";

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

  const profileData = await backend.getProfile(params.slug, locale.code);
  if (profileData === null) {
    notFound();
  }

  const contentText = `# ${t("Layout", "Projects")}

${t("Layout", "Content not yet available.")}`;

  const mdxSource = await mdx(contentText, components);

  return <article className="content">{mdxSource?.content}</article>;
}

export { IndexPage as default };
