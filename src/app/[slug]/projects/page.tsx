import * as React from "react";
import { notFound } from "next/navigation";

// import type { Metadata } from "next";

import { mdx } from "@/shared/lib/mdx.tsx";
import { backend } from "@/shared/modules/backend/backend.ts";
// import { siteConfig } from "@/shared/config.ts";
// import type { Language } from "@/shared/modules/i18n/languages.ts";

import { components } from "@/shared/components/userland/userland.ts";

// Metadata might be better handled primarily in layout.tsx now
// export const metadata: Metadata = { ... };
// export const viewport = { ... };

type IndexPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function IndexPage(props: IndexPageProps) {
  const params = await props.params;

  // *** Remove data fetching here - Layout handles it ***
  // const data = await backend.getProfile(params.slug);
  // if (data === null) {
  //    notFound();
  // }

  // Get the description/content directly.
  // We need a way to get *just* the description here.
  // Option 1: Fetch it again (simple but slightly less efficient)
  // Option 2: Modify backend.getProfile or have a separate function
  // Option 3: Pass data down from layout (more complex with Server Components)
  // Let's stick with Option 1 for now for simplicity, unless backend.getProfile is very slow.
  const profileData = await backend.getProfile(params.slug); // Re-fetch for simplicity for now
  if (profileData === null) {
    notFound();
  }

  const contentText = `# Projeler

Henüz içerik bulunmamaktadır.`;

  const mdxSource = await mdx(
    contentText,
    components,
  );

  return (
    <article className="content">
      {mdxSource?.content}
    </article>
  );
}

export { IndexPage as default };
