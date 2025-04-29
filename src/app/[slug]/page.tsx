import * as React from "react";

import type { Metadata } from "next";

import { mdx } from "@/shared/lib/mdx.ts";
import { backend } from "@/shared/modules/backend/backend.ts";
import { siteConfig } from "@/shared/config.ts";
// import type { Language } from "@/shared/modules/i18n/languages.ts";

import { Layout } from "@/shared/components/layouts/default/layout.tsx";
import { components } from "@/shared/components/userland/userland.ts";

import styles from "./page.module.css";

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
  }>;
};

const IndexPage = async (props: IndexPageProps) => {
  const params = await props.params;
  const placeholders: Record<string, string> = {
    slug: params.slug,
  };

  const data = await backend.getUser(params.slug);

  const introText = `# ${data.name}

Hi, my name is ${data.name}. I'm working at ${data.company}.`;

  const mdxSource = await mdx(
    introText,
    components,
  );

  return (
    <Layout placeholders={placeholders}>
      <section className="container mx-auto px-4 grid items-center">
        <div className="flex max-w-[980px] flex-col items-start my-10">
          <article className={styles.content}>
            {mdxSource?.content}
          </article>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    </Layout>
  );
};

export { IndexPage as default };
