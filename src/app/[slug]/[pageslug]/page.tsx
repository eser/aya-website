import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/shared/config.ts";
import { mdx } from "@/shared/lib/mdx.tsx";
import { backend } from "@/shared/modules/backend/backend.ts";
import { getNavigationState } from "@/shared/modules/navigation/get-navigation-state.ts";
import { components } from "@/shared/components/userland/userland.ts";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
};

type IndexPageProps = {
  params: Promise<{
    slug: string;
    pageslug: string;
  }>;
};

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  const navigationState = await getNavigationState();

  const profileData = await backend.getProfile(params.slug, navigationState.locale.code);

  if (profileData === null) {
    notFound();
  }

  const page = profileData.pages.find((page) => page.slug === params.pageslug);
  if (page === undefined) {
    notFound();
  }

  const pageData = await backend.getProfilePage(page.id, navigationState.locale.code);

  if (pageData === null) {
    notFound();
  }

  const contentText = `# ${pageData.title}\n\n${pageData.content}`;

  const mdxSource = await mdx(contentText, components);

  return (
    <div className="flex max-w-[980px] flex-col items-start">
      <article className="content">{mdxSource?.content}</article>
    </div>
  );
}

export { IndexPage as default };
