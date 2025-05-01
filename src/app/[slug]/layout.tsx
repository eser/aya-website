import NextImage from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import * as React from "react";

import { backend } from "@/shared/modules/backend/backend.ts";
import type { GetProfileData } from "@/shared/modules/backend/profiles/get-profile.ts";

import { PageLayout } from "@/shared/components/page-layouts/default/page-layout.tsx";

import styles from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

async function Layout(props: LayoutProps) {
  const params = await props.params;
  const placeholders: Record<string, string> = {
    slug: params.slug,
  };

  const data: GetProfileData | null = await backend.getProfile(params.slug);

  if (data === null) {
    notFound();
  }

  return (
    <PageLayout placeholders={placeholders}>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
          <aside className="flex flex-col gap-4">
            {data.profile_picture_uri && (
              <NextImage
                src={data.profile_picture_uri}
                alt={`${data.title}'s profile picture`}
                width={280}
                height={280}
                className="rounded-full border"
              />
            )}

            <div className={styles.hero}>
              <h1>
                {data.title}
              </h1>

              <h2>
                {data.slug}
              </h2>

              <p>
                {data.description}
              </p>
            </div>

            <nav className={styles.nav}>
              <ul>
                <li>
                  <NextLink href={`/${params.slug}`}>
                    Profil
                  </NextLink>
                </li>
                {data.pages && data.pages.map((page) => (
                  <li key={page.slug}>
                    <NextLink href={`/${params.slug}/${page.slug}`}>
                      {page.title}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main>
            {props.children}
          </main>
        </div>
      </section>
    </PageLayout>
  );
}

export { Layout as default };
