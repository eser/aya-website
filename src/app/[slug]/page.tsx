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
    title: profileData.title,
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

  let contentText: string;

  if (profileData.custom_index_page_id !== null) {
    const indexPageData = await backend.getProfilePage(profileData.custom_index_page_id, navigationState.locale.code);

    contentText = indexPageData?.content ?? "";
  } else {
    contentText = `
    # Profil

    Henüz içerik bulunmamaktadır. (Dil = ${navigationState.locale.name})
    `;
  }

  const mdxSource = await mdx(contentText, components);

  return <article className="content">{mdxSource?.content}</article>;
}

export { IndexPage as default };
