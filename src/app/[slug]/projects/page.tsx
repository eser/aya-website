import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { mdx } from "@/shared/lib/mdx.tsx";
import { backend } from "@/shared/modules/backend/backend.ts";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";
import { components } from "@/shared/components/userland/userland.ts";

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export async function generateMetadata(props: IndexPageProps, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const navigationState = await getNavigationState();

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);
  if (profileData === null) {
    notFound();
  }

  return {
    title: `${profileData.title} - Projeler`,
    description: profileData.description,
  };
}

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const navigationState = await getNavigationState();

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);
  if (profileData === null) {
    notFound();
  }

  const contentText = `# Projeler

Henüz içerik bulunmamaktadır.`;

  const mdxSource = await mdx(contentText, components);

  return <article className="content">{mdxSource?.content}</article>;
}

export { IndexPage as default };
